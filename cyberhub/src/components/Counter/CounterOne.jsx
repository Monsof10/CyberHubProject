import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

import { counterOne as counters } from "@/data/counter";

export default function CounterOne() {
  return (
    <section className="counter__area">
      <div className="container">
        <div className="counter__wrapper">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="counter__item fade-slide bottom"
              data-delay="0"
            >
              <ReactVisibilitySensor delayedCall>
                {({ isVisible }) => (
                  <h2 className="counter__title counter">
                    {isVisible ? <CountUp start={0} end={counter.count} /> : 0}
                    {counter.abbr}
                    <span>+</span>
                  </h2>
                )}
              </ReactVisibilitySensor>
              {counter.title && (
                <h3 className="counter__text">{counter.title}</h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
