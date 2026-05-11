import { useState, useEffect } from "react";


const Search = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
}
const Cpu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
)
const Ram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12v-2" /><path d="M12 18v-2" />
        <path d="M16 12v-2" /><path d="M16 18v-2" />
        <path d="M2 11h1.5" /><path d="M20 18v-2" />
        <path d="M20.5 11H22" /><path d="M4 18v-2" />
        <path d="M8 12v-2" /><path d="M8 18v-2" />
        <rect x="2" y="6" width="20" height="10" rx="2" />
    </svg>
)
const VolumeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>
)
const Wifi = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
)
const Battery = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
    </svg>

)
const Bell = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>

}
const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const fmt = (n) => String(n).padStart(2, "0");

    const hours = fmt(time.getHours());
    const min = fmt(time.getMinutes());
    const secs = fmt(time.getSeconds());
    const day = time.toLocaleDateString("en-US", { weekday: "short" });
    const date = time.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return (
        <div className="clock">
            <span className="clock-time">{hours}:{min}</span>
            <span className="clock-date">{day} {date}</span>
        </div>
    )
}
const Volume = () => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [V, setV] = useState(0);
    const toggle = () => {
        if (!open) {
            setVisible(true);
            setTimeout(() => setOpen(true), 5);
        }
        else {
            setOpen(false);
            setTimeout(() => setVisible(false), 300);
        }
    }
    return (
        <div className="volume-widget">
            <div className="vol-btn" onClick={toggle}>
                <VolumeIcon />
            </div>
            {visible &&
                <div className={`vol-dropdown ${open ? "active" : ""}`}>
                    <input type="range" min="0" max="100" value={V} onChange={(e) => setV(e.target.value)} orient="vertical" />
                </div>
            }
        </div>
    )
}

const Navbar = ({ cur }) => {
    return <div className="navbar">
        <div className="navbar-items">
            <div className="nav-left">
                <div className="logo">△</div>
                <div className="windows">
                    <div className={`tskb ${cur == 0 ? "active" : ""}`}>1</div>
                    <div className={`tskb ${cur == 1 ? "active" : ""}`}>2</div>
                    <div className={`tskb ${cur == 2 ? "active" : ""}`}>3</div>
                    <div className={`tskb ${cur == 3 ? "active" : ""}`}>4</div>
                    <div className={`tskb ${cur == 4 ? "active" : ""}`}>5</div>
                </div>
            </div>
            <div className="nav-center">
                <div className="nav-title">
                    <span className="t1">~/</span>
                    <span className="t2">nvim</span>
                    <span className="dot">·</span>
                    <span className="cmtjsx">RiceNavbar.jsx</span>
                    <span className="pbar"></span>
                </div>
            </div>
            <div className="nav-right">
                <div className="search-bar"><div className="al"><Search /></div></div>
                <div className="pc-specs">
                    <div className="cpu">
                        <Cpu />
                        <div>12%</div>
                    </div>
                    <div className="ram">
                        <Ram />
                        <div>4.2Gb</div>
                    </div>
                </div>
                <div className="os-spec">
                    <div className="volume"><div className="v1"><Volume /></div></div>
                    <div className="wifi"> <div className="w1"><Wifi /></div></div>
                    <div className="battery"><div className="b1"><Battery /></div></div>
                </div>
                <div className="bell"><div className="v1"><Bell /></div></div>
                <div className="date">
                    <Clock />
                </div>
                <div className="power-btn"></div>
            </div>


        </div>
    </div>

}
export { Navbar, Clock };