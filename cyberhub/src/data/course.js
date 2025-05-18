import CourseImageOne from "/assets/imgs/gallery/course-img-1.webp";
import CourseImageTwo from "/assets/imgs/gallery/course-img-2.webp";
import CourseImageThree from "/assets/imgs/gallery/course-img-3.webp";
import CourseImageFour from "/assets/imgs/gallery/course-img-4.webp";
import CourseImageFive from "/assets/imgs/gallery/course-img-5.webp";
import CourseImageSix from "/assets/imgs/gallery/course-img-6.webp";

import InstructorImageOne from "/assets/imgs/team/comment-1.webp";
import InstructorImageTwo from "/assets/imgs/team/comment-2.webp";
import InstructorImageThree from "/assets/imgs/team/comment-3.webp";
import InstructorImageFour from "/assets/imgs/team/comment-img.webp";
import InstructorImageFive from "/assets/imgs/team/instructor.webp";

import WishListIcon from "/assets/imgs/icon/wiselist.svg";
import StarRedIcon from "/assets/imgs/icon/star-red.svg";
import StatusIcon from "/assets/imgs/icon/status-icon.svg";
import UserGroupIcon from "/assets/imgs/icon/user-three-red.svg";
import RightArrowRedIcon from "/assets/imgs/icon/arrow-right-red.svg";
import RightArrowWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";

const courseOne = {
  title: {
    sliceOne: "Explore popular",
    sliceTwo: "Course",
  },
  filterOptions: [
    {
      name: "All",
      target: "*",
    },
    {
      name: "Trending",
      target: "trending",
    },
    {
      name: "Popular",
      target: "popular",
    },
    {
      name: "Featured",
      target: "featured",
    },
  ],
  courses: [
    {
      image: CourseImageOne,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "SQL Injection for Beginners: How to Exploit and Prevent Attacks",
      price: "$19.00",
      link: "/Sql-injection/HomePage",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageTwo,
      instructor: {
        image: InstructorImageOne,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Spoofing for Beginners: A way to Your Credentials",
      price: "$9.00",
      link: "/Spoofing/HomePage",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageTwo,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "DDoS Protection: Defending Networks Against Attack",
      price: "$15.00",
      link: "/DosAndDdos/HomePage",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageThree,
      instructor: {
        image: InstructorImageThree,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Privilege Escalation: Gaining and Preventing Unauthorized Access",
      price: "$13.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageFour,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Forensic Science: Uncovering Digital Evidence and Investigations",
      price: "$11.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageSix,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Server-Side Request Forgery: Exploiting and Securing Web Applications",
      price: "$17.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
  ],
  more: {
    name: "Browse More",
    icon: RightArrowWhiteIcon,
    link: "courses",
  },
};

import CourseTwoImageOne from "/assets/imgs/thumb/course41.png";
import CourseTwoImageTwo from "/assets/imgs/thumb/course43.png";
import CourseTwoImageThree from "/assets/imgs/thumb/course42.png";

const courseTwo = {
  title: "Explore Our Course",
  btn: {
    text: "View all course",
    link: "/",
  },
  courses: [
    {
      image: CourseTwoImageOne,
      title: "Understanding",
      description:
        "A straightforward guide to what email spoofing is,and why cybercriminals use it to deceive recipients",
      link: "course-detail",
      price: "$12",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      image: CourseTwoImageTwo,
      title: "Assesement",
      description:
        "An in-depth look at the dangers of email spoofing, including phishing attacks,and data breaches",
      link: "course-detail",
      price: "$13",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
    {
      image: CourseTwoImageThree,
      title: "Detection",
      description:
        "Practical strategies and tools to identify spoofed emails and protect yourself or your organization from falling victim to email-based attacks",
      link: "course-detail",
      price: "$15",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
    },
  ],
};

import CourseThreeImageOne from "/assets/imgs/thumb/course61.jpg";
import CourseThreeImageTwo from "/assets/imgs/thumb/course62.jpg";
import CourseThreeImageThree from "/assets/imgs/thumb/course63.jpg";
import CourseThreeImageFour from "/assets/imgs/thumb/course64.jpg";

const courseThree = {
  title: "Our Course Leaves",
  courses: [
    {
      image: CourseThreeImageOne,
      title: "Cyber Resilience & DDoS Defense Coaching",
      link: "course-detail",
      description:
        "Coaching focused on building overall cyber resilience, with an emphasis on defending against DDoS attacks through proactive measures and recovery plans",
      categories: [
        "Cyber Resilience",
        "Risk Management",
        "DDoS Defense",
        "Recovery Plans",
        "Network Security",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageTwo,
      title: "Denial-of-Service Attack Response Coaching",
      link: "course-detail",
      description:
        "Coaching that prepares individuals or teams to respond quickly and effectively to a Denial-of-Service (DoS) or Distributed Denial-of-Service (DDoS) attack",
      categories: [
        "Incident Response",
        "Attack Detection",
        "Rapid Response",
        "System Restoration",
        "Crisis Management",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageThree,
      title: "DoS Attack Detection & Management Coaching",
      link: "course-detail",
      description:
        "Coaching to help organizations detect early signs of Denial-of-Service attacks and manage them effectively to maintain service availability",
      categories: [
        "Detection",
        "Monitoring",
        "Alert Systems",
        "Attack Identification",
        "Traffic Analysis",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageFour,
      title: "Network Hardening & DDoS Mitigation Training",
      link: "course-detail",
      description:
      "Focused training on fortifying networks and mitigating DDoS attacks through proactive defense and recovery strategies.",
      categories: [
        "Cyber Resilience",
        "Risk Management",
        "DDoS Defense",
        "Recovery Plans",
        "Network Security",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
  ],
};

import CourseSqlImageOne from "/assets/imgs/thumb/course-6-1.webp";
import CourseSqlImageTwo from "/assets/imgs/thumb/course-6-2.webp";
import CourseSqlImageThree from "/assets/imgs/thumb/course-6-3.webp";
import CourseSqlImageFour from "/assets/imgs/thumb/course-6-4.webp";

const courseSql = {
  title: "Master SQL Injection Defense",
  courses: [
    {
      image: CourseSqlImageOne,
      title: "Understanding SQL Injection Fundamentals",
      link: "/Sql-Injection/HomePage",
      description:
        "Learn the core concepts of SQL injection attacks, including different types and their impact on database security",
      categories: [
        "SQL Basics",
        "Attack Types",
        "Database Security",
        "Input Validation",
        "Query Analysis"
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6"
      },
      btn: {
        text: "Start Learning",
        link: "/Sql-Injection/HomePage"
      }
    },
    {
      image: CourseSqlImageTwo,
      title: "Advanced SQL Injection Prevention",
      link: "/Sql-Injection/Article",
      description:
        "Deep dive into advanced prevention techniques, including prepared statements, stored procedures, and input sanitization",
      categories: [
        "Prepared Statements",
        "Input Sanitization",
        "WAF Configuration",
        "Security Testing",
        "Best Practices"
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6"
      },
      btn: {
        text: "Learn More",
        link: "/Sql-Injection/Article"
      }
    },
    {
      image: CourseSqlImageThree,
      title: "Real-world SQL Injection Scenarios",
      link: "/Sql-Injection/AttackPages/ClassicSqlInjection",
      description:
        "Explore real-world case studies and hands-on exercises to understand how attackers exploit SQL vulnerabilities",
      categories: [
        "Case Studies",
        "Attack Simulation",
        "Defense Strategies",
        "Vulnerability Assessment",
        "Incident Response"
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8"
      },
      btn: {
        text: "Start Practice",
        link: "/Sql-Injection/AttackPages/ClassicSqlInjection"
      }
    },
    {
      image: CourseSqlImageFour,
      title: "Database Security Architecture",
      link: "/Sql-Injection/AttackPages/UnionBasedInjection",
      description:
        "Learn to build secure database architectures that are resilient against SQL injection and other database attacks",
      categories: [
        "Architecture Design",
        "Security Layers",
        "Access Control",
        "Monitoring",
        "Audit Trails"
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8"
      },
      btn: {
        text: "Explore More",
        link: "/Sql-Injection/AttackPages/UnionBasedInjection"
      }
    }
  ]
};

export { courseOne, courseTwo, courseThree, courseSql };
