export const StreamBG = () => {
    return(
        <section className="streamBGContainer">
            <div className="headContainer">
                <div className="videoLogoContainer">
                    <video src="./images/DragonEye.mp4" autoPlay muted loop></video>
                </div>
                <div className="socialContainer">
                   <img src="./images/youtubeLogo.png" alt="" />
                   <a href="https://www.youtube.com/@RaikunsGamezone" target="_blank" rel="noopener noreferrer">
                    <div className="yt">
                            <i className="fa-solid fa-caret-right"></i>
                    </div>
                   </a>
                   <a href="http://twitch.tv/RaikunGaming" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitch twitch"></i>
                   </a>
                </div>
            </div>
            
            
            <article className="assetContainer">
                <div className="videoBorder">
                    <video src=""></video>
                </div>
                <iframe className="containerRight" src="https://chat.restream.io/embed?token=c3dc5b68-8078-4503-91e0-414ae57cd5dd" frameborder="0">
                </iframe>
            </article>
        </section>
    )
}