import { useState } from 'react';
import PlayerBoard from './PlayerBoard';
import PlayGame from './PlayGame';
import PlaceTowers from './PlaceTowers';
import ComputerBoard from './ComputerBoard';
import EndGame from './EndGame';
const GameScreen = ()=>{
  const [playerBoardArray, setPlayerBoardArray] = useState(
    [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]]
  )
  const [computerBoardArray, setComputerBoardArray] = useState(
    [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]]
  )
  const [possibleCompShots, setPossibleCompShots] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])
  const [placet1,setplacet1] = useState('notplaced');
  const [placet2,setplacet2] = useState('notplaced');
  const [droneAvailable, setDroneAvailable] = useState('available');
  const [shoot, setShoot] = useState('notshoot')
  const [scan, setScan] = useState('notscan');
  const [compHits, setCompHits] = useState(0);
  const [playHits, setPlayHits] = useState(0);
  const [winner, setWinner] = useState('');
  return(
    <div className='gameScreen' id='gs'>
      <div className='options'>
        {(placet1==='placed'&&placet2==='placed')?
        <PlayGame
        droneAvailable={droneAvailable}
        setDroneAvailable={setDroneAvailable}
        shoot={shoot}
        setShoot={setShoot}
        scan={scan}
        setScan={setScan}
        possibleCompShots={possibleCompShots}
        setPossibleCompShots={setPossibleCompShots} />:
        <PlaceTowers
        placet1={placet1}
        setplacet1={setplacet1}
        placet2={placet2}
        setplacet2={setplacet2}
        computerBoardArray={computerBoardArray}
        setComputerBoardArray={setComputerBoardArray} />}
      </div>
      <div className='player'>
        <h2>Player</h2>
        <PlayerBoard 
        playerBoardArray={playerBoardArray}
        setPlayerBoardArray={setPlayerBoardArray}
        placet1={placet1}
        setplacet1={setplacet1}
        placet2={placet2}
        setplacet2={setplacet2} />
        {((!(placet1==='placed' && placet2==='placed'))&&<p className='instructions' style={{marginTop:'15px'}}>Build your defenses! Choose a tower, then click a square on your board to place it.</p>)}
        {(placet1==='placed' && placet2==='placed' &&<p className='instructions'>The evil computer shoots here, trying to destroy your towers.
        Fight back! Click on the drone (to scan) or shoot (to shoot) and then on the square on the computer's board that you want to target.
        Drone scans the selected square and the squares around it.</p>)}
      </div>
      <div className='computer'>
        <h2>Computer</h2>
        <ComputerBoard
        computerBoardArray={computerBoardArray}
        setComputerBoardArray={setComputerBoardArray}
        droneAvailable={droneAvailable}
        setDroneAvailable={setDroneAvailable}
        shoot={shoot}
        setShoot={setShoot}
        scan={scan}
        setScan={setScan}
        possibleCompShots={possibleCompShots}
        setPossibleCompShots={setPossibleCompShots}
        playerBoarArray={playerBoardArray}
        setPlayerBoardArray={setPlayerBoardArray}
        compHits={compHits}
        setCompHits={setCompHits}
        playHits={playHits}
        setPlayHits={setPlayHits}
        winner={winner}
        setWinner={setWinner} />
        {(placet1==='placed' && placet2==='placed' && <p className='instructions'>You shoot and scan here, to find and destroy the computer's towers. The computer plays when you play. </p>)}
      </div>
      {(compHits===2 || playHits===2)?
      <EndGame
       compHits={compHits}
       playHits={playHits} />:null}
    </div>
  )
}
export default GameScreen;