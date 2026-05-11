import { useState, useEffect, useRef } from "react";
import Window from './Window';
import useWindowSwitch from './WindowSwitch';
import Login from './Login';
import BackgroundSwitcher from './BackgroundSwitcher';
import { Navbar } from './Navbar';
function App() {
  const [curr, setCur] = useState(0);
  const [prev, setPrev] = useState(null);
  const switchWindow = (next) => {
    setPrev(curr);
    setCur(next);
    setTimeout(() => setPrev(null), 400);
  }

  useWindowSwitch(switchWindow, curr);

  return <div>

    <BackgroundSwitcher />
    <Login />
    <Navbar cur={curr} />

    {Array.from({ length: 5 }, (_, i) => (
      <div key={i} className={`page ${i == curr ? "active" : ""} ${i == prev ? "exit" : ""}`}>
        <Window isActive={i == curr} />
      </div>
    ))}
  </div>
}

export default App
