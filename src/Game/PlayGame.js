//import dronegif from './drone.gif';
const PlayGame = ({droneAvailable, setDroneAvailable, shoot, setShoot, scan, setScan, possibleCompShots, setPossibleCompShots})=>{
    const handleDroneClick = ()=>{
        document.getElementById('gs').style.cursor = 'crosshair';
        setScan('scan');
    }
    const handleShootClick = ()=>{
        setShoot('shoot');
    }
    return(
        <div className="play-options">
            <button id="drone" onClick={handleDroneClick} disabled={droneAvailable==='available'?false:true} >Drone</button>
            <button id="shoot" onClick={handleShootClick}>Shoot</button>
            <div class="colour-meanings">
                <h2>Colour Meanings</h2>
                <ul>
                    <li>
                    <span class="color-box red"></span>
                    <span class="description">Red: Scanned, Tower Detected (NOT Destroyed)</span>
                    </li>
                    <li>
                    <span class="color-box green"></span>
                    <span class="description">Green: Scanned, No Tower</span>
                    </li>
                    <li>
                    <span class="color-box black"></span>
                    <span class="description">Black: Tower Destroyed</span>
                    </li>
                    <li>
                    <span class="color-box gray"></span>
                    <span class="description">Gray: Shot Missed, No Tower</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default PlayGame;