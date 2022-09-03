import "./App.css";

function App() {
    return (
        <div className="w3-black main-content">
            {/* Icon Bar (Sidebar - hidden on small screens) */}
            <nav
                className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"
                style={{ overflow: "hidden" }}
            >
                {/* Avatar image in top left corner */}
                <img src="img/another_logo.png" style={{ width: "100%" }} />
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
                <a href="#news" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-newspaper-o w3-xxlarge" />
                    <p>News</p>
                </a>
                <a href="#cv" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
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
                        <span className="w3-hide-small">Hi</span> :)
                    </h1>
                    <p>
                        I'm Christabel, a first year Computer Science Ph.D stduent at the University
                        of Maryland, College Park, USA.
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
                <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                    <h2 className="w3-text-light-grey">About Me</h2>
                    <hr style={{ width: 200 }} className="w3-opacity" />
                    <p style={{ fontSize: 20 }}>
                        My scholarly interests are largely focused on applications of machine
                        learning and natural language processing in computational social science. My
                        other interests, however, revolve around leveraging Embedded Systems to
                        create fun projects and curricula for STEM outreach and volunteer
                        activities. I earned a BSc in Computer Engineering from Ghana's Kwame
                        Nkrumah University of Science and Technology (KNUST) in 2019, and I
                        completed my National Service there by working as a teaching assistant for a
                        year. In addition to my teaching responsibilities throughout my year of
                        service, I continued my research for my senior project, which was later
                        published in the International Journal of Computer Applications. Also, I
                        created the lab curriculum for the Introduction to Engineering course, which
                        covers embedded systems. I also worked on the KNUST Social Science
                        Department's TimeTable Scheduling App, which employs genetic algorithms. I
                        held positions as a research intern at Karaagro AI and as a teaching and
                        research assistant at Academic City University College.
                    </p>
                    <h3 className="w3-padding-16 w3-text-light-grey" id="publications">
                        Publications
                    </h3>
                    <hr style={{ width: 200 }} className="w3-opacity" />
                    {/* <div> */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2021</p>
                    </div>

                    <a href="https://www.isteams.net/_files/ugd/185b0a_3489476aa4ba44e884a1e38c83e3795f.pdf">
                        The Future is Intelligent: Empowering Future Ready Workforce Through
                        Artificial Intelligence (AI) Education At The Academic City University
                        College Accra Ghana{" "}
                    </a>
                    <p>
                        Conference Paper: 28th iSTEAMS Multidisciplinary Research Conference AIUWA
                        The Gambia
                    </p>

                    <br></br>
                    <a href="https://www.isteams.net/_files/ugd/185b0a_0643cb81745649b387fae67543d2bbec.pdf">
                        State and Future Prospects of Artificial Intelligence (AI) in Ghana
                    </a>
                    <p>Conference Paper: 27th iSTEAMS-ACity-IEEE International Conference </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2019</p>
                    </div>

                    <br></br>
                    <a href="https://www.ijcaonline.org/archives/volume176/number27/kommey-2020-ijca-920278.pdf">
                        GhanaToll: Barrier-Free RFID Toll Collection and Management System for Ghana
                    </a>
                    <p>Article: International Journal of Computer Applications </p>

                    {/* <a href="www.google.com">Publication Title</a><p>Text goes here..</p> */}

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
                        <h4>
                            <q>
                                The best way to find yourself is to lose yourself in the service of
                                others.
                            </q>
                        </h4>
                        <p>
                            This quote by Mahatma Gandhi, influenced my decision to contribute to
                            these organizations.
                        </p>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/EliTe_Involvement.png"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="http://www.elite-education.org/" />
                                        ELiTE
                                    </h5>
                                    <p style={{ textAlign: "center" }}>Tutor and Mentor</p>
                                    <i>(2016 - Present)</i>
                                </div>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/anitab_involvement.jpg"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="https://anitab.org/" />
                                        Anita B. Org
                                    </h5>
                                    <p style={{ textAlign: "center" }}>
                                        Scholarship Application Reviewer
                                    </p>
                                    <i>(2020 – 2022)</i>
                                </div>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/debian_involvement.png"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="https://www.debian.org/" />
                                        Debian Video Team
                                    </h5>
                                    <p style={{ textAlign: "center" }}>Video team volunteer</p>
                                    <i>(2019)</i>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "1rem" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/aces_involvement.jpeg"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="https://www.linkedin.com/company/aces-knust/?originalSubdomain=gh" />
                                        ACES, KNUST
                                    </h5>
                                    <p style={{ textAlign: "center" }}>
                                        Mentor, General Secretary and Tutor
                                    </p>
                                    <i>(2017- 2020)</i>
                                </div>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/rosa_invovlements.jpeg"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="https://twitter.com/RosaKnust?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" />
                                        ROSA, KNUST
                                    </h5>
                                    <p style={{ textAlign: "center" }}>
                                        Academic Mentor and Music Head
                                    </p>
                                    <i>(2018 - 2020)</i>
                                </div>
                                <div
                                    style={{
                                        marginRight: "5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "19%",
                                    }}
                                >
                                    <img
                                        src="img/predix_involvements.png"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                        <a href="https://www.ashesi.org/blog/general-electric-holds-hackathon-launches-digital-academy-at-ashesi/" />
                                        Predix, General Electric
                                    </h5>
                                    <p style={{ textAlign: "center" }}>
                                        Ambassador, Predix Challenge
                                    </p>
                                    <i>(2017)</i>
                                </div>
                            </div>
                        </div>

                        <h3 className="w3-padding-16 w3-text-light-grey" id="news">
                                <div>News</div>
                                <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2022</p>
                    </div>
                                <div className="column">
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I joined the Department of Computer Science, University of Maryland as a PhD student.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br><div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    
                                </div>
                                <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2021</p>
                    </div>
                                <div className="column">
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I joined the Department of Computer Science, University of Maryland as a PhD student.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br><div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    
                                </div>
                                <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2020</p>
                    </div>
                                <div className="column">
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I joined the Department of Computer Science, University of Maryland as a PhD student.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br><div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    <div className="news-title">[08-29-2019]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    
                                </div>
                                <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <i className="fa fa-calendar" />
                        <p style={{ marginLeft: "1rem" }}> 2019</p>
                    </div>
                                <div className="column">
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I joined the Department of Computer Science, University of Maryland as a PhD student.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br><div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    <div className="news-title">[08-29-2022]</div>
                                    <div className="news-content">
                                    I moved to the University of Maryland to pursue my PhD in computer science.  
                                       <a href="google.com"> Read More..</a> 
                                    </div>
<br></br>
                                    
                                </div>
                            </h3>

                        <h3 className="w3-padding-16 w3-text-light-grey" id="resume">
                            CV and Resume Details
                        </h3>

                        <a
                            href="docs/Christabel_Acquaye_2022_CV.pdf"
                            // download="my-app/public/docs/Christabel_Acquaye_2022_CV.pdf"
                        >
                            <img src="img/download_cv.png"  style={{ width: "10%", height: "10%" }}/>
                                    <p>View CV here</p>
                        </a>
                        <br />
                        <br />
                        <br />
                        <a
                            href="docs/Christabel_Acquaye_2022_Resume.pdf"
                            // download="my-app/public/docs/Christabel_Acquaye_2022_Resume.pdf"
                        >
                            <img src="img/download_cv.png"  style={{ width: "10%", height: "10%" }}/>
                                    <p>View Resume here</p>
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
                                href="https://www.researchgate.net/profile/Christabel-Acquaye"
                                className="w3-bar-item w3-button w3-padding-large w3-black"
                            >
                                
                                <i className="fab fa-researchgate w3-xxlarge" />
                            </a>
                            {/* <a
 href="https://www.linkedin.com/in/christabel-acquaye-15152b117/"
 className="w3-bar-item w3-button w3-padding-large w3-black"
 >
 <i className="fa fa-linkedin w3-xxlarge" />
 </a> */}
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
