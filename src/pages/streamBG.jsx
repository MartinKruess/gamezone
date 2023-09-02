export const StreamBG = () => {
    return(
        <section className="streamBGContainer">
            <div className="headContainer">
                <div className="videoLogoContainer">
                    <video src="./images/DragonEye.mp4" autoPlay muted loop></video>
                </div>
                <div className="breakHeader">
                    KURZE PAUSE
                </div>
                <div className="socialContainer">
                   <img src="./images/youtubeLogo.png" alt="" />
                   <a href="https://www.youtube.com/@RaikunsGamezone" target="_blank" rel="noopener noreferrer">
                    <div className="yt">
                        <i className="fa-solid fa-caret-right"><span> Abo</span></i>
                    </div>
                   </a>
                   <a href="http://twitch.tv/RaikunGaming" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitch twitch"><span>Follow</span></i>
                   </a>
                   <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-amazon"> <span> Merch</span></i>
                   </a>
                </div>
            </div>
            
            
            <article className="assetContainer">
                <iframe className="chatContainer" src="https://chat.restream.io/embed?token=c3dc5b68-8078-4503-91e0-414ae57cd5dd" frameBorder="0">
                </iframe>
                <div className="leftContainer">
                    <div className="videoContainer">
                        <video src=""></video>
                    </div>
                    <div className="bottomContainer">
                        <img className="werbung" src="./images/shirts/levelCompleted/Lv18shirt.gif" alt="" />
                        <div>
                            <p className="command">
                            !merch
                            </p>
                            <p className="textContent">
                                Alle Infos zu den aktuellen Streamzeiten, merch und anderen Informationen findest du auf meiner Webseite.
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </article>
        </section>
    )
}