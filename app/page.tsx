import Type from "@/components/ui/type-writer";
import Home2 from "@/components/Home";

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
          </div>
        </div>
      </div>
      <Home2 />
    </div>
  );
}
