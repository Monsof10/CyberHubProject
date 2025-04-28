import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { counterOne as counters } from "@/data/counter";

import CounterShapeOne from "/assets/imgs/shape/c-shape-1.webp";
import CounterShapeTwo from "/assets/imgs/shape/c-shape-2.webp";
import CounterShapeThree from "/assets/imgs/shape/c-shape-3.webp";
import CounterShapeFour from "/assets/imgs/shape/c-shape-4.webp";
import CounterShapeFive from "/assets/imgs/shape/c-shape-5.webp";

export default function CounterTwo() {
  return (
    <section className="counter__area-3">
      <div className="container">
        <div className="counter__wrapper-3">
          <div className="counter__inner-3">
            {counters.map((counter, index) => (
              <div
                key={index}
                className="counter__item-3 fade-slide bottom"
                data-delay="0"
              >
                <ReactVisibilitySensor delayedCall>
                  {({ isVisible }) => (
                    <h2 className="counter__title-3 counter">
                      {isVisible ? (
                        <CountUp start={0} end={counter.count} />
                      ) : (
                        0
                      )}
                      {counter.abbr}
                      <span>+</span>
                    </h2>
                  )}
                </ReactVisibilitySensor>
                {counter.title && (
                  <h3 className="counter__text-3">{counter.title}</h3>
                )}
              </div>
            ))}
          </div>
          <img
            className="counter__shapeThree-1 moveBottom"
            src={CounterShapeOne}
            alt="Shape"
          />
          <img
            className="counter__shapeThree-2 moveLeft"
            src={CounterShapeTwo}
            alt="Shape"
          />
          <img
            className="counter__shapeThree-3 zoom-in-out"
            src={CounterShapeThree}
            alt="Shape"
          />
          <img
            className="counter__shapeThree-4 moveRight"
            src={CounterShapeFour}
            alt="Shape"
          />
          <img
            className="counter__shapeThree-5 moveBottom"
            src={CounterShapeFive}
            alt="Shape"
          />
        </div>
      </div>
    </section>
  );
}
