import { useEffect } from "react";
import "./Components/css/DarkMode.css";


export const DarkMode = () => {
    const handleToggle = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("dark", document.body.className);
    };
    
    useEffect(() => {
        if (localStorage.getItem("dark")) {
            document.body.classList.add("dark");
        }
    }, []);
    
    return (
        <label>
            <input type="checkbox" onClick={handleToggle} />
        <span className="switch">
            <span className="handle"></span>
        </span>
        </label>
    );
    }

export default DarkMode;