import { Termine } from "./termine";

export const Streamplan = () => {
  const streamPlanDetails = [
    {
      title: "Rocket League Duo Training",
      time: "18-22 Uhr",
      video: "/videos/rl.mp4",
      img: "",
      day: "Dienstag",
    },
    {
      title: "Rocket League Duo Training",
      time: "18-22 Uhr",
      video: "/videos/rl.mp4",
      img: "",
      day: "Donnerstag",
    },
    {
      title: "Sea of Thieves mit RocketGirl",
      time: "18-23 Uhr",
      video: "/videos/realm.mp4",
      img: "",
      day: "Freitag",
    },
    {
      title: "Ausklingen der Woche mit RocketGirl",
      time: "18-22 Uhr",
      video: "/videos/combined.mp4",
      img: "",
      day: "Sonntag",
    },
  ];

  return (
    <section className="streamplanContainer">
      <Termine />
      <h2>Streamplan - Raikun</h2>
      <article className="planContainer">
        {streamPlanDetails.map((streamDay, i) => (
          <div className="planCard">
            <div className="day">
              <h2 className="streamHeader">{streamDay.title}</h2>
              <p>
                {streamDay.day}: {streamDay.time}
              </p>
            </div>
            <div className="video">
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                src={streamDay.video}
              ></video>
            </div>
            <div className="social">
              <a
                href="https://www.twitch.tv/RaikunGaming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitch"></i>
              </a>
              <a
                href="https://www.youtube.com/@RaikunsGamezone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="http://"></a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
