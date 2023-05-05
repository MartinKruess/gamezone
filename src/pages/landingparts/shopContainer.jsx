import { useEffect, useState } from "react"

export const ShopContainer = () => {

    const [currentArticle, setCurrentArticle] = useState(0)

    const sliderArticles = [
        {
            title: "Gamezone - Gamer4Ever - Schlafrythmus? Nie bessesen! T-Shirt",
            description: "Ein Gamezone-Produkt, ideal für jede Nachteule, die gerne mal ne Nacht durchzockt und stolz darauf ist. Ob vor dem Schlafen gehen morgens um 4 oder nach dem Aufstehen nachmittags um 3, immer der perfekte Look! Entworfen von Raikun. Aus der Gamer4Ever Collection für alle Gamer und Gamer Girls.",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 20.99,
            image: "./images/shirts/schlafrythmus/sleep_shirts.gif",
            url: "https://www.amazon.de/Gamzone-Gamer4Ever-Gamer-Schlafrhythmus-T-Shirt/dp/B09TYYBVG6/ref=sr_1_17?qid=1683147917&refinements=p_4%3ARaikun&s=apparel&sr=1-17",
        },
        {
            title: "Gamezone - Gamer4Ever - Schlafrythmus? Nie bessesen! Sweater",
            description: "Ein Gamezone-Produkt, ideal für jede Nachteule, die gerne mal ne Nacht durchzockt und stolz darauf ist. Ob vor dem Schlafen gehen morgens um 4 oder nach dem Aufstehen nachmittags um 3, immer der perfekte Look! Entworfen von Raikun. Aus der Gamer4Ever Collection für alle Gamer und Gamer Girls.",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 33.99,
            image: "./images/shirts/schlafrythmus/sleep_sweater.gif",
            url: "https://www.amazon.de/Gamzone-Gamer4Ever-Gamer-Schlafrhythmus-Sweatshirt/dp/B09V2P16TS/ref=sr_1_16?qid=1683147917&refinements=p_4%3ARaikun&s=apparel&sr=1-16",
        },
        {
            title: "Gamezone - Gamer4Ever - Level 30 completed! T-Shirt",
            description: "Ein Gamezone-Produkt, ideal zum 30. Ob Solo-Gameplay oder mit deinen Teamkollegen, für alle Gamer und Gamer Girls ab 30 Jahren. Gamer über 30 wissen, was gut ist. Für Gamer geeignet. Gamer4Ever",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 16.45,
            image: "./images/shirts/levelCompleted/Lv30shirt.gif",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-T-Shirt/dp/B09VJQ63JX/ref=sr_1_6?qid=1683235712&refinements=p_4%3ARaikun&s=apparel&sr=1-6",
        },
        {
            title: "Gamezone - Gamer4Ever - Level 30 completed! Hoodie",
            description: "Ein Gamezone-Produkt, ideal zum 30. Ob Solo-Gameplay oder mit deinen Teamkollegen, für alle Gamer und Gamer Girls ab 30 Jahren. Gamer über 30 wissen, was gut ist. Für Gamer geeignet. Gamer4Ever",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 32.99,
            image: "./images/shirts/levelCompleted/Lv30Hoodie.gif",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-Pullover/dp/B09VJFH8S8/ref=sr_1_7?qid=1683235326&refinements=p_4%3ARaikun&s=apparel&sr=1-7&customId=B078RWWH1P&customizationToken=MC_Assembly_1%23B078RWWH1P&th=1",
        },
        {
            title: "Gamezone - Gamer4Ever - Level 30 completed! Sweater",
            description: "Ein Gamezone-Produkt, ideal für jede Nachteule, die gerne mal ne Nacht durchzockt und stolz darauf ist. Ob vor dem Schlafen gehen morgens um 4 oder nach dem Aufstehen nachmittags um 3, immer der perfekte Look! Entworfen von Raikun. Aus der Gamer4Ever Collection für alle Gamer und Gamer Girls.",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 31.45,
            image: "./images/shirts/levelCompleted/Lv30sweater.gif",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-Sweatshirt/dp/B09VLJ58WL/ref=sr_1_5?qid=1683235326&refinements=p_4%3ARaikun&s=apparel&sr=1-5",
        },
        {
            title: "Gamezone - Gamer4Ever - Level 18 completed! T-Shirt",
            description: "Ein Gamezone-Produkt, ideal zum 18. Ob Solo-Gameplay oder mit deinen Teamkollegen, für alle Gamer und Gamer Girls ab 18 Jahren. Gamer über 18 wissen, was gut ist. Für Gamer geeignet. Gamer4Ever",
            pflegehinweis: "Maschinenwäsche: max 49°C Trocknen: Bei niedriger Hitze",
            collection:"Gamer4Ever",
            price: 14.95,
            image: "./images/shirts/levelCompleted/Lv18shirt.gif",
            url: "https://www.amazon.de/Gamzone-Gamer4Ever-Level-completed-T-Shirt/dp/B09V783F7Q/ref=sr_1_15?qid=1683236071&refinements=p_4%3ARaikun&s=apparel&sr=1-15",
        },
    ]

    useEffect(() => {
        console.log("currentImg", currentArticle)
      }, [currentArticle]);

    const previosImg = () => {
        setCurrentArticle(currentArticle === 0 ? sliderArticles.length-1 : currentArticle-1)
    }

    const nextImg = () => {
        setCurrentArticle(currentArticle === sliderArticles.length-1 ? 0 : currentArticle+1)
    }

    return(
        <div className="imgContainer">
            <div className="carousel">
                <i className="fa-solid fa-angle-left" onClick={() => previosImg()}></i>
                <div className="shopPreviewContainer">
                    <h3>{sliderArticles[currentArticle].title}</h3>
                    <div className="shopPreviewCard">
                        <img src={sliderArticles[currentArticle].image} alt="" />
                    </div>
                    <p>{sliderArticles[currentArticle].description}</p>
                    <div className="cardFooter">
                        <p className="price">{sliderArticles[currentArticle].price} €
                        </p>
                        <a href={sliderArticles[currentArticle].url} target="_blank" rel="noopener noreferrer">Zum Artikel
                        </a>
                    </div>
                </div>
                <div className="shopPreviewContainer">
                    <h3>
                        {currentArticle > sliderArticles.length-2
                        ? sliderArticles[0].title
                        : sliderArticles[currentArticle+1].title}
                    </h3>
                    <div className="shopPreviewCard">
                        <img src=
                            {currentArticle > sliderArticles.length-2
                            ? sliderArticles[0].image
                            : sliderArticles[currentArticle+1].image}
                        alt="" />
                    </div>
                    <p>
                        {currentArticle > sliderArticles.length-2
                        ? sliderArticles[0].description
                        : sliderArticles[currentArticle+1].description}
                    </p>
                    <div className="cardFooter">
                        <p className="price">
                            {currentArticle > sliderArticles.length-2
                            ? sliderArticles[0].price
                            : sliderArticles[currentArticle+1].price} €
                        </p>
                        <a href={currentArticle > sliderArticles.length-2
                            ? sliderArticles[0].url
                            : sliderArticles[currentArticle+1].url} target="_blank" rel="noopener noreferrer">Zum Artikel
                        </a>
                    </div>
                </div>
                <div className="shopPreviewContainer">
                    <h3>
                        {currentArticle > sliderArticles.length-3
                        ? sliderArticles[0].title
                        : sliderArticles[currentArticle+2].title}
                    </h3>
                    <div className="shopPreviewCard">
                        <img src=
                            {currentArticle > sliderArticles.length-3
                            ? sliderArticles[0].image
                            : sliderArticles[currentArticle+2].image}
                        alt="" />
                    </div>
                    <p>
                        {currentArticle > sliderArticles.length-3
                        ? sliderArticles[0].description
                        : sliderArticles[currentArticle+2].description}
                    </p>
                    <div className="cardFooter">
                        <p className="price">
                            {currentArticle > sliderArticles.length-3
                            ? sliderArticles[0].price
                            : sliderArticles[currentArticle+2].price} €
                        </p>
                        <a href={currentArticle > sliderArticles.length-3
                            ? sliderArticles[0].url
                            : sliderArticles[currentArticle+2].url} target="_blank" rel="noopener noreferrer">Zum Artikel
                        </a>
                    </div>
                </div>
                <i className="fa-solid fa-angle-right" onClick={() => nextImg()}></i>
            </div>
        </div>
    )
}