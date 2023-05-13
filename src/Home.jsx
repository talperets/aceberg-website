import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="fade-down" className="left">
        <h3>Welcome to my website!</h3>
        <p>
          Here you can find out more about my musical journey and current
          projects.
        </p>
      </div>
      <div className="right" data-aos="fade-left">
        <h3> Musical Journey and Current Projects</h3>
        <p>
          I started my musical practice at the age of 8, playing the drums.
          Since then, I have expanded my skills and knowledge to incorporate
          other instruments and technology. Currently, I am working on my
          upcoming album and performing live with a variety of instruments and
          equipment, including live drums, Pantam, Theremin, Ableton Push
          Looper, and Hyperpop/Techno/Neuro DnB remixes and original music.
        </p>
      </div>
      <div className="left" data-aos="fade-right">
        <h3>Passion for Music and Collaboration</h3>
        <p>
          My passion for music and dedication to honing my craft has led me on
          an exciting path of musical exploration and creation, getting to
          amazing collaboration and projects in the Gaming and Media work, such
          as working with incredible Titans like Noga Erez, ARB4 Valorant, Call
          of duty, Fortinte, and proudly presents the Top Rated Seller on
          Fiverr.
        </p>
      </div>
      <div className="right" data-aos="fade-left">
        <h3>Thank You</h3>
        <p>
          Thank you for visiting my website, and I hope you enjoy exploring my
          work.
        </p>
      </div>
    </div>
  );
}
