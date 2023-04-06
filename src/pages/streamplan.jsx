import { Freeday } from "../components/reusables/freeday";

export const Streamplan = () => {
  return (
    <section className="streamplanContainer">
      <h2>Streamplan - Raikun</h2>
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
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
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
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
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
                src="/videos/realm_vid.mp4"
              ></video>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="planCard">
          <div className="day">Samstag</div>
          <div className="video">
            <div className="videoWe">
              <div className="videoLeft">
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src="/videos/rl_vid.mp4"
                ></video>
              </div>
              <div>
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src="/videos/realm_vid.mp4"
                ></video>
              </div>
            </div>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="planCard">
          <div className="day">Sonntag</div>
          <div className="video">
            <div className="videoWe">
              <div className="videoLeft">
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src="/videos/rl_vid.mp4"
                ></video>
              </div>
              <div>
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src="/videos/realm_vid.mp4"
                ></video>
              </div>
            </div>
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
