import {
  BsFillPersonLinesFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import {
  FaBriefcase,
  FaComments,
  FaFileContract,
  FaGithub,
  FaHouseUser,
  FaUser,
} from "react-icons/fa";
import images from "../constants/images";

// Nav links
export const pageLink = [
  {
    id: 1,
    pageName: "Home",
    pageIcon: <FaHouseUser className="text-sm ss:text-base sm:text-xs" />,
  },
  {
    id: 2,
    pageName: "About",
    pageIcon: <FaUser className="text-sm ss:text-base sm:text-xs" />,
  },
  {
    id: 3,
    pageName: "Projects",
    pageIcon: <FaBriefcase className="text-sm ss:text-base sm:text-xs" />,
  },
  {
    id: 4,
    pageName: "Skills",
    pageIcon: <FaFileContract className="text-sm ss:text-base sm:text-xs" />,
  },
  {
    id: 5,
    pageName: "Contact",
    pageIcon: <FaComments className="text-sm ss:text-base sm:text-xs" />,
  },
];

// social icon inFo
export const socialIconInfo = [
  {
    id: 1,
    name: "Linkedin",
    icon: <BsLinkedin className="text-sm xs:text-base" />,
    href: "https://www.linkedin.com/in/akande-idris-1443aa252/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub className="text-sm xs:text-base" />,
    href: "https://github.com/Idrisakande",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <BsTwitter className="text-sm xs:text-base" />,
    href: "https://twitter.com/drisdev",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <BsInstagram className="text-sm xs:text-base" />,
    href: "https://www.instagram.com/drisdev/",
  },
  {
    id: 5,
    name: "Resume",
    icon: <BsFillPersonLinesFill className="text-sm xs:text-base" />,
    href: "/Idris resume.docx",
    style: "rounded-br-md",
    download: true,
  },
];

// Hero img info
export const heroImgInfo = [
  {
    id: 1,
    name: "react img",
    img: images.react,
    imgStyle: `w-5/6 object-contain`,
    divStyle: `bg-white flex justify-center items-center p-2 w-24 h-24 rounded-full 
      absolute xs:w-28 xs:h-28 -top-3 
      left-0 xs:top-0 xs:left-5 ss:-top-5 ss:left-12 sm:left-5 
      md:left-11`,
  },
  {
    id: 2,
    name: "redux img",
    img: images.redux,
    imgStyle: `w-[90%] object-contain`,
    divStyle: `bg-white flex justify-center items-center p-2 w-20 h-20 rounded-full
      absolute top-3 -right-1 xs:top-9 
       xs:right-7 ss:top-2 ss:right-16 sm:top-5 sm:right-7 md:right-14`,
  },
  {
    id: 3,
    name: "material ui img",
    img: images.mui5,
    imgStyle: `w-5/6 object-contain`,
    divStyle: `bg-white flex justify-center items-center p-2 w-16 h-16 rounded-full 
      absolute bottom-4 right-1 
      xs:bottom-10 xs:right-7 ss:bottom-6 ss:right-16 sm:right-9 
      md:bottom-10`,
  },
  {
    id: 4,
    name: "node img",
    img: images.node,
    imgStyle: `w-4/5 object-contain`,
    divStyle: `bg-white flex justify-center items-center p-2 w-14 h-14 rounded-full 
      absolute bottom-0 left-7 xs:bottom-4 
      xs:left-10 ss:left-20 sm:left-12 md:bottom-7`,
  },
];

// About info
export const aboutsInfo = [
  {
    id: 1,
    divStyle: `relative h-48 bg-blue rounded-xl flex justify-center items-center`,
    title: "Frontend Developer",
    description:
      "I'm a React frontend developer passionate in building a responsive, beautiful and functional website applications",
    img: images.javascript,
    img1: images.react,
    imgStyle1: `absolute -top-5 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img2: images.redux,
    imgStyle2: `absolute bottom-4 -left-4 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img3: images.tailwindcss,
    imgStyle3: `absolute bottom-4 -right-4 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    emojiImg: images.glasses,
    emojiImgStyle: `absolute -top-20 left-1 w-10 object-contain`,
  },
  {
    id: 2,
    divStyle: `relative h-48 bg-lightBlue rounded-xl flex justify-center items-center`,
    title: "Fullstack Developer",
    description:
      "I build a life, Reactive Applications with React and firebase development software to produce a quality and functional Web App",
    img: images.firebase,
    img1: images.react,
    imgStyle1: `absolute -top-0 -left-2 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img2: images.mui5,
    imgStyle2: `absolute -top-0 -right-2 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img3: images.redux,
    imgStyle3: `absolute -bottom-5 h-14 w-14 rounded-full bg-white shadow-lg flex justify-center items-center`,
    emojiImg: images.heartemoji,
    emojiImgStyle: `absolute -bottom-20 right-1 w-10 object-contain`,
  },
  {
    id: 3,
    divStyle: `relative h-48 bg-purple-800 rounded-xl flex justify-center items-center`,
    title: "UI/UX",
    description:
      "I'm a website designer with higher affinity in developing a beautiful user interface and functional website applications",
    img1: images.figma,
    imgStyle1: `absolute -top-4 h-16 w-16 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img2: images.css,
    imgStyle2: `absolute bottom-4 -left-3 h-16 w-16 rounded-full bg-white shadow-lg flex justify-center items-center`,
    img3: images.html,
    imgStyle3: `absolute bottom-4 -right-3 h-16 w-16 rounded-full bg-white shadow-lg flex justify-center items-center`,
    emojiImg: images.humble,
    emojiImgStyle: `absolute -top-20 right-1 w-10 object-contain`,
  },
];

// projects
// projects nav info
export const projectsNavInfo = [
  {
    name: "Web App",
  },
  {
    name: "React JS App",
  },
  {
    name: "Game App",
  },
  {
    name: "UI/UX",
  },
  {
    name: "All",
  },
];
// projects card info
export const projectsCardInfo = [
  {
    id: 1,
    name: "React JS App",
    title: "Tesla-Clone App",
    discription: "An Amazing React Redux Frontend Website Application",
    tag: "React App",
    img1: images.destopTesla,
    img2: images.mobileTesla,
    img2Style: `absolute -top-4 left-0 w-16 object-contain`,
    url: "https://tesla-clone-react-redux-app.netlify.app",
    gitHub: "https://github.com/Idrisakande/tesla-clone",
  },
  {
    id: 2,
    name: "Web App",
    title: "Dristore App",
    discription: "An Interactive Ecommerce Frontend Website Application",
    tag: "Web App",
    img1: images.destopDristore,
    img2: images.destopDristore1,
    img2Style: `absolute -top-6 right-0 w-20 object-contain`,
    url: "https://dristore.netlify.app",
    gitHub: "https://github.com/Idrisakande/dristore-ecommerce-web",
  },
  {
    id: 3,
    name: "React JS App",
    title: "Vhjobs App",
    discription: "A Beautifull React JS Landing Page Application",
    tag: "React App",
    img1: images.vhj,
    url: "https://vhjobsapp.netlify.app",
    gitHub: "https://github.com/Idrisakande/vhjobs-landing-page",
  },
  {
    id: 4,
    name: "Web App",
    title: "Vegetarian Food App",
    discription: "An Amazing Animating Ecommerce Website Application",
    tag: "Web App",
    divStyle: `absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-5 rounded-lg`,
    img1: images.vg,
    img2Style: `absolute -top-4 left-0 w-20 object-contain rounded-lg`,
    url: "https://vegetarian-food-app.netlify.app",
    gitHub: "https://github.com/Idrisakande/vege-food-app",
  },
  {
    id: 5,
    name: "Game App",
    title: "RPS Game App",
    discription: "A Frontend DOM manipulating Game Application",
    tag: "Game App",
    img1: images.rps,
    img2: images.about03,
    img2Style: `absolute -bottom-16 -left-1 w-20 object-contain`,
    url: "https://drisygame.netlify.app/",
    gitHub: "https://github.com/Idrisakande/RPS-Game-App",
  },
  {
    id: 6,
    name: "Web App",
    title: "Superhero Api App",
    discription: "A Frontend DOM Manipulating Super Hero Api Application",
    tag: "Api App",
    divStyle: `absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-5 rounded-lg`,
    img1: images.superhero,
    url: "https://shapp.netlify.app/",
    gitHub: "https://github.com/Idrisakande/super-hero-api",
  },
  {
    id: 7,
    name: "UI/UX",
    title: "Vhjobs design",
    discription: "An Amazing Clean Clear UI/UX Design",
    tag: "UI/UX",
    img1: images.fg,
    // url: "https://www.figma.com/proto/BS6DwsVK0ipesqEZhEDPJ9/Test-conversion?node-id=198%3A4349&scaling=scale-down-width&page-id=0%3A1",
  },
];
// Discount Info
export const discountInfo = [
  {
    id: 1,
    name: "discount img",
    title: "You have a new project",
    discription: "Contact me now and get 30% discount on your new project",
    img: images.hero,
    button: "Contact me",
  },
];

// Skill
// Skill Nav
export const skillsNav = [
  {
    name: "Frontend Skills",
  },
  {
    name: "Backend Skills",
  },
];
// Skills Info
export const skillsInfo = [
  {
    id: 1,
    name: "Material UI",
    img: images.mui5,
    bgColor: "#fef2f2",
    front: "Frontend Skills",
  },
  {
    id: 2,
    name: "React",
    img: images.react,
    bgColor: "#f0fdf4",
    front: "Frontend Skills",
  },
  {
    id: 3,
    name: "HTML5",
    img: images.html,
    bgColor: "#ffe4e6",
    front: "Frontend Skills",
  },
  {
    id: 4,
    name: "Node.js",
    img: images.node,
    bgColor: "#dcfce7",
    front: "Frontend Skills",
    back: "Backend Skills",
  },
  {
    id: 5,
    name: "Javascript",
    img: images.javascript,
    bgColor: "#fef9c3",
    front: "Frontend Skills",
    back: "Backend Skills",
  },
  {
    id: 6,
    name: "Typescript",
    img: images.typescript,
    bgColor: "#edf2f8",
    front: "Frontend Skills",
  },
  {
    id: 7,
    name: "Redux",
    img: images.redux,
    bgColor: "#ddd6fe",
    front: "Frontend Skills",
  },
  {
    id: 8,
    name: "Firebase",
    img: images.firebase,
    bgColor: "#edf2f8",
    back: "Backend Skills",
  },
  {
    id: 9,
    name: "CSS3",
    img: images.css,
    bgColor: "#dbeafe",
    front: "Frontend Skills",
  },
  {
    id: 10,
    name: "Saas",
    img: images.sass,
    bgColor: "#fee2e2",
    back: "Backend Skills",
  },
  {
    id: 11,
    name: "Python",
    img: images.python,
    bgColor: "#fdf2f8",
    back: "Backend Skills",
  },
  {
    id: 12,
    name: "Git",
    img: images.git,
    bgColor: "#edf2f8",
    front: "Frontend Skills",
    back: "Backend Skills",
  },
  {
    id: 13,
    name: "Figma",
    img: images.figma,
    bgColor: "#fce7f3",
    front: "Frontend Skills",
  },
  {
    id: 14,
    name: "TailwindCss",
    img: images.tailwindcss,
    bgColor: "#f0fdf4",
    front: "Frontend Skills",
  },
  {
    id: 15,
    name: "PHP",
    img: images.php,
    bgColor: "#ddd6fe",
    front: "Frontend Skills",
  },
];

// Experience Info
export const experienceInfo = [
  {
    id: 1,
    year: 2021,
    name: "Junior Frontend Developer",
    company: "Dristore",
    discription:
      "I worked on the design of Dristore Web App and was responsible for development of new app using HTML5, CSS3, Bootstrap and JavaScript to better user interface",
  },
  {
    id: 2,
    year: 2022,
    name: "React developer",
    company: "Drisy",
    discription:
      "I developed a new Tesla-clone landing Web page with higher quality UI using React and Redux which allow React components to read data from Redux store",
  },
  {
    id: 3,
    year: 2022,
    name: "Intern React Developer",
    company: "Vhjobs",
    discription:
      "I developed a new landing Vhjobs Web page using React to generate aa amazing and higher quality user interface",
  },
  {
    id: 4,
    year: 2022,
    name: "Frontend Developer",
    company: "Drisy",
    discription:
      "I worked on design of Web App and in the development Game App with a nice clean Dom manipulating skill",
  },
];

// Contatct Info
export const contactInfo = [
  {
    id: 1,
    href: " tel:+234-810-705-7812",
    phoneNumber: "+234-810-705-7812",
    img: images.mobile,
    bgColor: "#fff",
  },
  {
    id: 2,
    href: "mailto:idrisakande2545@gmail.com",
    gmail: "idrisakande2545@gmail.com",
    img: images.email,
    bgColor: "#fef2f2",
  },
];
