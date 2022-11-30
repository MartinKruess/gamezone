export const Header = () => {
  return (
    <section className="headerContainer">
      <a href="/" className="logoContainer">
        <img src="/images/mylogo.png" alt="" />
      </a>
      <h1>Raikun´s Gamezone</h1>
      <div className="socialContainer">
        <a className="discord" href="http://">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href=""><i className="fa-brands fa-twitch"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
        <a href="http://">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </section>
  );
};
