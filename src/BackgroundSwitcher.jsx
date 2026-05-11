import { useState, useEffect } from "react"
let persistedIndex = 0;

const extractColor = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        const thief = new ColorThief();
        const [r, g, b] = thief.getColor(img);
        document.documentElement.style.setProperty("--primary", `rgb(${r}, ${g}, ${b})`);
    };
};
const background_images = ["bedroom.png", "wallhaven-futuristic.jpg", "wallhaven-pixel.png", "wallhaven-space.jpg", "wallhaven-terrain.jpg", "wallhaven-train.jpg"];

function BackgroundSwitcher() {
    const [index, setIndex] = useState(persistedIndex);
    let theme = false;
    if (index == 0 || index == 1 || index == 2) theme = true;
    const [bgchange, setBgchange] = useState(false);
    useEffect(() => {
        //document.body.style.backgroundImage = `url(${background_images[index]})`;
        // document.body.style.backgroundSize = "cover";
        //document.body.style.backgroundPosition = "center";
        document.documentElement.style.setProperty("--bg-image",
            `url(/RiceReact/${background_images[index]})`
        );
        extractColor(background_images[index]);
    }, [index]);
    useEffect(() => {
        background_images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "j" && bgchange) {
                setIndex(prev => (prev - 1 + background_images.length) % background_images.length);
                persistedIndex = (persistedIndex - 1 + background_images.length) % background_images.length;
            }
            if (e.key === "k" && bgchange) {
                setIndex(prev => (prev + 1) % background_images.length);
                persistedIndex = (persistedIndex + 1) % background_images.length;
            }
            if (e.ctrlKey && e.key.toLowerCase() === "b") {
                setBgchange(prev => !prev);
            }

        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [bgchange]);
    const offset = 1;
    const bg_width = () => {
        return window.innerWidth <= 1500 ? window.innerWidth * 0.5 : window.innerWidth * 0.3;
    };

    return (
        <div className={`bsw-bg ${bgchange ? "active1" : ""}`}>
            <div className="bg-images-container" style={{ transform: `translateX(calc(${-(index * 240)}px + ${bg_width() / 2}px - 120px))` }}>
                {background_images.map((image, idx) => {
                    return <div className={`test ${idx == index ? "active" : ""}`} key={idx}>
                        <img src={image} />
                    </div>
                })}
            </div>
        </div>
    )

}
export default BackgroundSwitcher;