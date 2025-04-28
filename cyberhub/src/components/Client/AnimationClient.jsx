import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

AnimationClient.propTypes = {
  children: PropTypes.object,
};

export default function AnimationClient({ children }) {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const fadeItems = gsap.utils.toArray(".fade");

      fadeItems.forEach((fadeItem) => {
        let startPosition = "top 90%",
          tweenOptions = {
            duration: 1.5,
            delay: 0.5,
            opacity: 1,
          };

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.to(fadeItem, tweenOptions);
      });

      const fadeSlideItems = gsap.utils.toArray(".fade-slide");

      fadeSlideItems.forEach((fadeSlideItem) => {
        let slideAmount = 80,
          startPosition = "top 90%",
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
          };

        if (fadeSlideItem.hasAttribute("data-slide-amount")) {
          slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
        }

        if (fadeSlideItem.hasAttribute("data-opacity")) {
          tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
        }

        if (fadeSlideItem.hasAttribute("data-ease")) {
          tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
        }

        if (fadeSlideItem.hasAttribute("data-duration")) {
          tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
        }

        if (fadeSlideItem.hasAttribute("data-delay")) {
          tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
        }

        if (fadeSlideItem.classList.contains("right")) {
          tweenOptions.x = slideAmount;
        }

        if (fadeSlideItem.classList.contains("left")) {
          tweenOptions.x = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("top")) {
          tweenOptions.y = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("bottom")) {
          tweenOptions.y = slideAmount;
        }

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeSlideItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.from(fadeSlideItem, tweenOptions);
      });

      const splitChars = gsap.utils.toArray(".split_chars");

      splitChars.forEach((fadeSlideItem) => {
        let slideAmount = 80,
          startPosition = "top 90%",
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
          };

        if (fadeSlideItem.hasAttribute("data-slide-amount")) {
          slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
        }

        if (fadeSlideItem.hasAttribute("data-opacity")) {
          tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
        }

        if (fadeSlideItem.hasAttribute("data-ease")) {
          tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
        }

        if (fadeSlideItem.hasAttribute("data-duration")) {
          tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
        }

        if (fadeSlideItem.hasAttribute("data-delay")) {
          tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
        }

        if (fadeSlideItem.classList.contains("right")) {
          tweenOptions.x = slideAmount;
        } else if (fadeSlideItem.classList.contains("left")) {
          tweenOptions.x = -slideAmount;
        } else if (fadeSlideItem.classList.contains("top")) {
          tweenOptions.y = -slideAmount;
        } else if (fadeSlideItem.classList.contains("bottom")) {
          tweenOptions.y = slideAmount;
        } else {
          tweenOptions.x = slideAmount;
        }

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeSlideItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.from(fadeSlideItem, tweenOptions);
      });

      const moveLine3DItems = gsap.utils.toArray(".move-line-3d");

      moveLine3DItems.forEach((fadeSlideItem) => {
        let slideAmount = 80,
          startPosition = "top 90%",
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
          };

        if (fadeSlideItem.hasAttribute("data-slide-amount")) {
          slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
        }

        if (fadeSlideItem.hasAttribute("data-opacity")) {
          tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
        }

        if (fadeSlideItem.hasAttribute("data-ease")) {
          tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
        }

        if (fadeSlideItem.hasAttribute("data-duration")) {
          tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
        }

        if (fadeSlideItem.hasAttribute("data-delay")) {
          tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
        }

        if (fadeSlideItem.classList.contains("right")) {
          tweenOptions.x = slideAmount;
        } else if (fadeSlideItem.classList.contains("left")) {
          tweenOptions.x = -slideAmount;
        } else if (fadeSlideItem.classList.contains("top")) {
          tweenOptions.y = -slideAmount;
        } else if (fadeSlideItem.classList.contains("bottom")) {
          tweenOptions.y = slideAmount;
        } else {
          tweenOptions.y = -slideAmount;
        }

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeSlideItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.from(fadeSlideItem, tweenOptions);
      });
    });

    return () => ctx.revert();
  }, []);
  return <div ref={container}>{children}</div>;
}

const moveOnMouse = function move() {};
export { moveOnMouse };
