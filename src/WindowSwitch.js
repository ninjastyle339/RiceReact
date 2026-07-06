import { useEffect, useState, useRef } from "react";
const useWindowSwitch = (switchWindow, curr) => {
    const currRef = useRef(0);

    useEffect(() => {
        currRef.current = curr;
    }, [curr]);

    useEffect(() => {
        const check = (e) => {
            if (e.key === ";" && e.ctrlKey) {
                const next = (currRef.current + 1) % 5;
                switchWindow(next);
            }
        };
        window.addEventListener("keydown", check);
        return () => window.removeEventListener("keydown", check);
    }, [switchWindow]);
};

export default useWindowSwitch;