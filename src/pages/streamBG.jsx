import { StreamHeader } from "../components/streamBG/streamheader";

export const StreamBG = () => {
  return (
    <section className="streamBGContainer">
      <StreamHeader />
      <article className="assetContainer">
        <iframe
          className="chatContainer"
          src="https://chat.restream.io/embed?token=c3dc5b68-8078-4503-91e0-414ae57cd5dd"
          frameBorder="0"
        ></iframe>
        <div className="leftContainer">
          <div className="videoContainer">
            <video src="https://www.tiktok.com/@raikungz/video/7337432950528642337"></video>
          </div>
          <div className="bottomContainer">
            <img
              className="werbung"
              src="./images/shirts/levelCompleted/Lv18shirt.gif"
              alt=""
            />
            <div>
              <p className="command">!merch</p>
              <p className="textContent">
                Alle Infos zu den aktuellen Streamzeiten, merch und anderen
                Informationen findest du auf meiner Webseite.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
