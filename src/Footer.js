import { useState } from "react";
const Footer = ({gameState})=>{
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const handleMouseClick = () => {
        setIsAboutOpen(!isAboutOpen);
      };
    return(
        <div className="footer">
            <p>April 2024 |
                Parvathi Annamalai | 
                <a href="https://parv4th1.github.io/" target="_blank" rel="noreferrer">Portfolio</a> | 
                <a href="https://github.com/Parv4th1/" target="_blank" rel="noreferrer">Github</a> 
                {gameState==='play' && <button onClick={handleMouseClick}>Icon Credits</button> }
            </p>
            {
                isAboutOpen && (
                <div id="about">
                    <p><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/RQ-hZLn_7H6v/tower">Tower</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a> | <a href="https://www.flaticon.com/free-animated-icons/quadcopter" target="_blank" rel="noreferrer" title="quadcopter animated icons">
                        Quadcopter animated icons created by Freepik - Flaticon</a> | <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-animated-icons/explosion" title="explosion animated icons">Explosion animated icons created by Freepik - Flaticon</a> | <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-animated-icons/target" title="target animated icons">Target animated icons created by Freepik - Flaticon</a></p>
                </div>)
            }
        </div>
    )
}
export default Footer;