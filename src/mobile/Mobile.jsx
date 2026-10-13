import { useState } from "react";
import dayjs from "dayjs";
import {
  ArrowLeft,
  BatteryFull,
  ChevronRight,
  Pencil,
  Wifi,
} from "lucide-react";
import { locations } from "#constants";
import useWindowStore from "#store/window.js";
import MobileNotes from "#mobile/MobileNotes.jsx";
import MobileArticles from "#mobile/MobileArticles.jsx";
import MobileTerminal from "#mobile/MobileTerminal.jsx";
import MobileContact from "#mobile/MobileContact.jsx";
import "./Mobile.css";

const homeApps = [{ name: "Notes", icon: "notes", window: "resume" }];

const dockApps = [
  { name: "Portfolio", image: "/images/finder.png", window: "portfolio" },
  { name: "Articles", image: "/images/safari.png", window: "safari" },
  { name: "Terminal", image: "/images/terminal.png", window: "terminal" },
  { name: "Contacts", image: "/images/contact.png", window: "contact" },
];

const portfolioFolders = Object.values(locations);

const Mobile = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [folderStack, setFolderStack] = useState([]);
  const [previewItem, setPreviewItem] = useState(null);
  const [hoveredDockApp, setHoveredDockApp] = useState(null);
  const { openWindow } = useWindowStore();
  const currentFolder = folderStack.at(-1);
  const portfolioItems = currentFolder?.children ?? portfolioFolders;

  const goBack = () => {
    if (showResume) {
      setShowResume(false);
      return;
    }
    if (showArticles) {
      setShowArticles(false);
      return;
    }
    if (showTerminal) {
      setShowTerminal(false);
      return;
    }
    if (showContact) {
      setShowContact(false);
      return;
    }
    if (previewItem) {
      setPreviewItem(null);
      return;
    }
    if (folderStack.length > 0) {
      setFolderStack((stack) => stack.slice(0, -1));
      return;
    }
    setShowPortfolio(false);
  };

  const openPortfolioItem = (item) => {
    if (item.kind === "folder") {
      setFolderStack((stack) => [...stack, item]);
      return;
    }

    if (item.fileType === "pdf") {
      setShowResume(true);
      return;
    }

    if (item.fileType === "img") {
      setPreviewItem(item);
      return;
    }

    if (item.fileType === "txt") {
      setPreviewItem(item);
      return;
    }

    if (["fig", "url"].includes(item.fileType) && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <section
      className={`mobile-home${showPortfolio || showArticles || showTerminal || showContact ? " is-portfolio" : ""}`}
      aria-label="Mobile home screen"
    >
      <header className="mobile-status-bar">
        <time>{dayjs().format("h:mm A")}</time>
        <div className="mobile-dynamic-island" aria-hidden="true" />
        <div className="mobile-status-icons" aria-label="Wi-Fi connected">
          <Wifi aria-hidden="true" />
          <BatteryFull aria-hidden="true" />
        </div>
      </header>

      {showResume ? (
        <MobileNotes onBack={goBack} />
      ) : showArticles ? (
        <MobileArticles onBack={goBack} />
      ) : showTerminal ? (
        <MobileTerminal onBack={goBack} />
      ) : showContact ? (
        <MobileContact onBack={goBack} />
      ) : showPortfolio ? (
        <section
          className={`mobile-portfolio${previewItem ? " is-preview" : ""}`}
          aria-label={previewItem ? "File preview" : "Portfolio folders"}
        >
          <header className="mobile-portfolio-header">
            <button
              type="button"
              className="mobile-back-button"
              onClick={goBack}
              aria-label={
                previewItem
                  ? "Return to portfolio"
                  : currentFolder
                    ? "Go to previous folder"
                    : "Go back"
              }
            >
              <ArrowLeft aria-hidden="true" />
              <span>Go Back</span>
            </button>
            <h1>
              {previewItem ? "Preview" : (currentFolder?.name ?? "Portfolio")}
            </h1>
            <span aria-hidden="true" />
          </header>
          {previewItem ? (
            previewItem.fileType === "img" ? (
              <div className="mobile-image-preview">
                <img src={previewItem.imageUrl} alt={previewItem.name} />
              </div>
            ) : (
              <article className="mobile-text-preview">
                {previewItem.subtitle && <h2>{previewItem.subtitle}</h2>}
                {previewItem.description?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>
            )
          ) : (
            <>
              <nav className="mobile-breadcrumb" aria-label="Folder path">
                <button type="button" onClick={() => setFolderStack([])}>
                  Portfolio
                </button>
                {folderStack.map((folder, index) => (
                  <span className="mobile-breadcrumb-segment" key={folder.id}>
                    <ChevronRight aria-hidden="true" />
                    <button
                      type="button"
                      aria-current={
                        index === folderStack.length - 1
                          ? "location"
                          : undefined
                      }
                      onClick={() =>
                        setFolderStack((stack) => stack.slice(0, index + 1))
                      }
                    >
                      {folder.name}
                    </button>
                  </span>
                ))}
              </nav>
              <div className="mobile-portfolio-grid">
                {portfolioItems.map((item) => (
                  <button
                    key={`${item.type ?? item.fileType}-${item.id}-${item.name}`}
                    type="button"
                    className="mobile-portfolio-item"
                    onClick={() => openPortfolioItem(item)}
                    onPointerEnter={(event) => {
                      event.currentTarget.querySelector(
                        ".mobile-portfolio-icon",
                      ).style.transform = "translateY(-5px) scale(1.12)";
                    }}
                    onPointerLeave={(event) => {
                      event.currentTarget.querySelector(
                        ".mobile-portfolio-icon",
                      ).style.transform = "";
                    }}
                  >
                    <span className="mobile-portfolio-icon">
                      <img
                        src={
                          item.kind === "folder"
                            ? "/images/folder.png"
                            : item.icon
                        }
                        alt=""
                      />
                    </span>
                    <span className="mobile-portfolio-label">{item.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </section>
      ) : (
        <>
          <div className="mobile-app-grid">
            {homeApps.map((app) => (
              <button
                key={app.name}
                type="button"
                className="mobile-app"
                aria-label={`Open ${app.name}`}
                data-label={app.name}
                onPointerEnter={(event) => {
                  event.currentTarget.style.transform = "scale(1.12)";
                }}
                onPointerLeave={(event) => {
                  event.currentTarget.style.transform = "";
                }}
                onClick={() => setShowResume(true)}
              >
                <span className={`mobile-app-icon mobile-app-icon-${app.icon}`}>
                  {app.icon === "notes" ? (
                    <Pencil aria-hidden="true" />
                  ) : (
                    <img src="/images/terminal.png" alt="" />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="mobile-welcome">
            <p>
              {"Hey, I'm Hafis! Welcome to my"
                .split("")
                .map((letter, index) => (
                  <span
                    key={index}
                    style={{ fontVariationSettings: "'wght' 200" }}
                    onPointerEnter={(event) => {
                      event.currentTarget.style.fontVariationSettings =
                        "'wght' 900";
                    }}
                    onPointerLeave={(event) => {
                      event.currentTarget.style.fontVariationSettings =
                        "'wght' 200";
                    }}
                  >
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}
            </p>
            <h1>
              {"portfolio.".split("").map((letter, index) => (
                <span
                  key={index}
                  style={{ fontVariationSettings: "'wght' 400" }}
                  onPointerEnter={(event) => {
                    event.currentTarget.style.fontVariationSettings =
                      "'wght' 900";
                  }}
                  onPointerLeave={(event) => {
                    event.currentTarget.style.fontVariationSettings =
                      "'wght' 400";
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          <nav className="mobile-dock" aria-label="Apps">
            {dockApps.map((app) => (
              <button
                key={app.name}
                type="button"
                className="mobile-dock-app"
                aria-label={`Open ${app.name}`}
                data-label={app.name}
                onPointerEnter={(event) => {
                  setHoveredDockApp(app.name);
                  event.currentTarget.style.transform =
                    "translateY(-12px) scale(1.28)";
                }}
                onPointerLeave={(event) => {
                  setHoveredDockApp(null);
                  event.currentTarget.style.transform = "";
                }}
                onClick={() => {
                  if (app.window === "portfolio") {
                    setFolderStack([]);
                    setShowPortfolio(true);
                    return;
                  }
                  if (app.window === "safari") {
                    setShowArticles(true);
                    return;
                  }
                  if (app.window === "terminal") {
                    setShowTerminal(true);
                    return;
                  }
                  if (app.window === "contact") {
                    setShowContact(true);
                    return;
                  }
                  openWindow(app.window);
                }}
              >
                {hoveredDockApp === app.name && (
                  <span className="mobile-hover-label">{app.name}</span>
                )}
                <img src={app.image} alt="" />
              </button>
            ))}
          </nav>
        </>
      )}
    </section>
  );
};

export default Mobile;
