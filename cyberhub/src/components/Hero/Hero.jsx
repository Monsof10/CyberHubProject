import { heroData as data } from "'data/hero'";

export default function Hero() {
  return (
    <section className="hero__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero__title">{data.title}</h1>
            <p className="hero__description">{data.description}</p>
            <a href={data.link} className="btn btn-primary">
              Join Cyberhub
            </a>
          </div>
          <div className="col-lg-6">
            <img src={data.image} alt="Hero" className="hero__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
