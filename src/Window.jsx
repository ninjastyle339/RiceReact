import { useState } from "react";

import Notepad from './Notepad';

import Terminal from './Terminal';


const Window = ({ isActive }) => {
    const [zindex, setZindex] = useState(100);
    const [notepadzindex, setNotepadzindex] = useState(100);
    const [terminalzindex, setTerminalzindex] = useState(100);

    const onFocus = (setter) => {
        setZindex(prev => prev + 1);
        setter(zindex);
    }

    return <div>
        <div className="bg-layer"></div>
        <div className="fix-border"></div>
        <Notepad isActive={isActive} onFocus={() => onFocus(setNotepadzindex)} zindex={notepadzindex} />
        <Terminal isActive={isActive} onFocus={() => onFocus(setTerminalzindex)} zindex={terminalzindex} />
    </div>
}
export default Window;