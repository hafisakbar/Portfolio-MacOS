import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const RESUME_URL = "/files/resume.pdf";

const MobileResume = ({ onBack }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadError, setLoadError] = useState(null);
  const pageWidth = Math.max(280, Math.min(560, window.innerWidth - 40));

  return (
    <section className="mobile-resume" aria-label="Resume">
      <header className="mobile-resume-header">
        <button
          type="button"
          className="mobile-back-button"
          onClick={onBack}
          aria-label="Return to portfolio"
        >
          <ArrowLeft aria-hidden="true" />
          <span>Go Back</span>
        </button>
        <h1>Resume</h1>
        <a
          className="mobile-resume-download"
          href={RESUME_URL}
          download="Hafis-Resume.pdf"
          aria-label="Download resume PDF"
          title="Download resume"
        >
          <Download aria-hidden="true" />
        </a>
      </header>

      <div className="mobile-resume-toolbar" aria-label="PDF page controls">
        <button
          type="button"
          onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
          disabled={pageNumber <= 1}
          aria-label="Previous PDF page"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <span>
          {pageNumber} / {numPages ?? "--"}
        </span>
        <button
          type="button"
          onClick={() =>
            setPageNumber((page) => Math.min(page + 1, numPages ?? 1))
          }
          disabled={!numPages || pageNumber >= numPages}
          aria-label="Next PDF page"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-resume-document">
        {loadError ? (
          <p className="mobile-resume-error" role="alert">
            Resume PDF gagal dimuat. Periksa koneksi lalu coba lagi.
          </p>
        ) : (
          <Document
            file={RESUME_URL}
            loading={<p className="mobile-resume-loading">Loading PDF...</p>}
            onLoadSuccess={({ numPages: loadedPages }) => {
              setNumPages(loadedPages);
              setPageNumber((page) => Math.min(page, loadedPages));
            }}
            onLoadError={setLoadError}
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        )}
      </div>
    </section>
  );
};

export default MobileResume;
