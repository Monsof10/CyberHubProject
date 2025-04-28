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
        title: "Sql Injection ",
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
        link: "#",
        title: "Cross-Site Scripting",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Forensic Science",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "User Enumeration",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Privilage Escalation",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Buffer Overflows",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Server-Side Request Forgery",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Dns Poisining",
      },
    ],
  },
  {
    name: "Sql Injection",
    items: [
      {
        image: DemoOne,
        link: "/Sql-Injection",
        title: "Sql Injection",
      },
    ],
  },
  {
    name: "Email Spoofing",
    items: [
      {
        image: DemoTwo,
        link: "/Spoofing",
        title: "Email Spoofing",
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
        link: "#",
        title: "Cross-Site Scripting",
      },
    ],
  },
  {
    name: "Forensic Science",
    items: [
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Forensic Science",
      },
    ],
  },
  {
    name: "User Enumeration",
    items: [
      {
        image: ComingSoonDemo,
        link: "#",
        title: "User Enumeration",
      },
    ],
  },
];

const menus = [
  {
    name: "Home",
    link: "#",
    megaMenu: megaMenuOne,
    subMenus: [
      {
        link: "/Sql-Injection",
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
        name: "Course Detail",
        link: "/course-detail",
      },
      {
        name: "Course Filter",
        link: "/course-filter",
      },
    ],
  },
  {
    name: "Pages",
    link: "#",
    subMenus: [
      {
        name: "Instructor",
        link: "/instructors",
      },
      {
        name: "Instructor Detail",
        link: "/instructor-detail",
      },
      {
        name: "404",
        link: "not-found",
      },
    ],
  },
  {
    name: "Blog",
    link: "#",
    subMenus: [
      {
        name: "Blog List",
        link: "/blogs",
      },
      {
        name: "Blog Sidebar",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "/blogs",
          },
          {
            name: "Left Sidebar",
            link: "/blog-left-sidebar",
          },
        ],
      },
      {
        name: "Blog Layout",
        link: "#",
        menus: [
          {
            name: "1 Column",
            link: "/blog-column-one",
          },
          {
            name: "2 Column",
            link: "/blog-column-two",
          },
          {
            name: "3 Column",
            link: "/blog-column-three",
          },
          {
            name: "4 Column",
            link: "/blog-column-four",
          },
        ],
      },
      {
        name: "Blog Details",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "/blog-detail-right-sidebar",
          },
          {
            name: "Left Sidebar",
            link: "/blog-detail-left-sidebar",
          },
          {
            name: "Without Sidebar",
            link: "/blog-detail",
          },
        ],
      },
    ],
  },
  {
    name: "Conatct",
    link: "/contact",
  },
];

export default menus;
