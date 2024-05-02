import React from "react";
import './MenuBar.css';
function MenuBar() {
    return (
            <div>
            <ul className="listul">
                <li className="listitems"><a href="">Home</a></li>
                <li className="listitems"><a href="">News</a></li>
                <li className="listitems"><a href="">About</a></li>
                <li className="listitems"><a href="">Contact</a></li>
            </ul>
        </div>
    )
}
export default MenuBar;