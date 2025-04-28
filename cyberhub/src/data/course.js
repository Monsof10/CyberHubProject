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
      title: "Email Spoofing for Beginners: A way to Your Credentials",
      price: "$9.00",
      link: "/Spoofing/Article",
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

import CourseTwoImageOne from "/assets/imgs/thumb/course-four-1.webp";
import CourseTwoImageTwo from "/assets/imgs/thumb/course-four-2.webp";
import CourseTwoImageThree from "/assets/imgs/thumb/course-four-3.webp";

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

import CourseThreeImageOne from "/assets/imgs/thumb/course-6-1.webp";
import CourseThreeImageTwo from "/assets/imgs/thumb/course-6-2.webp";
import CourseThreeImageThree from "/assets/imgs/thumb/course-6-3.webp";
import CourseThreeImageFour from "/assets/imgs/thumb/course-6-4.webp";

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
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
  ],
};

export { courseOne, courseTwo, courseThree };