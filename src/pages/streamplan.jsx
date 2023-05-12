import { Termine } from "./termine";

export const Streamplan = () => {
  return (
    <section className="streamplanContainer">
      <Termine />

      <h2>Streamplan - Raikun</h2>
      <article className="planContainer">
        <div className="planCard">
          <div className="day">
            Dienstag und Donnerstag 19-22 Uhr
            <p className="streamHeader">Rocket League mit Keksi</p>
          </div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/rl.mp4"
            ></video>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="planCard">
          <div className="day">
            Freitag 16-23 Uhr
            <p className="streamHeader">
              Realm Royale mit Fichtenzwerg
            </p>
          </div>
          <div className="video">
            <video
                autoPlay={true}
                muted={true}
                loop={true}
                src="/videos/realm.mp4"
              ></video>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="planCard">
          <div className="day">Samstag und Sonntag</div>
          <div className="video">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/combined.mp4"
            ></video>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </article>
    </section>
  );
};
