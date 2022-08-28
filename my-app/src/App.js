import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w3-black main-content">
  {/* Icon Bar (Sidebar - hidden on small screens) */}
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {/* Avatar image in top left corner */}
    <img src="img/passport.jpeg" style={{ width: "100%" }} />
    <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
      <i className="fa fa-home w3-xxlarge" />
      <p>Home</p>
    </a>
    
    <a
      href="#publications"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-book w3-xxlarge" />
      <p>Publications</p>
    </a>
    <a
      href="#projects"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-file-code-o w3-xxlarge" />
      <p>Projects</p>
    </a>
    <a
      href="#involvements"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-users w3-xxlarge" />
      <p>Involvements</p>
    </a>
    <a
      href="#news"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-newspaper-o w3-xxlarge" />
      <p>News</p>
    </a>
    <a
      href="#cv"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-copy w3-xxlarge" />
      <p>CV</p>
    </a>
    
    <a
      href="#contact"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-envelope w3-xxlarge" />
      <p>Contact</p>
    </a>
  </nav>
  {/* Navbar on small screens (Hidden on medium and large screens) */}
  <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
      <a
        href="#"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        Home
      </a>
  
      <a
        href="#publications"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        Publications
      </a>
      <a
        href="#projects"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        Projects
      </a>
      <a
        href="#involvements"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        Involvements
      </a>
      <a
        href="#news"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        News
      </a>
      <a
        href="#cv"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        CV
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        Contact
      </a>
    </div>
  </div>
  {/* Page Content */}
  <div className="w3-padding-large" id="main">
    {/* Header/Home */}
    <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
      <h1 className="w3-jumbo">
        <span className="w3-hide-small">I'm</span> Christabel.
      </h1>
      <p>
        A self motivated and hardworking Computer Engineer. Passionate about
        identifying, learning and solving problems.
      </p>
      <img
        src="img/mine.jpg"
        alt="boy"
        className="w3-image"
        width={592}
        height={408}
      />
    </header>
    {/* About Section */}
    <div
      className="w3-content w3-justify w3-text-grey w3-padding-64"
      id="about"
    >
      <h2 className="w3-text-light-grey">Who is Christabel</h2>
      <hr style={{ width: 200 }} className="w3-opacity" />
      <p style={{ fontSize: 20 }}>
        <q>
          Faster running and no turning back for a glittering and a superb
          performance.
        </q>
        Since beginning my journey as a Computer Engineering student nearly four
        years ago, this quote has been a guide. I'm naturally reserved when I am
        not in a familiar territory. As a growing Computer Engineering student I
        have come to study the act of design, as such, as a designer I can say
        that i value simple content structure, clean design patterns and
        thoughful interactions. Although I have been endowed with the knowledge
        about different things, I am always availing myself at the slightest
        opportunity to study. Aside my interest in software I have also
        discovered I enjoy dealing with hardare components as such I took
        classes which has groomed me in the use of Arduino, Code Composer
        Studio, Energia among others. Currently, I have been actively pursing
        the study of Artifical Intelligence. Additionally, as my hobbies I enjoy
        listening to music and watching movies, however I also appreciate doing
        volunteering works which is why in 2016, I joined Emerging Leaders In
        Technology and Engineering(ELITE) a non profit organization which aims
        at exposing Senior High Schools students to electronics and programming.
      </p>
      <h3 className="w3-padding-16 w3-text-light-grey" id="publications">
        Publications
      </h3>
      {/* <div> */}
      <div style={{ display: "flex", flexWrap: "wrap" ,  justifyContent: "start"}}>
      <i className="fa fa-calendar"/> 
      <p> 2022</p>
       
    </div>
      
      <br></br>
      <a href="www.google.com">Publication Title</a><p>Text goes here..</p>
      
      <h4>Year</h4>
      <a href="www.google.com">Publication Title</a><p>Text goes here..</p>

      <h4>Year</h4>
      <a href="www.google.com">Publication Title</a><p>Text goes here..</p>
      <h3 className="w3-padding-16 w3-text-light-grey" id="projects">
        Projects
      </h3>
      <div style={{ flex: 1, flexDirection: "row", float: "left" }}>
          <section className="skills">
            <ul style={{ float: "left" }}>
              <li>
                <a href="https://gitlab.com/christabelAcquaye/final-year-project.git">
                  Electronic Toll Collection System
                </a>
              </li>
              <a href="https://gitlab.com/christabelAcquaye/final-year-project.git">
                <br />
              </a>
              <li>
                <a href="https://gitlab.com/christabelAcquaye/final-year-project.git" />
                <a href="https://github.com/timdereaper1/AI-project.git">
                  Automatic Monograph Assessor
                </a>
              </li>
              <a href="https://github.com/timdereaper1/AI-project.git">
                <br />
              </a>
              <li>
                <a href="https://github.com/timdereaper1/AI-project.git" />
                <a href="https://gitlab.com/christabelAcquaye/geolocator.git">
                  Geolocator with Immobilization
                </a>
              </li>
              <a href="https://gitlab.com/christabelAcquaye/geolocator.git"></a>
            </ul>
            <a href="https://gitlab.com/christabelAcquaye/geolocator.git">
              <ul style={{ float: "left" }}></ul>
              <ul style={{ float: "left" }}></ul>
            </a>
            <ul style={{ float: "left" }}>
              <a href="https://gitlab.com/christabelAcquaye/geolocator.git"></a>
              <li>
                <a href="https://gitlab.com/christabelAcquaye/geolocator.git" />
                <a href="https://gitlab.com/ACESIV/front-end/erranda.git">
                  Erranda
                </a>
              </li>
              <a href="https://gitlab.com/ACESIV/front-end/erranda.git">
                <br />
              </a>
              <li>
                <a href="https://gitlab.com/ACESIV/front-end/erranda.git" />
                <a href="https://gitlab.com/facta01/BookIT.git">BookIT</a>
              </li>
              <a href="https://gitlab.com/facta01/BookIT.git">
                <br />
              </a>
              <li>
                <a href="https://gitlab.com/facta01/BookIT.git" />
                <a href="https://github.com/Christland/Transcript-Asssor-System.git">
                  Transcript Asessor
                </a>
              </li>
              <a href="https://github.com/Christland/Transcript-Asssor-System.git"></a>
            </ul>
            <a href="https://github.com/Christland/Transcript-Asssor-System.git">
              <ul style={{ float: "left" }}></ul>
              <ul style={{ float: "left" }}></ul>
            </a>
            <ul style={{ float: "left" }}>
              <a href="https://github.com/Christland/Transcript-Asssor-System.git"></a>
              <li>
                <a href="https://github.com/Christland/Transcript-Asssor-System.git" />
                <a href="https://gitlab.com/christabelAcquaye/internet-monitoring-system.git">
                  Internet Monitor
                </a>
              </li>
              <a href="https://gitlab.com/christabelAcquaye/internet-monitoring-system.git">
                <br />
              </a>
              <li>
                <a href="https://gitlab.com/christabelAcquaye/internet-monitoring-system.git" />
                <a href="https://github.com/Christland/Smart-Farm-Android.git">
                  Farm Assisstant
                </a>
              </li>
              <a href="https://github.com/Christland/Smart-Farm-Android.git">
                <br />
              </a>
              <li>
                <a href="https://github.com/Christland/Smart-Farm-Android.git" />
                <a href="https://github.com/Christland/serviceWebsite.git">
                  SSM Tracker
                </a>
              </li>
              <a href="https://github.com/Christland/serviceWebsite.git"></a>
            </ul>
            <a href="https://github.com/Christland/serviceWebsite.git"></a>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      <h3 className="w3-padding-16 w3-text-light-grey" id="involvements">
        Involvements
      </h3>
      <h4><q>Some quoted text goes here..</q></h4>
      <div>
        <div 
        style ={{
          display: "flex", flexDirection: "row",
        }}>
          <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
        </div>
      </div>
      

      <div>
        <div 
        style ={{
          display: "flex", flexDirection: "row",
        }}>
          <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
        </div>
      </div>
      <div>
        <div 
        style ={{
          display: "flex", flexDirection: "row",
        }}>
          <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
  <div> <img 
        src="img/passport.jpeg" 
        style={{ display: "block", width: "50%", height: "auto" }}
        />

        <h5>Title goes here</h5>
        <p 
        style={{ display: "block", width: "50%", height: "auto" }}
        >Some text describing involvement goes here..</p>
  
  </div>
        </div>
      </div>
  
      <h3 className="w3-padding-16 w3-text-light-grey" id="news">
        News
      </h3>
      {/* <h3 className="w3-padding-16 w3-text-light-grey" id="skills">
        My Skills
      </h3> */}
      <div style={{ flex: 1, flexDirection: "row", float: "left" }}>
        <section className="skills">
          <ul style={{ float: "left" }}>
            <li>
              {/* <img src="img/html.svg" /> */}
              HTML5
            </li>
            <br />
            <li>
              {/* <img src="img/css.svg" /> */}
              CSS3
            </li>
            <br />
            <li>
              {/* <img src="img/js.svg" /> */}
              JAVASCRIPT
            </li>
          </ul>
          <ul style={{ float: "left" }}></ul>
          <ul style={{ float: "left" }}></ul>
          <ul style={{ float: "left" }}>
            <li>
              {/* <img src="img/arduino.png " style={{ width: 60, height: 55 }} /> */}
              ARDUINO
            </li>
            <br />
            <br />
            <li>
              <img
                // src="img/raspberry-pi.svg"
                style={{ width: 60, height: 55 }}
              />
              RASPBERRY PI
            </li>
            <br />
            <br />
            <li>
              {/* <img src="img/git.svg" style={{ width: 60, height: 55 }} /> */}
              GIT
            </li>
          </ul>
          <ul style={{ float: "left" }}></ul>
          <ul style={{ float: "left" }}></ul>
          <ul style={{ float: "left" }}>
            <li>
              <img src="img/nodejs.svg " style={{ width: 60, height: 55 }} />
              NODE
            </li>
            <br />
            <br />
            <li>
              <img src="img/python.svg" style={{ width: 60, height: 55 }} />
              PYTHON
            </li>
            <br />
            <br />
            <li>
              <img src="img/react.png" style={{ width: 60, height: 55 }} />
              REACT
            </li>
          </ul>
        </section>
        {/* <h3 className="w3-padding-16 w3-text-light-grey" id="cv">
          Projects
        </h3> */}
        
          <a href="https://github.com/Christland/serviceWebsite.git">
            <h3 className="w3-padding-16 w3-text-light-grey" id="resume">
              CV and Resume Details
            </h3>
          </a>
          <a href="docs/Revamped.pdf" download="docs/MyCV.pdf">
            Download Christabel's CV here..
          </a>
          <br />
          <br />
          <br />
          <a href="docs/MyResume.pdf" download="docs/MyResume.pdf">
            Download Christabel's Resume here..
          </a>
          <div>
            <h3 className="w3-padding-16 w3-text-light-grey" id="contact">
              Find me
            </h3>
           
            
            <a
              href="https://www.linkedin.com/in/christabel-acquaye-15152b117/"
              className="w3-bar-item w3-button w3-padding-large w3-black"
            >
              <i className="fa fa-linkedin w3-xxlarge" />
            </a>
            <a
              href="mailto:cacquaye@umd.edu"
              className="w3-bar-item w3-button w3-padding-large w3-black"
            >
              <i className="fa fa-envelope w3-xxlarge" />
            </a>
           
            <a
              href="https://github.com/Christland"
              className="w3-bar-item w3-button w3-padding-large w3-black"
            >
              <i className="fa fa-github w3-xxlarge" />
            </a>
            <a
              href="https://gitlab.com/christabelAcquaye"
              className="w3-bar-item w3-button w3-padding-large w3-black"
            >
              <i className="fa fa-gitlab w3-xxlarge" />
            </a>
          </div>
          Footer
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
