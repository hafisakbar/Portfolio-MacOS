import MobileResume from "#mobile/MobileResume.jsx";
import "./MobileNotes.css";

const MobileNotes = ({ onBack }) => (
  <div className="mobile-notes-screen">
    <MobileResume onBack={onBack} />
  </div>
);

export default MobileNotes;
