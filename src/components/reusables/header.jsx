export const Header = () => {
  return (
    <section className="headerContainer">
      <a href="/" className="logoContainer">
        <img src="/images/mylogo.png" alt="" />
      </a>
      <div className="socialContainer">
        <a className="discord" href="http://">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="http://">
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a href="http://">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </section>
  );
};
