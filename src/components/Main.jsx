import './Main.css';
import Face from "./face/Face";
import AboutMe from "./about-me/AboutMe";
import Navbar from "./navbar/Navbar";
import Projects from './Projects/Projects';
import Contact from './Contact-me/Contact';

export default function Main() {
  return (
    <div>
      <>
        <div className="page">
          <div><Navbar /></div>
          <div><Face /></div>
           <div><AboutMe /></div>
          <div><Projects /></div>
          <div><Contact /></div>
        </div>
      </>
    </div>
  );
}
