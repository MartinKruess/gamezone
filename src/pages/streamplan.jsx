import { Freeday } from "../components/reusables/freeday";

export const Streamplan = () => {
  return (
    <section className="streamplanContainer">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vel
        omnis, est maiores, ex dicta explicabo veritatis, ullam quo fugiat
        molestias quam libero ipsam architecto molestiae accusamus cupiditate
        eveniet. Praesentium cumque a quo aut dolores nihil odit, numquam
        debitis beatae est ex, quidem in pariatur tempora distinctio aperiam
        quam alias veniam nulla officiis hic quibusdam. Possimus ea deserunt
        laudantium maiores mollitia sunt fugit voluptatum, veritatis asperiores
        corrupti unde odit rerum dolorem necessitatibus, maxime nisi expedita
        amet ipsa animi aliquam autem. Voluptas pariatur porro nam vitae error,
        dignissimos et exercitationem repellat repellendus quidem corporis
        illum, distinctio voluptatem autem quae architecto voluptates!
      </p>
      <h2>Streamplan</h2>
      <article className="planContainer">
        <div className="planCard free">
          <div className="day">
            Montag <Freeday />
          </div>
        </div>

        <div className="planCard">
          <div className="day">
            Dienstag 20-22 Uhr
            <p className="streamHeader">Rocket League mit Keksi</p>
          </div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl_vid.mp4"
            ></video>
          </div>
        </div>
        <div className="planCard free">
          <div className="day">
            Mittwoch <Freeday />
          </div>
        </div>

        <div className="planCard">
          <div className="day">
            Donnerstag 20-22 Uhr
            <p className="streamHeader">Rocket League mit Keksi und Hatake</p>
          </div>

          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl_vid.mp4"
            ></video>
          </div>
        </div>

        <div className="planCard">
          <div className="day">
            Freitag 18-23 Uhr
            <p className="streamHeader">
              Realm Royale & Tower of Fantasy mit Fichtenzwerg
            </p>
          </div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl_vid.mp4"
            ></video>
          </div>
        </div>
        <div className="planCard">
          <div className="day">Samstag</div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl_vid.mp4"
            ></video>
          </div>
        </div>
        <div className="planCard">
          <div className="day">Sonntag</div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl_vid.mp4"
            ></video>
          </div>
        </div>
      </article>
    </section>
  );
};
