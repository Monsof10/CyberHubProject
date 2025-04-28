import FeatureOneImageOne from "/assets/imgs/thumb/feature-6-1.webp";
import FeatureOneImageTwo from "/assets/imgs/thumb/feature-6-2.webp";
import FeatureOneImageThree from "/assets/imgs/thumb/feature-6-3.webp";

import FeatureOneShapeOne from "/assets/imgs/shape/feature-6-1.webp";
import FeatureOneShapeTwo from "/assets/imgs/shape/feature-6-2.webp";
import FeatureOneShapeThree from "/assets/imgs/shape/feature-6-3.webp";

import FeatureOneShapeFour from "/assets/imgs/shape/feature-6-5.webp";
import FeatureOneShapeFive from "/assets/imgs/shape/feature-6-4.webp";

import FeatureOneShapeSix from "/assets/imgs/shape/feature-6-6.webp";
import FeatureOneShapeSeven from "/assets/imgs/shape/feature-6-7.webp";
import FeatureOneShapeEight from "/assets/imgs/shape/feature-6-8.webp";

const featureOne = {
  title: "A platform designed for you to begin your journey in  Cyber attacks",
  features: [
    {
      title: {
        sliceOne: "Denial",
        sliceTwo: "of service",
      },
      description:
        "Start with understanding the fundemantals of Denial-Of-Service Attacks",
      image: FeatureOneImageOne,
      card: 1,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      shapeOne: FeatureOneShapeOne,
      shapeTwo: FeatureOneShapeTwo,
      shapeThree: FeatureOneShapeThree,
    },
    {
      title: {
        sliceOne: "Distributed Denial of",
        sliceTwo: "service ",
      },
      description:
        "Begin by learning the basics of DDoS attacks to strengthen your defenses.",
      image: FeatureOneImageTwo,
      card: 2,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      shapeOne: FeatureOneShapeFour,
      shapeTwo: FeatureOneShapeFive,
    },
    {
      title: {
        sliceOne: "Assessement and Prevention  ",
        sliceTwo: "",
      },
      description:
        "Focus on assessing and preventing DDoS attacks to safeguard your systems",
      image: FeatureOneImageThree,
      card: 3,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "1.0",
      },
      shapeOne: FeatureOneShapeSix,
      shapeTwo: FeatureOneShapeSeven,
      shapeThree: FeatureOneShapeEight,
    },
  ],
};

import FeatureTwoIconOne from "/assets/imgs/icon/achieve-6-1.webp";
import FeatureTwoIconTwo from "/assets/imgs/icon/achieve-6-2.webp";
import FeatureTwoIconThree from "/assets/imgs/icon/achieve-6-3.webp";

const whatYouCanAcheive = {
  title: "Why learn about DoS and DDoS attacks?",
  features: [
    {
      icon: FeatureTwoIconOne,
      name: "Resilience",
      description:
        "Your organization must understand DoS and DDoS attacks to strengthen its defenses and maintain service availability",
    },
    {
      icon: FeatureTwoIconTwo,
      name: "Preparedness",
      description:
        "Your organization must implement proactive security measures to detect, mitigate, and respond to DoS and DDoS threats effectively",
    },
    {
      icon: FeatureTwoIconThree,
      name: "Continuity",
      description:
        "Your organization must develop a robust incident response plan to minimize downtime and ensure business operations remain uninterrupted during an attack.",
    },
  ],
};

export { featureOne, whatYouCanAcheive };
