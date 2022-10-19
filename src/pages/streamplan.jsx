import { Freeday } from "../components/reusables/freeday"

export const Streamplan = () => {

return (
    <section className="streamplanContainer">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vel omnis, est maiores, ex dicta explicabo veritatis, ullam quo fugiat molestias quam libero ipsam architecto molestiae accusamus cupiditate eveniet. Praesentium cumque a quo aut dolores nihil odit, numquam debitis beatae est ex, quidem in pariatur tempora distinctio aperiam quam alias veniam nulla officiis hic quibusdam. Possimus ea deserunt laudantium maiores mollitia sunt fugit voluptatum, veritatis asperiores corrupti unde odit rerum dolorem necessitatibus, maxime nisi expedita amet ipsa animi aliquam autem. Voluptas pariatur porro nam vitae error, dignissimos et exercitationem repellat repellendus quidem corporis illum, distinctio voluptatem autem quae architecto voluptates!</p>
        <h2>Streamplan</h2>
        <article className="planContainer">
            <div className="planCard">
                <div className="day">Montag</div>
                <Freeday />
            </div>
            
            <div className="planCard">
                <div className="day">Dienstag</div>
                <div className="video">
                    <video
                        autoPlay={true} muted={false} loop={true}
                        src="../../public/vorschau/RL_vorschau.mp4"
                    >
                    </video>
                </div>
            </div>
            <div className="planCard">
                <div className="day">Mittwoch</div>
                <Freeday />
            </div>
        
            <div className="planCard">
                <div className="day">Donnerstag</div>
                <div className="video">
                    <video
                        autoPlay={true} muted={false} loop={true}
                        src="../../public/vorschau/RL_vorschau.mp4"
                    >
                    </video>
                </div>
            </div>
           
            <div className="planCard">
                <div className="day">Freitag</div>
                <div className="video">
                    <video
                        autoPlay={true} muted={false} loop={true}
                        src="../../public/vorschau/RL_vorschau.mp4"
                    >
                    </video>
                </div>
            </div>
            <div className="planCard">
                <div className="day">Samstag</div>
                <div className="video">
                    <video
                        autoPlay={true} muted={false} loop={true}
                        src="../../public/vorschau/RL_vorschau.mp4"
                    >
                    </video>
                </div>
            </div>
            <div className="planCard">
                <div className="day">Sonntag</div>
                <div className="video">
                    <video
                        autoPlay={true} muted={false} loop={true}
                        src="../../public/vorschau/RL_vorschau.mp4"
                    >
                    </video>
                </div>
            </div>
        </article>        
    </section>
)
}