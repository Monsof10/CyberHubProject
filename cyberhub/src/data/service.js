import ServiceOneImageOne from "/assets/imgs/icon/skill-1.webp";
import ServiceOneImageTwo from "/assets/imgs/icon/skill-2.webp";
import ServiceOneImageThree from "/assets/imgs/icon/skill-3.webp";
import ServiceOneImageFour from "/assets/imgs/icon/skill-4.webp";

const serviceOne = {
  title: {
    sliceOne: "Why learn with",
    sliceTwo: "Cyberhub?",
  },
  services: [
    {
      icon: ServiceOneImageTwo,
      title: "Interactive Learning",
      description: "Access knowledge curated by industry professionals.",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageOne,
      title: "Expert Guidance",
      description: "Gain insights and strategies from seasoned industry experts.",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
    {
      icon: ServiceOneImageThree,
      title: "Career Advancement",
      description: "Unlock opportunities to elevate your professional growth",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageFour,
      title: "Community Support",
      description: "Connect with like-minded professionals and grow together.",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
  ],
};

import ServiceImageOne from "/assets/imgs/thumb/service-img-1.webp";
import ServiceImageTwo from "/assets/imgs/thumb/service-img-2.webp";
import ServiceImageThree from "/assets/imgs/thumb/service-img-3.webp";

import ServiceShapeOne from "/assets/imgs/shape/sr-shapefour-1.webp";
import ServiceShapeTwo from "/assets/imgs/shape/sr-shapefour-2.webp";
import ServiceShapeThree from "/assets/imgs/shape/sr-shapefour-3.webp";

const serviceTwo = {
  title: "Understand Email Spoofing ",
  services: [
    {
      image: ServiceImageOne,
      shape: ServiceShapeOne,
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
      title: "Spoofing Explained",
      description:
        "A straightforward guide to what email spoofing is, how it works, and why cybercriminals use it to deceive recipients",
    },
    {
      image: ServiceImageTwo,
      shape: ServiceShapeTwo,
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      title: "Spoofing Risks ",
      description:
        "An in-depth look at the dangers of email spoofing, including phishing attacks, financial fraud, and data breaches",
    },
    {
      image: ServiceImageThree,
      shape: ServiceShapeThree,
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      title: "Spoofing Prevention",
      description:
        "Practical strategies to identify spoofed emails and protect yourself from falling victim to email-based attacks",
    },
  ],
};

import EmpowerIcon from "/assets/imgs/icon/empower.webp";
import SkillIcon from "/assets/imgs/icon/skills.webp";
import ProfitIcon from "/assets/imgs/icon/profit.webp";
import ExistingIcon from "/assets/imgs/icon/existing.webp";

const serviceThree = {
  title: "Our Values",
  services: [
    {
      icon: EmpowerIcon,
      title: "Empower to learning",
      description:
        "You can enable someone to write by giving them a pen and paper.",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: SkillIcon,
      title: "Security Over Profit: Prioritizing Cyber Threat Prevention",
      description:
        "Emphasizing proactive cybersecurity measures to protect data and systems, even when they may not directly generate revenue",
      animation: {
        name: "fade-slide top",
      },
    },
    {
      icon: ProfitIcon,
      title: "Empower Through Cybersecurity Awareness",
      description:
        "Strengthening individuals and organizations with the knowledge to recognize and prevent cyber threats before they cause harm",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: ExistingIcon,
      title: "Skills Over Certifications in Cyber Defense",
      description:
        "Prioritizing hands-on cybersecurity skills and real-world experience over formal credentials to effectively combat evolving cyber threats.",
      animation: {
        name: "fade-slide top",
      },
    },
  ],
};

export { serviceOne, serviceTwo, serviceThree };
