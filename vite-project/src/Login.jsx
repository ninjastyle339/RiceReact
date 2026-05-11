import { useState, useEffect } from "react";
const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const day = date.toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long" });
    return (
        <div>
            <div className="time">
                {hours} : {minutes}
            </div>
            <div className="login-d">
                {day}
            </div>
        </div>
    )
}
const User = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
)
const EyeSlash = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>

)

const Login = () => {
    const [active, setActive] = useState(true);
    const [close, setClose] = useState(false);
    const handleLogin = () => {
        setClose(true);
        setTimeout(() => setActive(false), 500);
    };
    return (
        active && <div className={`login-overlay ${close ? "close" : ""} ${active ? "active" : ""}`}>
            <div className="login-container">
                <div className="login-mini-container">
                    <div className="login-date">
                        <Clock />
                    </div>
                    <div className="sign-up">
                        <div className="sign-up-user">
                            <div className="align-left"><User /></div>
                            <div>Guest</div>
                        </div>
                        <div className="sign-up-password">
                            <div className="align-left"><EyeSlash /></div>
                            <div>********</div>
                        </div>
                        <div className="login-btn"><button onClick={handleLogin}>Login</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;