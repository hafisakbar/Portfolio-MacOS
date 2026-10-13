import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mic,
  Search,
  Share,
} from "lucide-react";
import { blogPosts } from "#constants";
import "./MobileArticles.css";

const articleCategories = {
  1: "WEB DEVELOPMENT",
  2: "ANDROID DEVELOPMENT",
  3: "BACKEND DEVELOPMENT",
};

const MobileArticles = ({ onBack }) => {
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleBack = () => {
    if (activeArticle) {
      setActiveArticle(null);
      return;
    }
    onBack();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchText.trim();
    if (!query) return;

    let url;
    try {
      url = new URL(
        query.includes(" ")
          ? `https://www.google.com/search?q=${encodeURIComponent(query)}`
          : query,
      );
      if (!["http:", "https:"].includes(url.protocol)) {
        url = new URL(`https://${query}`);
      }
    } catch {
      url = new URL(`https://${query}`);
    }
    window.open(url.href, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mobile-articles" aria-label="Articles in Safari">
      <header className="mobile-articles-header">
        <button
          type="button"
          className="mobile-articles-back"
          onClick={handleBack}
          aria-label={activeArticle ? "Return to articles" : "Go back"}
        >
          <ChevronLeft aria-hidden="true" />
          <span>{activeArticle ? "Back to articles" : "Go Back"}</span>
        </button>
        <h1>Safari</h1>
        <span aria-hidden="true" />
      </header>

      <main className="mobile-articles-content">
        {activeArticle ? (
          <article className="mobile-article-detail">
            <p className="mobile-article-category">
              {articleCategories[activeArticle.id]}
            </p>
            <h2>{activeArticle.title.split(":")[0]}</h2>
            <p>{activeArticle.title.split(":").slice(1).join(":").trim()}</p>
            <img src={activeArticle.image} alt="" />
          </article>
        ) : (
          <section className="mobile-article-list">
            <h2>What I Do</h2>
            {blogPosts.map((post) => (
              <button
                type="button"
                className="mobile-article-card"
                key={post.id}
                onClick={() => setActiveArticle(post)}
                aria-label={`Open ${post.title.split(":")[0]}`}
              >
                <img src={post.image} alt="" />
                <div className="mobile-article-copy">
                  <p className="mobile-article-category">
                    {articleCategories[post.id]}
                  </p>
                  <h3>{post.title}</h3>
                </div>
              </button>
            ))}
          </section>
        )}
      </main>

      <footer className="mobile-safari-toolbar">
        <form className="mobile-safari-address" onSubmit={handleSearch}>
          <Search aria-hidden="true" />
          <input
            aria-label="Search or enter website name"
            placeholder="Search or enter website name"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="button" aria-label="Voice search" disabled>
            <Mic aria-hidden="true" />
          </button>
        </form>
        <div className="mobile-safari-actions" aria-label="Safari controls">
          <button
            type="button"
            aria-label="Back"
            onClick={handleBack}
            disabled={!activeArticle}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label="Forward" disabled>
            <ArrowRight aria-hidden="true" />
          </button>
          <span aria-hidden="true">
            <Share />
          </span>
          <span aria-hidden="true">
            <BookOpen />
          </span>
          <span aria-hidden="true">
            <Copy />
          </span>
          <span className="mobile-safari-chevron" aria-hidden="true">
            <ChevronRight />
          </span>
        </div>
      </footer>
    </section>
  );
};

export default MobileArticles;
