import Image from "next/image";
import pic02 from "@/public/assets/pic02.jpg";
import pic03 from "@/public/assets/pic03.jpg";
import pic04 from "@/public/assets/pic04.jpg";
import pic05 from "@/public/assets/pic05.jpg";
import pic06 from "@/public/assets/pic06.jpg";
import pic07 from "@/public/assets/pic07.jpg";

const Protfolio = () => {
  return (
    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2>Portfolio</h2>
        </header>

        <p>
          Vitae natoque dictum etiam semper magnis enim feugiat convallis
          convallis egestas rhoncus ridiculus in quis risus amet curabitur
          tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
          vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.
        </p>

        <div className="row">
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic02} alt="" />
              </a>
              <header>
                <h3>Ipsum Feugiat</h3>
              </header>
            </article>
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic03} alt="" />
              </a>
              <header>
                <h3>Rhoncus Semper</h3>
              </header>
            </article>
          </div>
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic04} alt="" />
              </a>
              <header>
                <h3>Magna Nullam</h3>
              </header>
            </article>
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic05} alt="" />
              </a>
              <header>
                <h3>Natoque Vitae</h3>
              </header>
            </article>
          </div>
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic06} alt="" />
              </a>
              <header>
                <h3>Dolor Penatibus</h3>
              </header>
            </article>
            <article className="item">
              <a href="#" className="image fit">
                <Image src={pic07} alt="" />
              </a>
              <header>
                <h3>Orci Convallis</h3>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
