import { useState, useEffect } from "react"

function Notepad({ onFocus, zindex, isActive }) {
    const [notepadOpen, setNotepadOpen] = useState(false);
    const [text, setText] = useState("");
    const getInitialSize = () => ({
        w: window.innerWidth * 0.6,
        h: window.innerHeight * 0.6
    });

    const [size, setSize] = useState(getInitialSize);
    const getInitialPos = () => ({
        x: window.innerWidth / 2 - getInitialSize().w / 2,
        y: window.innerHeight / 2 - getInitialSize().h / 2
    });
    const [pos, setPos] = useState(getInitialPos);
    const startDrag = (e) => {

        const startX = e.clientX;
        const startY = e.clientY;
        const oldX = pos.x;
        const oldY = pos.y;
        const move = (e) => {
            setPos({
                x: oldX + (e.clientX - startX),
                y: oldY + (e.clientY - startY)
            });
        };
        const up = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    };
    const startResize = (e) => {

        const startX = e.clientX;
        const startY = e.clientY;

        const oldW = size.w;
        const oldH = size.h;
        const move = (e) => {
            setSize({
                w: Math.max(100, oldW + (e.clientX - startX)),
                h: Math.max(100, oldH + (e.clientY - startY))
            });
        };
        const up = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        }
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    }
    useEffect(() => {
        const handleKey = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === "m" && isActive) {
                setNotepadOpen(prev => !prev);
            }
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isActive]);
    useEffect(() => {
        const saved = localStorage.getItem("notepad");
        if (saved) setText(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem("notepad", text);
    }, [text]);
    return <div>

        <div className={`notepad-overlay ${notepadOpen ? "active" : ""}`} style={{ zIndex: zindex }}>
            <div className={`note-window ${notepadOpen ? "active" : ""}`}
                style={{
                    left: pos.x,
                    top: pos.y,
                    width: size.w,
                    height: size.h,
                    zIndex: zindex
                }}
                onMouseDown={onFocus}
            >
                <div onMouseDown={startDrag} className={`note-title ${notepadOpen ? "active" : ''}`}>Notes</div>
                <textarea
                    className={`notepad ${notepadOpen ? "active" : ""}`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="notes..."
                />
                <div onMouseDown={startResize} className="resize-handle"></div>
            </div>
        </div>

    </div>
}
export default Notepad;