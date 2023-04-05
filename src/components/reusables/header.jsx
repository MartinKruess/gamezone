export const Header = () => {
  return (
    <section className="headerContainer">
      <a href="/" className="logoContainer">
        <img src="/images/mylogo.png" alt="" />
      </a>
      <h1>Raikun´s Gamezone</h1>
      <div className="socialContainer">
        <a className="discord" href="https://discord.gg/NMErAPK">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="https://www.twitch.tv/raikungaming"><i className="fa-brands fa-twitch"></i></a>
            <a href="https://www.youtube.com/channel/UCi3rd4qmZhIv9eaYzPLzrqg"><i className="fa-brands fa-youtube"></i></a>
        <a href="http://">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </section>
  );
};
