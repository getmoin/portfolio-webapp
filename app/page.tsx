import Type from "@/components/ui/type-writer";
import Home2 from "@/components/Home";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="home-section bg-gradient-to-bl from-gradient-start to-gradient-end md:bg-none"
      id="home"
    >
      <div className="home-content container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="home-header md:w-9/12 mx-auto text-center md:text-left">
            <h3 className="heading text-5xl font-bold font-Liquida mb-4">Hi, my name is</h3>
            <h1 className="heading-name text-5xl font-extrabold">
              <strong className="main-name">Moin K.M</strong>
            </h1>
            <br></br>
            <h1 className="heading-subname text-5xl font-extrabold">
              <strong className="main-subname">I specialize in developing the Infrastructure </strong>
            </h1>
            <h1 className="heading-subname text-5xl font-extrabold">
            <strong className="main-subname">to host various software applications</strong>
            </h1>
            <div style={{ padding: 10, textAlign: "left" }}>
              <Type />
            </div>
            <br></br>
            <h5 className="paragraph font-Liquida mb-4">Highly experienced Cloud Software Engineer, expertised in cloud computing, containerization, and security.
            Skilled in infrastructure design, development, and maintenance, with a strong focus on optimizing build and release processes.
            Proficient in Infrastructure as Code (IaC), programming and scripting languages, CI/CD, version control, and security.</h5>
            <br></br>
            <a href="mailto:moin.mohdk@gmail.com">
            <h3 className="button button1">Contact Me</h3>
            </a>
            <div className="footer-body-socials md:w-1/3 ">
            <ul className="footer-icons flex justify-left md:justify-end space-x-4">
              <li className="social-icons">
                <a
                  href="https://github.com/getmoin"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-2xl" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kmmoin/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
      <Home2 />
    </div>
  );
}
