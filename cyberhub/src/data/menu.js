import DemoOne from "/assets/imgs/demo/1.png";
import DemoTwo from "/assets/imgs/demo/2.png";
import DemoThree from "/assets/imgs/demo/3.png";
import DemoFour from "/assets/imgs/demo/BufferOverflows.png";
import DemoFive from "/assets/imgs/demo/DnsPoising.jpeg";
import Demosix from "/assets/imgs/demo/Forensics.png";
import Demoseven from "/assets/imgs/demo/Privelage.jpeg";
import Demoeight from "/assets/imgs/demo/ServerSide.png";
import Demonine from "/assets/imgs/demo/UserEnum.jpeg";
import ComingSoonDemo from "/assets/imgs/demo/CrossSite.png";

const megaMenuOne = [
  {
    name: "Top 10",
    items: [
      {
        image: DemoOne,
        link: "/Sql-Injection/HomePage",
        title: "Sql Injection",
      },
      {
        image: DemoTwo,
        link: "/Spoofing",
        title: "Spoofing",
      },
      {
        image: DemoThree,
        link: "/DosMain",
        title: "Dos and Ddos Attacks",
      },
      {
        image: ComingSoonDemo,
        link: "/CrossSiteScripting/HomePage",
        title: "Cross-Site Scripting",
      },
      {
        image: Demosix,
        link: "/ForensicScience/HomePage",
        title: "Computer Forensics",
      },
      {
        image: Demonine,
        link: "/UserEnumeration/HomePage",
        title: "User Enumeration",
      },
      {
        image: Demoseven,
        link: "/PrivilegeEscalation/HomePage",
        title: "Privilege Escalation",
      },
      {
        image: DemoFour,
        link: "/BufferOverflows/HomePage",
        title: "Buffer Overflows",
      },
      {
        image: Demoeight,
        link: "/ServerSideRequestForgery/HomePage",
        title: "Server-Side Request Forgery",
      },
      {
        image: DemoFive,
        link: "/DnsPoisoning/HomePage",
        title: "DNS Poisoning",
      },
      
    ],
  },
  {
    name: "Sql Injection",
    items: [
      {
        image: DemoOne,
        link: "/Sql-Injection/HomePage",
        title: "Sql Injection",
      },
    ],
  },
  {
    name: "Spoofing",
    items: [
      {
        image: DemoTwo,
        link: "/Spoofing",
        title: "Spoofing",
      },
    ],
  },
  {
    name: "Dos and Ddos Attacks",
    items: [
      {
        image: DemoThree,
        link: "/DosMain",
        title: "Dos and Ddos Attacks",
      },
    ],
  },
  {
    name: "Cross-Site Scripting",
    items: [
      {
        image: ComingSoonDemo,
        link: "/CrossSiteScripting/HomePage",
        title: "Cross-Site Scripting",
      },
    ],
  },
  {
    name: "Forensic Science",
    items: [
      {
        image: ComingSoonDemo,
        link: "/ForensicScience/HomePage",
        title: "Forensic Science",
      },
    ],
  },
  {
    name: "User Enumeration",
    items: [
      {
        image: ComingSoonDemo,
        link: "/UserEnumeration/HomePage",
        title: "User Enumeration",
      },
    ],
  },
];

const menus = [
  {
    name: "Catalog",
    link: "/courses",
    megaMenu: megaMenuOne,
    subMenus: [
      {
        link: "/Sql-Injection/HomePage",
        name: "Sql Injection",
      },
      {
        link: "/Spoofing",
        name: "Kids Education",
      },
      {
        link: "/health-coach",
        name: "Health Course",
      },
    ],
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "CTF Challenges",
    link: "#",
    subMenus: [
      {
        name: "General Skills",
        link: "/CTFChallenges/GeneralSkillsPage",
      },
      {
        name: "Forensics",
        link: "/CTFChallenges/ForensicsPage",
      },
      {
        name: "Web Exploitation",
        link: "/CTFChallenges/WebExploitationPage",
      },
    ],
  },
  {
    name: "Community",
    link: "#",
    subMenus: [
      {
        name: "Blogs And News",
        link: "/Blogs",
      },
      {
        name: "World Events",
        link: "https://www.blackhat.com/upcoming.html",
      },
      {
        name: "Follow The Community",
        link: "https://www.reddit.com/r/cybersecurity/",
      },
      {
        name: "Who Are We",
        link: "/instructors",
      },
      {
        name: "Join Us",
        link: "/contact",
      },
    ],
  },
  {
    name: "Workspace",
    link: "/workspace",
  }];

export default menus;
