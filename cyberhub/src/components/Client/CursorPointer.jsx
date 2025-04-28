import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function CursorPointer() {
  useGSAP(() => {
    gsap.context(() => {
      const cursorItems = gsap.utils.toArray(".cursor");

      cursorItems.forEach((cursorItem) => {
        let options = {
          duration: 0.5,
          ease: "power3",
        };

        if (cursorItem.hasAttribute("data-duration")) {
          options.duration = parseFloat(
            cursorItem.getAttribute("data-duration")
          );
        }

        if (cursorItem.hasAttribute("data-ease")) {
          options.ease = parseFloat(cursorItem.getAttribute("data-ease"));
        }

        gsap.set(cursorItem, { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo(cursorItem, "x", options),
          yTo = gsap.quickTo(cursorItem, "y", options);

        window.addEventListener("mousemove", (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
      });
    });
  });
  return (
    <>
      <div className="cursor" data-duration="0.6"></div>
      <div className="cursor cursor-small" data-duration="0.3"></div>
    </>
  );
}
