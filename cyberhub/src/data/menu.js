import DemoOne from "/assets/imgs/demo/1.png";
import DemoTwo from "/assets/imgs/demo/2.png";
import DemoThree from "/assets/imgs/demo/3.png";
import ComingSoonDemo from "/assets/imgs/demo/8.png";

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
        image: ComingSoonDemo,
        link: "/ForensicScience/HomePage",
        title: "Forensic Science",
      },
      {
        image: ComingSoonDemo,
        link: "/UserEnumeration/HomePage",
        title: "User Enumeration",
      },
      {
        image: ComingSoonDemo,
        link: "/PrivilegeEscalation/HomePage",
        title: "Privilege Escalation",
      },
      {
        image: ComingSoonDemo,
        link: "/BufferOverflows/HomePage",
        title: "Buffer Overflows",
      },
      {
        image: ComingSoonDemo,
        link: "/ServerSideRequestForgery/HomePage",
        title: "Server-Side Request Forgery",
      },
      {
        image: ComingSoonDemo,
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
    link: "#",
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
    name: "Courses",
    link: "#",
    subMenus: [
      {
        name: "Course List",
        link: "/courses",
      },
      {
        name: "Course Filter",
        link: "/course-filter",
      },
    ],
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
    name: "Blogs And News",
    link: "/Blogs",
  }];

export default menus;
