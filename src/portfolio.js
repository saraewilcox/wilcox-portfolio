/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  title: "Meet Sara Wilcox",
  subTitle: (
    "A passionate Full Stack Software Developer with experience in building Web and Desktop GIS applications with ArcGIS / QGIS / JavaScript / Reactjs / Nodejs / ArcPy."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TqhzMXgV6qC5lI90z1LKOJZD8nEeopZv/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saraewilcox",
  linkedin: "https://www.linkedin.com/in/sara-wilcox-91405b9/",
  gmail: "wilcoxGIS@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GIS Web Developer dedicated to making GIS data accessible across an organization",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your GIS web mapping applications"
    ),
    emoji(
      "⚡ 15+ years of experience with QGIS and Esri software, from GPS data collection to publishing web maps in ArcGIS Online"
    ),
    emoji(
      "⚡ Integration of third party services such as Heroku / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      skillName2: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/VirginiaTechLogo.png"),
      subHeader: "Bachelor of Arts in Geography",
      duration: "September 1999 - May 2003",
      desc: "Took courses in GIS, cartography, and programming",
      descBullets: [
        "GIS Intern at Town of Blacksburg during summer of 2002"
      ]
    },
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/VirginiaTechLogo.png"),
      subHeader: "Bachelor of Science in Psychology",
      duration: "September 1999 - May 2003",
      desc: "Took courses in industrial/organizational psychology and computer applications of social sciences research",
      descBullets: [
        "Exchange student to Helsinki University of Technology in 2001"
      ]
    },    
    {
      schoolName: "Ironhack",
      logo: require("./assets/images/IronhackLogo.png"),
      subHeader: "Full-Stack Bootcamp",
      duration: "October - December 2020",
      desc:
        "MONGODB / EXPRESS / REACT / NODE",
      descBullets: ["9-week full-time web development bootcamp",
      "Designed and coded full-stack JavaScript web applications",
      "Learned how to think like a programmer and how to deconstruct complex problems"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "GIS Specialist",
      company: "Arcadis",
      companylogo: require("./assets/images/arcadisLogo.jpg"),
      date: "January 2018 – June 2020",
      desc:
        "Arcadis is a consulting firm specializing in global natural and built asset design. My work involved converting the GIS data of several state Department of Transportation (DOT) into Esri's Roads & Highways tool.",
      descBullets: [
        "Reduced geoprocessing times by 40% by utilizing ArcGIS Desktop development to convert existing Model Builder to Python 2.6 scripts",
        "Designed, established, tested, and managed groups for 20 web maps with intuitive user interfaces using ArcGIS Online",
        "Designed data models containing up to 75 spatial datasets for tracking state-owned assets"
      ]
    },
    {
      role: "GIS Analyst",
      company: "Brierley Associates",
      companylogo: require("./assets/images/brierley-associatesLogo.jpeg"),
      date: "June 2016 – June 2017",
      desc:
        "Brierley Associates is an engineering consulting firm which specializes in tunnel, trenchless and geostructural design.",
      descBullets: [
        "Developed interactive GIS web maps for the client using intuitive user interfaces",
        "Compiled 6 risk-based rankings to highlight potential high-risk areas and optimal areas to help guide borehole and well location",
        "Created company process for high-accuracy data collection using Survey123 for ArcGIS, Collector for ArcGIS and GPS Receiver"
        ]
    },
    {
      role: "Geoscience Technologist II",
      company: "Anadarko Petroleum Corporation",
      companylogo: require("./assets/images/anadarko-petroleum-corporation.jpg"),
      date: "March 2014 – March 2016",
      desc:
        "Anadarko Petroleum Corporation was a company engaged in hydrocarbon exploration.",
      descBullets: [
        "Managed and built spatial data used for exploration and production efforts in the Gulf of Mexico",
        "Developed 4 ArcGIS Online web maps for confidential presentations and engineering analysis using intuitive interfaces",
        "Developed ArcGIS Desktop applications for the automation of every day spatial data tasks using ArcPy"
        ]
    },
    {
      role: "GIS Technician",
      company: "WhiteStar Corporation",
      companylogo: require("./assets/images/whitestar_500.jpg"),
      date: "January 2013 – May 2014",
      desc:
        "The WhiteStar Corporation specializes in GIS data and tools to increase land mapping accuracy and efficiency.",
      descBullets: [
        "Development, QA/QC, and maintenance of the WhiteStar Lots, Tracts, Quarter-Quarter, Quarter spatial data in an ArcSDE environment",
        "Analyzed, maintained, and edited geodatabases of 12 states in an SDE environment",
        "Ensure the quality and accuracy of a variety of GIS land grid (PLSS) data, including researching and revising maps and data from various public and private data sources"
        ]      
    },
    {
      role: "Geospatial Analyst",
      company: "Maxar Technologies",
      companylogo: require("./assets/images/maxarLogo.png"),
      date: "December 2010 – December 2012",
      desc:
        "Maxar Technologies, formerly DigitalGlobe, is an industry leader in satellite imagery and geospatial intelligence.",
      descBullets: [
        "Perform ortho-rectification and image-to-image registration processes to construct seamless imagery mosaics as National Security Agency (NSA) deliverables",
        "Manual radiometric balancing of histograms to achieve optimal scene detail and natural color",
        "Create and edit Digital Elevation Models (DEM) derived from stereo satellite imagery"
        ]
    },
    {
      role: "GIS Technician",
      company: "Pacific Western Technologies ",
      companylogo: require("./assets/images/pwt-logo-sm.png"),
      date: "July 2008 – December 2010",
      desc:
        "Pacific Western Technologies is an environmental consulting services nationwide to government agencies as well as private industrial clients.",
      descBullets: [
        "Field data collection of National Wildlife Refuge road centerlines, parking lots, and road condition spatial data using Trimble GPS unit and ArcPad",
        "Designed data model including topology for tracking of federal assets",
        "Implemented ArcGIS Desktop development with the automation of GPS post-processing, geodatabase editing, and report creation"
        ]
    },
    {
      role: "Geographic Analyst II",
      company: "HERE Technologies ",
      companylogo: require("./assets/images/HERELogo.png"),
      date: "September 2003 – July 2008",
      desc:
        "HERE is a major provider of base electronic navigable maps.",
      descBullets: [
        "Conducted GPS field data collection of road centerline data and 7 attributes such as street names and addresses",
        "Updated NAVTEQ geodatabases for all field collected data",
        "Mentored new employees and implemented training on data collection and geodatabase updates"
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const deployedProjects = {
  title: "Deployed Apps",
  subtitle: "SOME WEBSITES THAT WERE CREATED DURING MY WEB DEVELOPMENT BOOTCAMP",
  projects: [
    {
      image: require("./assets/images/watermelon (1).webp"),
      projectName: "watermelon",
      projectDesc: "Create playlists with your friends. A blend of kahoot and Spotify.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://watermelon-jams-ts7rp.ondigitalocean.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Traffic (1).webp"),
      projectName: "Washington, D.C. traffic app",
      projectDesc: "Last 24 hours of traffic data using the ArcGIS for JavaScript API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://traffic-app-arcgis-api-for-js.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/lisbon (1).webp"),
      projectName: "Lisbon Street Art",
      projectDesc: "Showing Lisbon's best street art with routing capabilities using the Google Places API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lisbon-street-art.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project? My Inbox is open.",
  number: "+1-7209242007",
  email_address: "wilcoxGIS@gmail.com"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  deployedProjects,
  openSource,
  contactInfo
};
