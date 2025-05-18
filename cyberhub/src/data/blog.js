import ArrowRightDark from "/assets/imgs/icon/arrow-right-dark.svg";
import ArtRedIcon from "/assets/imgs/icon/art-red.svg";
import TimeSquareIcon from "/assets/imgs/icon/time-square.svg";
import BlogImageOne from "/assets/imgs/gallery/blog-1.webp";
import BlogImageTwo from "/assets/imgs/gallery/blog-2.webp";
import BlogImageThree from "/assets/imgs/gallery/blog-3.webp";

import BlogDetailImageOne from "/assets/imgs/thumb/blogdetails-thumb-1.webp";
import BlogDetailImageTwo from "/assets/imgs/thumb/blogdetails-thumb-2.webp";
import BlogDetailImageThree from "/assets/imgs/thumb/blogdetails-thumb-3.webp";
import BlogDetailImageFour from "/assets/imgs/thumb/blogdetails-thumb-4.webp";

const blogOne = {
  title: {
    sliceOne: "Latest",
    sliceTwo: "Blog",
  },
  blogs: [
    {
      image: BlogImageOne,
      artRedIcon: ArtRedIcon,
      timeSquareIcon: TimeSquareIcon,
      title: "Zero Trust Security: A Complete Guide for 2024",
      link: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture",
      category: {
        name: "Network Security",
        link: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html",
      },
      time: "05 Jan 2024",
      moreBtn: {
        text: "Read more",
        icon: ArrowRightDark,
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      image: BlogImageTwo,
      artRedIcon: ArtRedIcon,
      timeSquareIcon: TimeSquareIcon,
      title: "AI in Cybersecurity: Emerging Trends and Tools",
      link: "https://www.ibm.com/security/artificial-intelligence",
      category: {
        name: "Security Innovation",
        link: "https://www.darkreading.com/security-technology",
      },
      time: "05 Jan 2024",
      moreBtn: {
        text: "Read more",
        icon: ArrowRightDark,
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      image: BlogImageThree,
      artRedIcon: ArtRedIcon,
      timeSquareIcon: TimeSquareIcon,
      title: "Blockchain Security: Protecting Digital Assets",
      link: "https://www.coindesk.com/learn/blockchain-security/",
      category: {
        name: "Emerging Technologies",
        link: "https://www.technologyreview.com/topic/security/",
      },
      time: "05 Jan 2024",
      moreBtn: {
        text: "Read more",
        icon: ArrowRightDark,
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
  ],
};

const blogContentOne = [
  {
    image: BlogDetailImageOne,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Quantum Computing and Cybersecurity: Future Threats",
    link: "https://www.ibm.com/quantum/quantum-computing-and-cybersecurity",
    category: {
      name: "Emerging Threats",
      link: "https://www.darkreading.com/emerging-threats",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.2",
    },
  },
  {
    image: BlogDetailImageTwo,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Cloud Security Best Practices for 2024",
    link: "https://aws.amazon.com/architecture/security-identity-compliance",
    category: {
      name: "Cloud Security",
      link: "https://cloud.google.com/security",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.4",
    },
  },
  {
    image: BlogDetailImageThree,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Supply Chain Security: Protecting Your Digital Assets",
    link: "https://www.microsoft.com/en-us/security/business/security-101/what-is-supply-chain-security",
    category: {
      name: "Enterprise Security",
      link: "https://www.gartner.com/reviews/market/enterprise-security",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.6",
    },
  },
  {
    image: BlogDetailImageFour,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Zero-Day Vulnerabilities: Detection and Response",
    link: "https://www.crowdstrike.com/cybersecurity-101/zero-day-exploit/",
    category: {
      name: "Threat Detection",
      link: "https://www.trellix.com/en-us/security-awareness/operations/what-is-threat-detection-and-response.html",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.6",
    },
  },
  {
    image: BlogDetailImageOne,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Ransomware Defense Strategies for 2024",
    link: "https://www.trellix.com/en-us/security-awareness/ransomware/what-is-ransomware.html",
    category: {
      name: "Threat Prevention",
      link: "https://www.checkpoint.com/cyber-hub/threat-prevention/",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.2",
    },
  },
  {
    image: BlogDetailImageTwo,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "IoT Security: Protecting Smart Devices",
    link: "https://www.kaspersky.com/resource-center/iot",
    category: {
      name: "Device Security",
      link: "https://www.fortinet.com/resources/iot-security",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.4",
    },
  },
  {
    image: BlogDetailImageThree,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Mobile Security Best Practices",
    link: "https://www.securemobiledevices.com/best-practices",
    category: {
      name: "Mobile Security",
      link: "https://www.android.com/safety/",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.6",
    },
  },
  {
    image: BlogDetailImageFour,
    artRedIcon: ArtRedIcon,
    timeSquareIcon: TimeSquareIcon,
    title: "Social Engineering: Understanding Human Vulnerabilities",
    link: "https://www.social-engineer.org/framework/general-discussion/",
    category: {
      name: "Human Security",
      link: "https://www.knowbe4.com/social-engineering",
    },
    time: "05 Jan 2024",
    moreBtn: {
      text: "Read more",
      icon: ArrowRightDark,
    },
    animation: {
      name: "fade-slide bottom",
      delay: "0.6",
    },
  },
];

import BlogTwoImageOne from "/assets/imgs/thumb/blog-thumb-1.webp";
import BlogTwoImageTwo from "/assets/imgs/thumb/blog-thumb-2.webp";
import BlogTwoImageThree from "/assets/imgs/thumb/blog-thumb-3.webp";
import BlogTwoBtnIcon from "/assets/imgs/icon/arrow-right-thin.svg";

const blogTwo = {
  title: "Inspire to learn and growth",
  blogs: [
    {
      image: BlogTwoImageOne,
      title: "Family-Friendly Cybersecurity Adventures",
      link: "blog-detail",
      meta: [
        {
          name: "01 Jan 2024",
          link: "#",
        },
        {
          name: "Event",
          link: "#",
        },
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
      btn: {
        text: "Read More",
        link: "blog-detail",
        icon: BlogTwoBtnIcon,
      },
    },
    {
      image: BlogTwoImageTwo,
      title: "School-Friendly Cyber Expeditions",
      link: "blog-detail",
      meta: [
        {
          name: "01 Jan 2024",
          link: "#",
        },
        {
          name: "Event",
          link: "#",
        },
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Read More",
        link: "blog-detail",
        icon: BlogTwoBtnIcon,
      },
    },
    {
      image: BlogTwoImageThree,
      title: "Gold at Cyberhub: Mastering Digital Defense",
      link: "blog-detail",
      meta: [
        {
          name: "01 Jan 2024",
          link: "#",
        },
        {
          name: "Event",
          link: "#",
        },
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Read More",
        link: "blog-detail",
        icon: BlogTwoBtnIcon,
      },
    },
  ],
};

import BlogThreeImageOne from "/assets/imgs/thumb/blog-6-1.webp";
import BlogThreeImageTwo from "/assets/imgs/thumb/blog-6-2.webp";
import BlogThreeImageThree from "/assets/imgs/thumb/blog-6-3.webp";

const blogThree = [
  {
    
    category: "RoadMap",
    date: "01 Jan 2025",
    title: "Advanced Persistent Threats (APTs): Detection and Mitigation",
    link: "https://www.fireeye.com/current-threats/apt-groups.html",
    duration: "8 Min read",
    btn: {
      text: "Read More",
      link: "blog-detail",
    },
  },
  {
    
    category: "RoadMap",
    date: "01 Jan 2025",
    title: "Container Security: Protecting Kubernetes Environments",
    link: "https://kubernetes.io/docs/concepts/security/",
    duration: "12 Min read",
    btn: {
      text: "RoadMap",
      link: "blog-detail",
    },
  },
  {
    
    category: "RoadMap",
    date: "01 Jan 2025",
    title: "DevSecOps: Integrating Security into CI/CD Pipelines",
    link: "https://www.redhat.com/en/topics/devops/what-is-devsecops",
    duration: "7 Min read",
    btn: {
      text: "Read More",
      link: "blog-detail",
    },
  },
  {
    image: BlogThreeImageOne,
    category: "RoadMap",
    date: "01 Jan 2025",
    title: "Cloud-Native Security: Best Practices and Tools",
    link: "https://www.aquasec.com/cloud-native-security/",
    duration: "5 Min read",
    btn: {
      text: "Read More",
      link: "blog-detail",
    },
  },
  {
    image: BlogThreeImageThree,
    category: "RoadMap",
    date: "01 Jan 2025",
    title: "API Security: Protecting Modern Applications",
    link: "https://owasp.org/www-project-api-security/",
    duration: "10 Min read",
    btn: {
      text: "Read More",
      link: "blog-detail",
    },
  },
];

export { blogOne, blogContentOne, blogTwo, blogThree };

import SidebarOneSearchIcon from "/assets/imgs/icon/search-white.webp";
import SidebarOneDateIcon from "/assets/imgs/icon/date-red.webp";
import SidebarOnePostOne from "/assets/imgs/thumb/latest-post-1.webp";
import SidebarOnePostTwo from "/assets/imgs/thumb/latest-post-2.webp";
import SidebarOnePostThree from "/assets/imgs/thumb/latest-post-3.webp";

const blogSidebarOne = {
  search: {
    title: "Search",
    icon: SidebarOneSearchIcon,
  },
  post: {
    title: "Latest",
    items: [
      {
        title: "Advanced Cybersecurity Techniques for 2024",
        link: "https://www.nist.gov/cybersecurity",
        image: SidebarOnePostOne,
        icon: SidebarOneDateIcon,
        date: "05 Jan 2024",
      },
      {
        title: "Understanding DDoS Attack Prevention",
        link: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/",
        image: SidebarOnePostTwo,
        icon: SidebarOneDateIcon,
        date: "05 Jan 2023",
      },
      {
        title: "Essential Network Security Protocols",
        link: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html",
        image: SidebarOnePostThree,
        icon: SidebarOneDateIcon,
        date: "05 Jan 2022",
      },
    ],
  },
  category: {
    title: "Categories",
    items: [
      {
        name: "Network Security",
        link: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html",
        count: "09",
      },
      {
        name: "Cyber Defense",
        link: "https://www.sans.org/cyber-security/",
        count: "07",
      },
      {
        name: "Ethical Hacking",
        link: "https://www.offensive-security.com/blog/",
        count: "05",
      },
      {
        name: "Cloud Security",
        link: "https://aws.amazon.com/security/",
        count: "04",
      },
      {
        name: "Malware Analysis",
        link: "https://www.virustotal.com/gui/home/upload",
        count: "05",
      },
      {
        name: "Incident Response",
        link: "https://www.incidentresponse.com/",
        count: "06",
      },
    ],
  },
  tag: {
    title: "Tags",
    items: [
      {
        name: "Cybersecurity",
        link: "https://www.cisa.gov/topics/cybersecurity-best-practices",
      },
      {
        name: "Network Defense",
        link: "https://www.paloaltonetworks.com/cyberpedia/what-is-network-security",
      },
      {
        name: "Penetration Testing",
        link: "https://owasp.org/www-project-web-security-testing-guide/",
      },
      {
        name: "Security Tools",
        link: "https://www.kali.org/tools/",
      },
      {
        name: "Threat Analysis",
        link: "https://www.mitre.org/attack",
      },
      {
        name: "Digital Forensics",
        link: "https://www.sans.org/digital-forensics/",
      },
    ],
  },
};

export { blogSidebarOne };

import BlogDetailOneImageOne from "/assets/imgs/thumb/blogdetails-thumb-1.webp";
import QuoteIcon from "/assets/imgs/icon/quote-icon.webp";

import BlogDetailOneGalleryOne from "/assets/imgs/gallery/post-gallery-1.webp";
import BlogDetailOneGalleryTwo from "/assets/imgs/gallery/post-gallery-2.webp";

import BlogDetailOneShareOne from "/assets/imgs/icon/share-twitter.svg";
import BlogDetailOneShareTwo from "/assets/imgs/icon/share-facebook.svg";
import BlogDetailOneShareThree from "/assets/imgs/icon/share-linkedin.svg";
import BlogDetailOneShareFour from "/assets/imgs/icon/share-icon.svg";

import BlogDetailOneInstructorImage from "/assets/imgs/team/author.webp";
import BlogDetailOneInstructorSocialOne from "/assets/imgs/icon/twitter-md.svg";
import BlogDetailOneInstructorSocialTwo from "/assets/imgs/icon/facebook-md.svg";
import BlogDetailOneInstructorSocialThree from "/assets/imgs/icon/link-md.svg";
import BlogDetailOneInstructorSocialFour from "/assets/imgs/icon/linkdien-md.svg";
import BlogDetailOneInstructorSocialFive from "/assets/imgs/icon/youtube-md.svg";

import BlogDetailCommentImageOne from "/assets/imgs/team/comment-1.webp";
import BlogDetailCommentImageTwo from "/assets/imgs/team/reply-img.webp";

import BlogDetailReviewIconOne from "/assets/imgs/icon/review-bold.webp";
import BlogDetailReplyIconOne from "/assets/imgs/icon/share-red.webp";
import BlogDetailReplyIconTwo from "/assets/imgs/icon/share-icon.webp";

const blogDetailOne = {
  title: {
    one: "Comprehensive guide to Cyber Security in 2023",
    two: "Tiwonge tell us a bit about what you do.",
    three: "",
  },
  quote: {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    icon: QuoteIcon,
    name: "Albert Einstein",
  },
  image: BlogDetailOneImageOne,
  description: {
    one: "I'm a business owner and founder of Yenge consultancy, which does pretty much everything EDI (Equity, Diversity & Inclusion) across public, private and charitable sectors. No day is the same. A day in my life can be delivering training, or helping companies to start their EDI journey through audit, strategy and policy development, writing blogs, webinars or panel discussions. It also means that I get to be involved in great projects such as the WIN Design Lab. There's so much work still to be done to increase the sense of belonging of people in our society. I'm always ready to do anything I can to help make that happen.",
    two: "I had worked with The Black Leadership Group for years and believe in their mission and values. When I heard about their collaboration with DK&amp;A on the Design Lab programme,I saw it as a chance to make a positive impact. I’ve never come across an organisation like DK&A before, whose focus is design thinking. Its such a great way to innovate in the EDI space. Even though I'm an 'expert' into the EDI space, I've got so much to learn still.",
    three:
      "Communication. One of the things that makes the Design Lab so powerful is the opportunity to communicate and collaborate. Knowing that many people have signed up for this program and are brave enough and ready to do this, gives me a warm feeling inside. It shows how many organisations care about making their people a priority, to ensure they succeed and feel a sense of belonging. Ultimately that's why people are here.",
    four: "The Sector Co-Creation event at City Hall. To spend time in-person with my colleagues, fellow coaches and the participants, the feeling we're all in this together. Also hearing from the guest speakers, with their amazing inspirational stories, plus the chance to physically interact with people that previously Id' only interacted with on a screen. The day was buzzing, full of energy, lessons learned, lots of sharing and it was great fun too.",
  },
  meta: [
    {
      icon: ArtRedIcon,
      title: "Tech & It",
      link: "#",
    },
    {
      icon: TimeSquareIcon,
      title: "05 Jan 2024",
    },
  ],
  galleries: [BlogDetailOneGalleryOne, BlogDetailOneGalleryTwo],
  tag: {
    title: "Tags",
    items: [
      {
        name: "Education",
        link: "#",
      },
      {
        name: "Design",
        link: "#",
      },
      {
        name: "UI/UX",
        link: "#",
      },
    ],
  },
  share: {
    title: "Share",
    items: [
      { icon: BlogDetailOneShareOne, link: "#" },
      { icon: BlogDetailOneShareTwo, link: "#" },
      { icon: BlogDetailOneShareThree, link: "#" },
      { icon: BlogDetailOneShareFour, link: "#" },
    ],
  },
  instructor: {
    image: BlogDetailOneInstructorImage,
    name: "Alex Jonathon",
    designation: "Design expert",
    description:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat.",
    socials: [
      {
        icon: BlogDetailOneInstructorSocialOne,
        link: "#",
      },
      {
        icon: BlogDetailOneInstructorSocialTwo,
        link: "#",
      },
      {
        icon: BlogDetailOneInstructorSocialThree,
        link: "#",
      },
      {
        icon: BlogDetailOneInstructorSocialFour,
        link: "#",
      },
      {
        icon: BlogDetailOneInstructorSocialFive,
        link: "#",
      },
    ],
  },
  comment: {
    title: "Comment",
    items: [
      {
        image: BlogDetailCommentImageOne,
        date: "01 Jan 2026",
        author: "Bradford Windler",
        reviewIcon: BlogDetailReviewIconOne,
        description:
          "Magna ac placerat vestibulum lectus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nunc vel risus commodo viverra maecenas accumsan lacus auctor.",
        replyBtn: {
          text: "Reply",
          icon: BlogDetailReplyIconOne,
          link: "#",
        },
        replies: [
          {
            image: BlogDetailCommentImageTwo,
            reply: "01 Jan 2026",
            author: "Bradford Windler",
            reviewIcon: BlogDetailReviewIconOne,
            description:
              "Magna ac placerat vestibulum lectus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nunc vel risus commodo viverra maecenas accumsan lacus auctor.",
            btn: {
              text: "Reply",
              icon: BlogDetailReplyIconTwo,
            },
          },
        ],
      },
      {
        image: BlogDetailCommentImageOne,
        date: "01 Jan 2026",
        author: "Bradford Windler",
        reviewIcon: BlogDetailReviewIconOne,
        description:
          "Magna ac placerat vestibulum lectus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nunc vel risus commodo viverra maecenas accumsan lacus auctor.",
        replyBtn: {
          text: "Reply",
          icon: BlogDetailReplyIconOne,
          link: "#",
        },
      },
    ],
  },
};

export { blogDetailOne };
