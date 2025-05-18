import ArrowRightWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";
import ReviewIcon from "/assets/imgs/icon/review.webp";
import FeedbackIcon from "/assets/imgs/icon/feedback.webp";

import SlideOneItemOne from "/assets/imgs/gallery/course-img-2.webp";
import SlideOneItemTwo from "/assets/imgs/hero/hero-2.jpg";
import SlideOneItemThree from "/assets/imgs/hero/hero-3.webp";
import SlideOneItemFour from "/assets/imgs/gallery/course-img-2.webp";
import SlideOneItemFive from "/assets/imgs/gallery/course-img-6.webp";

import SlideOneWidgetOne from "/assets/imgs/shape/hero-shape-1.webp";
import SlideOneWidgetTwo from "/assets/imgs/shape/hero-shape-2.webp";
import SlideOneWidgetThree from "/assets/imgs/shape/hero-shape-3.webp";

const heroOne = {
  title: {
    sliceOne: "Defend smarter,",
    sliceTwo: "not harder",
    sliceThree: "unleash AI-powered security like a",
    sliceFour: "boss!",
  },
  description:
    "Get inside the hacker’s mind — use AI to uncover, exploit, and outsmart real-world vulnerabilities.",
  btn: {
    title: "Explore our courses",
    link: "course",
    icon: ArrowRightWhiteIcon,
  },
  review: {
    icon: ReviewIcon,
    feedbackIcon: FeedbackIcon,
    title: "Based on 1,000+ reviews from",
  },
  slides: [
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
  ],
};

import InnerOneShapeOne from "/assets/imgs/shape/banner-shape-1.webp";
import InnerOneShapeTwo from "/assets/imgs/shape/banner-shape-2.webp";
import InnerOneShapeThree from "/assets/imgs/shape/banner-shape-3.webp";
import InnerOneShapeFour from "/assets/imgs/shape/banner-shape-4.webp";
import InnerOneShapeFive from "/assets/imgs/shape/banner-shape-5.webp";
import InnerOneShapeSix from "/assets/imgs/shape/banner-shape-6.webp";
import InnerOneShapeSeven from "/assets/imgs/shape/banner-shape-7.webp";

const innerHeroOne = {
  shapeOne: InnerOneShapeOne,
  shapeTwo: InnerOneShapeTwo,
  shapeThree: InnerOneShapeThree,
  shapeFour: InnerOneShapeFour,
  shapeFive: InnerOneShapeFive,
  shapeSix: InnerOneShapeSix,
  shapeSeven: InnerOneShapeSeven,
};

import BadgeImage from "/assets/imgs/shape/hero-circletext-4.svg";
import BadgeTextIcon from "/assets/imgs/icon/textshape-icon.svg";
import HeroTwoImageOne from "/assets/imgs/hero/children-women.webp";
import HeroTwoImageTwo from "/assets/imgs/hero/child-img.webp";

import HeroTwoShapeOne from "/assets/imgs/shape/hero-btm-shape-4.webp";
import HeroTwoShapeFour from "/assets/imgs/shape/hero-shapefour-5.webp";
import HeroTwoShapeFive from "/assets/imgs/shape/hero-shapefour-8.webp";
import HeroTwoShapeSix from "/assets/imgs/shape/hero-shapefour-9.webp";

import HeroTwoShapeEight from "/assets/imgs/bg/1.webp";

const heroTwo = {
  title: {
    sliceOne: "Empowering",
    sliceTwo: "Cyber Security Learners ",
    sliceThree: "to Thrive",
  },
  link: "/Spoofing/HomePage",
  imageOne: HeroTwoImageOne,
  imageTwo: HeroTwoImageTwo,
  badgeImage: BadgeImage,
  badgeTextIcon: BadgeTextIcon,
  description:
    "Our nonprofit strives to offer a top-tier education at no cost, accessible to everyone globally",
  shapeOne: HeroTwoShapeOne,
  shapeFour: HeroTwoShapeFour,
  shapeFive: HeroTwoShapeFive,
  shapeSix: HeroTwoShapeSix,
  shapeEight: HeroTwoShapeEight,
};

import HeroThreeShapeOne from "/assets/imgs/shape/banner-6-1.webp";
import HeroThreeShapeTwo from "/assets/imgs/shape/banner-6-2.webp";
import HeroThreeShapeThree from "/assets/imgs/shape/banner-6-3.webp";
import HeroThreeShapeFour from "/assets/imgs/shape/banner-6-4.webp";

const heroThree = {
  title: {
    sliceOne: "Build a solid background and prevent yourself from ",
    sliceTwo: "Denial-of-service",
  },
  description:
    "Sometimes attackers don't want to access your website , they just want it to be unavailable ",
  btn: {
    link: "/DosAndDdos/HomePage",
    text: "Get Started",
  },
  shapeOne: HeroThreeShapeOne,
  shapeTwo: HeroThreeShapeTwo,
  shapeThree: HeroThreeShapeThree,
  shapeFour: HeroThreeShapeFour,
};

const heroFour = {
  title: {
    sliceOne: "The global frontier for AI-powered cybersecurity training and real-world",
    sliceTwo: "attack simulations.",
  },
  descriptionOne:
    "Empowering you with cutting-edge AI security skills. Dive into a smarter, hands-on journey to a future-proof cyber career.",
  descriptionTwo:
    "We put you at the center of every line of code and every defense. Your security journey is our mission — with AI-driven solutions tailored to your unique path.",
};
import HeroSqlShapeOne from "/assets/imgs/shape/banner-6-1.webp";
import HeroSqlShapeTwo from "/assets/imgs/shape/banner-6-2.webp";
import HeroSqlShapeThree from "/assets/imgs/shape/banner-6-3.webp";
import HeroSqlShapeFour from "/assets/imgs/shape/banner-6-4.webp";

const heroSql = {
  title: {
    sliceOne: "Master the art of",
    sliceTwo: "SQL Injection",
    sliceThree: "and secure your databases"
  },
  description:
    "Learn how attackers exploit database vulnerabilities and build robust defenses against SQL injection attacks",
  btn: {
    link: "/Sql-Injection/HomePage",
    text: "Start Learning",
  },
  shapeOne: HeroSqlShapeOne,
  shapeTwo: HeroSqlShapeTwo,
  shapeThree: HeroSqlShapeThree,
  shapeFour: HeroSqlShapeFour,
};

export { heroOne, innerHeroOne, heroTwo, heroThree, heroFour, heroSql };
