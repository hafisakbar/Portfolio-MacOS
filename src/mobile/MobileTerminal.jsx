import { Check, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { techStack } from "#constants";
import "./MobileTerminal.css";

const MobileTerminal = ({ onBack }) => (
  <section className="mobile-terminal" aria-label="Terminal tech stack">
    <header className="mobile-terminal-header">
      <button
        type="button"
        className="mobile-terminal-back"
        onClick={onBack}
        aria-label="Go back"
      >
        <ChevronLeft aria-hidden="true" />
        <span>Go Back</span>
      </button>
      <h1>Terminal</h1>
      <span aria-hidden="true" />
    </header>

    <main className="mobile-terminal-content">
      <p className="mobile-terminal-command">
        <strong>@Hafis %</strong> show tech stack
      </p>
      <div className="mobile-terminal-categories">
        {techStack.map(({ category, items }) => (
          <section className="mobile-terminal-category" key={category}>
            <h2>
              <ChevronRight aria-hidden="true" />
              {category}
            </h2>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="mobile-terminal-footnote" aria-label="Terminal status">
        <p>
          <Check aria-hidden="true" />
          <span>5 of 5 Tech Stacks Completed (100%)</span>
        </p>
        <p className="mobile-terminal-render-time">
          <Flag aria-hidden="true" />
          <span>Render Tech Stack in Terminal: 5ms</span>
        </p>
      </footer>
    </main>
  </section>
);

export default MobileTerminal;
