import { useEffect, useState } from "react"

export const ShopContainer = () => {

    const [currentArticle, setCurrentArticle] = useState(0)

    const sliderArticles = [
        {
            title: "Gamezone - Gamer4Ever - Level 30 completed for gamers Langarmshirt",
            description: "Ein Gamezone-Produkt, ideal für jeden Gamer. For the 30th the World is Your Map, Conquer It! Ob Solo-Gameplay oder mit deinen Teamkollegen bist du am Anfang. Entworfen von Raikun. Aus der Gamer4Ever Kollektion für alle Gamer und Gamer Girls ab 30 Jahren. Videospiel oder Konsole, Gamer über 30 wissen, was los ist. Für Gamer geeignet. Gamer4Ever",
            material: "Einfarbig: 100% Baumwolle; Heather Grey: 90% Baumwolle, 10% Polyester; alle weiteren Heathers and Neons: 50% Baumwolle, 50% Polyester",
            pflegehinweis: "Maschinenwäsche kalt mit gleichen Farben; bei niedriger Hitze trocknen leichtes, klassisch geschnittenes Tank Top, doppelt genähte Ärmel und Saumabschluss",
            collection:"Gamer4Ever",
            price: 22.99,
            image: "./images/TowerOfFantasy.png",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-Langarmshirt/dp/B09VLJT9GG/ref=sr_1_4?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-4",
        },
        {
            title: "Gamezone – Gamer4Ever – Level 30 abgeschlossen für Gamer Kapuzenjacke",
            description: "Ein Gamezone-Produkt, ideal für jeden Gamer. For the 30th the World is Your Map, Conquer It! Ob Solo-Gameplay oder mit deinen Teamkollegen bist du am Anfang. Entworfen von Raikun. Aus der Gamer4Ever Kollektion für alle Gamer und Gamer Girls ab 30 Jahren. Videospiel oder Konsole, Gamer über 30 wissen, was los ist. Für Gamer geeignet. Gamer4Ever",
            material: "Einfarbig: 100% Baumwolle; Heather Grey: 90% Baumwolle, 10% Polyester; alle weiteren Heathers and Neons: 50% Baumwolle, 50% Polyester",
            pflegehinweis: "Maschinenwäsche kalt mit gleichen Farben; bei niedriger Hitze trocknen leichtes, klassisch geschnittenes Tank Top, doppelt genähte Ärmel und Saumabschluss",
            collection:"Gamer4Ever",
            price: 32.99,
            image: "./images/SonsForest.jpg",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-Level-abgeschlossen-Kapuzenjacke/dp/B0BQW5GC6Z/ref=sr_1_1?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-1",
        },
        {
            title: "Gamezone – Gamer4Ever – Level 30 abgeschlossen für Gamer Sweatshirt",
            description: "Beschreibung5",
            collection:"Gamer4Ever",
            price: 31.45,
            image: "./images/SeaOfThieves.jpg",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-Sweatshirt/dp/B09VLJ58WL/ref=sr_1_5?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-5",
        },
        {
            title: "Gamezone – Gamer4Ever – Level 30 abgeschlossen für Gamer T-Shirt",
            description: "Beschreibung6",
            collection:"Gamer4Ever",
            price: 16.45,
            image: "./images/SeaOfThieves.jpg",
            url: "https://www.amazon.de/Gamezone-Gamer4Ever-completed-gamers-T-Shirt/dp/B09VJQ63JX/ref=sr_1_6?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-6",
        },
        {
            title: "Gamezone - Celest Abyss MMO Zombiedrache für M / W (Unisex) Langarmshirt",
            description: "Fantasie, Celest Abyss, MMO, Drache, Zombiedrache, Gamezone, Gamer, design, Motiv, legendärer Drache, episch, mystisch, Kreatur, magisch",
            collection:"Celest Abyss",
            price: 22.99,
            image: "./images/SeaOfThieves.jpg",
            url: "https://www.amazon.de/Gamezone-Celest-Zombiedrache-Unisex-Langarmshirt/dp/B09K3W2WY9/ref=sr_1_31?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-31",
        },
        {
            title: "Gamzone - Gamer4Ever - Gamer Schlafrhythmus T-Shirt",
            description: "Ein Gamezone Produkt, ideal für jeden Gamer. Ich meine Schlafrhythmus? Du weißt was ich meine ;) Egal ob Solo Gameplay oder mit deinen Teammates, du bist am Start. Designed by Raikun. Es ist ein simple Design, welches nicht nur ein Hobby sondern ein Lebensgefühl ausdrückt. Zur eigenen Sicherheit und der Sicherheit anderer sollte dieses Produkt nur im Notfall getragen werden. In bestimmten Games könnte es als Cheat zählen ;) Gamer4Ever",
            collection:"Gamer4Ever",
            price: 20.99,
            image: "./images/SeaOfThieves.jpg",
            url: "https://www.amazon.de/Gamzone-Gamer4Ever-Gamer-Schlafrhythmus-T-Shirt/dp/B09TYYBVG6/ref=sr_1_17?qid=1680468474&refinements=p_4%3ARaikun&s=apparel&sr=1-17",
        },
        {
            title: "Gamezone - Dragon Shirt im SALE",
            description: "",
            collection:"-",
            price: 15.50,
            image: "./images/SeaOfThieves.jpg",
            url: "https://store.streamelements.com/raikunsgamezone/product/60a46557264487001c7ec158",
        },
        {
            title: "Gamezone - BR ChickenDance Hoodie NoZip im SALE",
            description: "Beschreibung6",
            collection:"-",
            price: 27.90,
            image: "./images/SeaOfThieves.jpg",
            url: "https://store.streamelements.com/raikunsgamezone/product/60a45df1429577001c14acdd",
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
                    <p className="price">{sliderArticles[currentArticle].price} €</p>
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
                    <p className="price">
                        {currentArticle > sliderArticles.length-2
                        ? sliderArticles[0].price
                        : sliderArticles[currentArticle+1].price} €
                    </p>
                </div>
                <div className="shopPreviewContainer">
                    <h3>
                        {currentArticle > sliderArticles.length-3
                        ? sliderArticles[1].title
                        : sliderArticles[currentArticle+2].title}
                    </h3>
                    <div className="shopPreviewCard">
                        <img src=
                            {currentArticle > sliderArticles.length-3
                            ? sliderArticles[1].image
                            : sliderArticles[currentArticle+2].image}
                        alt="" />
                    </div>
                    <p>
                        {currentArticle > sliderArticles.length-3
                        ? sliderArticles[1].description
                        : sliderArticles[currentArticle+2].description}
                    </p>
                    <p className="price">
                        {currentArticle > sliderArticles.length-3
                        ? sliderArticles[1].price
                        : sliderArticles[currentArticle+2].price} €
                    </p>
                </div>
                <i className="fa-solid fa-angle-right" onClick={() => nextImg()}></i>
            </div>
        </div>
    )
}