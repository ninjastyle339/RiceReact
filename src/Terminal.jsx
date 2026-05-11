import { useState, useRef, useEffect } from "react";
const Terminal = ({ onFocus, zindex, isActive }) => {
    const [val, setVal] = useState("");
    const [cursorpos, setCursorpos] = useState({ x: 10 });
    const [cursoractive, setCursoractive] = useState(true);
    const inputRef = useRef(null);
    const centerx = window.innerWidth / 2;
    const centery = window.innerHeight / 2;
    const ypos = window.innerHeight * 0.4;
    const [pos, setPos] = useState({ x: centerx - centerx / 2, y: centery - ypos });
    const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    const [size, setSize] = useState({ width: window.innerWidth * 0.5, height: window.innerHeight * 0.4 });
    const drag = (e) => {
        /*old pos + delta */
        const oldX = pos.x;
        const oldY = pos.y;
        const startX = e.clientX;
        const startY = e.clientY;
        const move = (e) => {
            setPos({ x: oldX + e.clientX - startX, y: oldY + e.clientY - startY });
        };
        const up = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        }
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    };
    const resize = (e) => {
        const oldW = size.width;
        const oldH = size.height;
        const startX = e.clientX;
        const startY = e.clientY;

        const move = (e) => {
            const newWidth = Math.max(600, oldW + (e.clientX - startX));
            const newHeight = Math.max(500, oldH + (e.clientY - startY));
            setSize({ width: newWidth, height: newHeight });
        }
        const up = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        }
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    }
    const change = (e) => {
        setVal(e.target.value);
        const n = e.target.value.length * 8;
        setCursorpos({ x: n + 9 });
    }
    const art = `        ,   ."".   ,
      , #   |()|   # ,
     _#_#___|__|___#_#__
    [__________________]
     |-_ -=__=-_ -==_-|
     |_.------------.=|
     |=| o        o |=|
    _|-| !    (!    | -| _
   /==_| ! _(_.)_ ! |=_-\\
   |jgs| /^\\^=^^=^/ ^\\| _=|
    `
    const specs = {
        OS: "Linux Lrp x86_64",
        Kernel: "5.10.16-arch1-1",
        Uptime: "Unknown",
        Packages: "999",
        Shell: "bash 5.1.4",
        Users: "Guest",
        CPU: "i10-99th gen",
        GPU: "RTX 6070 NVIDIA 12GB GDRR6X Extreme Clock: 2520 MHz 192-Bit HDMI/DP"

    }
    const [open, Setopen] = useState(false);
    const [frame, setFrame] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(prev => (prev + 1) % spinner.length);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const handle = (e) => {
            if (e.altKey && e.key.toLowerCase() === "t" && isActive) {
                Setopen(prev => !prev);
            }
        }
        window.addEventListener("keydown", handle);
        return () => window.removeEventListener("keydown", handle);
    }, [isActive]);
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
        else inputRef.current?.blur();
    }, [open]);
    const [loader, setLoader] = useState(false);
    const [history, setHistory] = useState([]);

    const bottomRef = useRef(null);
    const handleCommand = (e) => {
        if (e.key === "Enter") {
            let command = "";
            for (let i = 0; i < val.length; i++) {
                if (val[i] === " ") command = "";
                else command += val[i];
                if (command === "--load") {
                    setLoader(prev => !prev);
                }
                if (command === "clear") {
                    setHistory([]);
                    setLoader(false);
                    setVal("");
                    setCursorpos({ x: 8 });
                    return;
                }
            }
            setHistory(prev => [...prev, ">" + val]);
            setVal("");
            setCursorpos({ x: 8 });
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
        }
    }

    return (

        <div className={`terminal ${open ? "active" : ""}`}
            style={{ left: pos.x, top: pos.y, zIndex: zindex, width: size.width, height: size.height }}
            onMouseDown={onFocus}
            onClick={() => inputRef.current?.focus()}

        >
            <div className="title" onMouseDown={(e) => {
                drag(e);
            }}>
                <h1>Terminal</h1>
                <div>________</div>
            </div>
            <div className="specs">
                <div className="ascii-art">
                    <pre>{art}</pre>
                </div>
                <div className="pc-spec">
                    {Object.entries(specs).map(([key, value]) => (
                        <div className="spec-row" key={key}>
                            <span className="spec-key">{key}: </span>
                            <span className="spec-val">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text">
                <div className="cmd-history">
                    {history.map((e, i) => (
                        <div className="cmd-history-e" key={i}> {e} </div>
                    ))}
                    {loader && <pre className="ascii-animation">{spinner[frame]}</pre>}

                </div>
                <div ref={bottomRef} className="input-row">
                    <span className="user-trm"> &gt; </span>
                    <input ref={inputRef} className="cmds" type="text" value={val} onKeyDown={handleCommand}
                        onChange={change}
                        onFocus={() => {

                            setCursoractive(true);
                        }}
                        onBlur={() => {

                            setCursoractive(false)
                        }} />
                    {cursoractive && <div className="cursor-blink" style={{ left: `${cursorpos.x}px` }}>
                    </div>}
                </div>
            </div>
            <div onMouseDown={resize} className="term-resize-btn"></div>
        </div>

    )

}
export default Terminal;