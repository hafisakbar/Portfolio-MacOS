import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import Mobile from "#mobile/Mobile.jsx";
import {
  Resume,
  Safari,
  Terminal,
  Finder,
  TxtFile,
  ImgFile,
  Contact,
  Photos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Mobile />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
      <Photos />

      <Home />
    </main>
  );
};

export default App;
