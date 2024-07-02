import React, { useState, useEffect } from "react";
import "./home.css";
import snakeImage from "../../../public/snakes-edit.png";
import { Island } from "../../components";

const Home = () => {
  const [isMouthOpen, setIsMouthOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMouthOpen(true); // Adjust scrollY value as needed
      } else {
        setIsMouthOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const input = inputValue.trim(); // Trim whitespace
      if (input !== "") {
        setTerminalOutput((prevOutput) => [...prevOutput, `${input}`]);
        setInputValue("");
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white min-h-screen pt-3">
      <Island />
      <section className="text-center pb-0 p-3 pt-16 lg:p-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Valkyrie - Guardian Of Your Cyber Realms
        </h1>
        <p className="mt-4 text-zinc-400">
          At Valkyrie, we defend your digital realms from modern threats.
          Empowering businesses and individuals with adaptive cybersecurity
          solutions that evolve with technology.
        </p>
        <div className="mt-6 space-y-4 lg:space-x-4 lg:space-y-0">
          <a href="/auth">
            <button className="w-11/12 lg:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg">
              Get Community Version
            </button>
          </a>
          <a href="/auth">
            <button className="w-11/12 lg:w-auto border border-zinc-400 text-white px-6 py-3 rounded-lg">
              Try Premium Version
            </button>
          </a>
        </div>

        <div className="bg-background text-foreground flex flex-col items-center justify-center p-4 mt-10">
          <div
            style={{
              border: "0.0625em solid rgba(128, 132, 138, .5)",
            }}
            className="w-full max-w-4xl bg-card text-card-foreground rounded-lg shadow-2xl overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground p-4 flex items-center justify-between shadow-md">
              <span className="font-mono text-lg">Terminal</span>
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></span>
              </div>
            </div>
            <div
              style={{
                borderTop: "0.0625em solid rgba(128, 132, 138, .5)",
              }}
              className="p-4 font-mono text-sm bg-foreground flex flex-col justify-start text-background h-96 overflow-y-auto shadow-inner"
            >
              <div id="terminal-output" className="flex flex-col justify-start">
                <span className="text-left">
                  <span
                    style={{
                      color: "green",
                      marginRight: "10px",
                    }}
                  >
                    user@asgard:~$
                  </span>
                  Welcome to Valkyrie Systems!
                </span>
                <span className="text-left">
                  <span
                    style={{
                      color: "green",
                      marginRight: "10px",
                    }}
                  >
                    user@asgard:~$
                  </span>
                  Type 'valkyrie --help' to get started...
                </span>
                {terminalOutput.map((line, index) => (
                  <span className="text-left" key={index}>
                    <span
                      style={{
                        color: "green",
                        marginRight: "10px",
                      }}
                    >
                      user@asgard:~$
                    </span>
                    {line}
                  </span>
                ))}
              </div>
              <div className="flex mt-2">
                <span className="text-primary-foreground">$</span>
                <input
                  id="terminal-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-primary-foreground ml-2 placeholder-muted-foreground"
                  placeholder="Type your command here..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-center py-12">
        <p className="text-zinc-400">
          Our systems are built on top of the most advanced cybersecurity
          technologies.
        </p>
        <div className="w-full overflow-scroll flex justify-center space-x-8 mt-4">
          <img className="w-16" src="../../../public/ai.png" alt="Facebook" />
          <img className="w-16" src="../../../public/node.png" alt="Google" />
          <img className="w-16" src="../../../public/js.png" alt="Airbnb" />
          <img className="w-16" src="../../../public/react.png" alt="Amazon" />
          <img className="w-16" src="../../../public/python.png" alt="Instacart" />
        </div>
      </section> */}

      <section className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold">Data-Centric ML Lifecycle</h2>
        <p className="text-zinc-400 mt-4">
          Valkyire's mission is to accelerate the development of artificial
          intelligence. We do this by providing a undefinedcentric, end-to-end
          solution to manage the entire lifecycle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Automate Processing</h3>
            <p className="text-zinc-400 mt-2">
              Understand every image and video with the best-in-class visual
              recognition technology.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Read More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Manage Dataset</h3>
            <p className="text-zinc-400 mt-2">
              Quickly check undefined quality and bias with Valkyire's advanced
              tools.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Read More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Human Behavior</h3>
            <p className="text-zinc-400 mt-2">
              Identify human behavior and their interactions in your physical
              spaces.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Read More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Ensure Public Safety</h3>
            <p className="text-zinc-400 mt-2">
              Recognize activities that need human attention through Valkyire's
              tracking and monitoring.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold">Our Best Service For You</h2>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a href="#" className="text-purple-600 border-b-2 border-purple-600">
            Automate Processing
          </a>
          <a href="#" className="text-zinc-400">
            Manage Dataset
          </a>
          <a href="#" className="text-zinc-400">
            Human Behavior
          </a>
          <a href="#" className="text-zinc-400">
            Ensure Public Safety
          </a>
        </div>
        <div className="mt-8 bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Automate Document Processing</h3>
          <p className="text-zinc-400 mt-2">
            Achieve robust document understanding and extraction across any
            document type. Extract undefined from unstructured documents with
            ease.
          </p>
          <a href="#" className="text-purple-600 mt-4 inline-block">
            Learn More
          </a>
          <img
            src="https://placehold.co/600x300"
            alt="Document Processing"
            className="mt-6"
          />
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold">
          Valkyire unlock your creative potential
        </h2>
        <p className="text-zinc-400 mt-4">
          Valkyire's mission is to accelerate the development of artificial
          intelligence. We do this by providing a undefinedcentric, end-to-end
          solution to manage the entire lifecycle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">
              Write copy & content that converts
            </h3>
            <p className="text-zinc-400 mt-2">
              Your AI sidekick is trained to produce high-converting marketing
              copy.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Brainstorm new ideas</h3>
            <p className="text-zinc-400 mt-2">
              Breakthrough creative block with Valkyire's AI to help you spark
              fresh ideas.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">10X your content output</h3>
            <p className="text-zinc-400 mt-2">
              Whether you're a creator or editor of a content team, Valkyire
              helps you scale.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Write better, everywhere</h3>
            <p className="text-zinc-400 mt-2">
              Whether writing emails, captions, or blog letters, Valkyire helps
              craft the perfect message.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">
              Create content in 26 languages
            </h3>
            <p className="text-zinc-400 mt-2">
              Valkyire can read and write content in 26 languages including
              English, Spanish, Japanese.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Build an AI-Powered business</h3>
            <p className="text-zinc-400 mt-2">
              Whether you're a creator or editor of a content team, Valkyire
              helps you scale.
            </p>
            <a href="#" className="text-purple-600 mt-4 inline-block">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold">Our Testimonials</h2>
        <p className="text-zinc-400 mt-4">
          Valkyire's mission is to accelerate the development of artificial
          intelligence. We do this by providing a undefinedcentric, end-to-end
          solution to manage the entire lifecycle.
        </p>
        <div className="mt-8 bg-zinc-800 p-6 rounded-lg">
          <p className="text-zinc-400">
            "We appreciate how the Scale AI team proactively seeks feedback and
            holds themselves accountable. Their QA team is careful and quick to
            seek clarification, and their attention to detail has produced some
            truly impressive results."
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://placehold.co/50x50"
              alt="Testimonial Author"
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold">Lyle Kaufman</p>
              <p className="text-zinc-400">Data Engineer, Sisykhus</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-zinc-900">
        <h2 className="text-3xl font-bold">
          Be the first to know when we launch
        </h2>
        <p className="text-zinc-400 mt-4">
          We're still building. Subscribe for updates and 20% off when we
          launch. No spam, we promise!
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-zinc-800 text-white flex-1"
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </div>
        <img
          src="https://placehold.co/600x300"
          alt="AI Hand"
          className="mt-8"
        />
      </section>

      <footer className="py-12 px-6 md:px-12 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold">Valkyrie</div>
          <ul className="flex space-x-8 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-zinc-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center text-zinc-400">
          <p>© Valkyrie 2024 All Rights Reserved</p>
          <p className="mt-2">Terms & conditions • Privacy policy • Sitemap</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
