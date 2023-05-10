import { useEffect, useState } from "react"

export const IMGContainer = () => {

    const [currentImg, setCurrentImg] = useState(0)

    const sliderImages = [
        {
            url: "./images/rl.jpg",
        },
        {
            url: "./images/realm.jpg",
        },
        {
            url: "./images/TowerOfFantasy.jpg",
        },
        {
            url: "./images/SonsForest.jpg",
        },
        {
            url: "./images/SeaOfThieves.jpg",
        },
    ]

    useEffect(() => {
        console.log("currentImg", currentImg)
      }, [currentImg]);

    const previosImg = () => {
        setCurrentImg(currentImg === 0 ? sliderImages.length-1 : currentImg-1)
    }

    const nextImg = () => {
        setCurrentImg(currentImg === sliderImages.length-1 ? 0 : currentImg+1)
    }

    return(
        <div className="imgContainer">
            <div className="carousel">
                <i className="fa-solid fa-angle-left" onClick={() => previosImg()}></i>
                <div>
                    <img src={sliderImages[currentImg].url} alt="" />
                </div>
                <div>
                    <img src={currentImg > sliderImages.length-2 ? sliderImages[0].url : sliderImages[currentImg+1].url} alt="" />
                </div>
                <i className="fa-solid fa-angle-right" onClick={() => nextImg()}></i>
            </div>
        </div>
    )
}