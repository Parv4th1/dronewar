import dronegif from './drone.gif';
import targetgif from './target.gif';
import explodegif from './explosion.gif';
import computerShoot from './playHelper.js';
const ComputerBoard = ({computerBoardArray, setComputerBoardArray, droneAvailable, setDroneAvailable, shoot, setShoot, scan, setScan, possibleCompShots, setPossibleCompShots, playerBoarArray, setPlayerBoardArray, compHits, setCompHits, playHits, setPlayHits, winner, setWinner})=> {
    const handleCellClick = (rowIndex,colIndex)=>{
        if(scan==='scan')
        {
            console.log('handling drone click at '+rowIndex+colIndex);
            const cellsToMark = [];
            for(let i=-1; i<=1; i++)
            {
                for(let j=-1; j<=1; j++)
                {
                    const newRow = rowIndex+i;
                    const newCol = colIndex+j;
                    if(newRow>=0 && newRow<5 && newCol>=0 && newCol<5)
                    {
                        const cellValue = computerBoardArray[newRow][newCol];
                        cellsToMark.push({row:newRow, col:newCol, color: (cellValue!==1 && cellValue!==2)?'green':'red'});
                    }
                }
            }
            const updatedComputerBoardArray = [...computerBoardArray];
            const droneCellId = `c${rowIndex}${colIndex}`;
            document.getElementById(droneCellId).style.backgroundImage = `url(${dronegif})`;
            document.getElementById(droneCellId).style.backgroundSize = "cover";
            document.getElementById(droneCellId).style.backgroundSize="center";
            setTimeout(()=>{cellsToMark.forEach(({row,col,color})=>{
                let cellid = `c${row}${col}`;
                if(color==='green')
                    updatedComputerBoardArray[row][col] = 4;
                document.getElementById(cellid).style.backgroundColor = color;
                document.getElementById(cellid).style.backgroundImage = 'none';
            })},2000);
            setComputerBoardArray(updatedComputerBoardArray);
            setDroneAvailable('notavailable');
            document.getElementById('gs').style.cursor = 'default';
            setScan('notScan');
            setTimeout(()=>{computerShoot(possibleCompShots,setPossibleCompShots, playerBoarArray, setPlayerBoardArray, compHits, setCompHits, playHits, setPlayHits, winner, setWinner)},2500)
            
        }
        if(shoot==='shoot' && computerBoardArray[rowIndex][colIndex]!==5 && computerBoardArray[rowIndex][colIndex]!==3)
        {
            const updatedComputerBoardArray = [...computerBoardArray];

            if(computerBoardArray[rowIndex][colIndex]!==1 && computerBoardArray[rowIndex][colIndex]!==2)
            {
                let cellid = `c${rowIndex}${colIndex}`;
                updatedComputerBoardArray[rowIndex][colIndex] = 5;
                document.getElementById(cellid).style.backgroundImage = `url(${targetgif})`;
                document.getElementById(cellid).style.backgroundSize = "cover";
                document.getElementById(cellid).style.backgroundSize="center";
                setTimeout(()=>{
                    document.getElementById(cellid).style.backgroundImage='none';
                    document.getElementById(cellid).style.backgroundColor='rgb(96, 95, 95)';},1500);
            }
            else
            {
                let cellid = `c${rowIndex}${colIndex}`;
                document.getElementById(cellid).style.backgroundColor='black';
                document.getElementById(cellid).style.backgroundImage = `url(${explodegif})`;
                document.getElementById(cellid).style.backgroundSize = "cover";
                document.getElementById(cellid).style.backgroundSize="center";
                setTimeout(()=>{
                    document.getElementById(cellid).style.backgroundImage ='none';
                    document.getElementById(cellid).style.backgroundColor='black';
                    },2000);
                updatedComputerBoardArray[rowIndex][colIndex] = 3;
                console.log('destroyed a tower');
                setTimeout(()=>setPlayHits(playHits+1),2500);
            }
            setTimeout(()=>{computerShoot(possibleCompShots,setPossibleCompShots, playerBoarArray, setPlayerBoardArray, compHits, setCompHits, playHits, setPlayHits, winner, setWinner)},2000);
            setShoot('notshoot');
        }
    }
    return(
        <div className="cboard">
            {
                computerBoardArray.map((row,rowIndex)=>(
                    <div className="row" key={rowIndex}>
                         {
                            row.map((cell,colIndex)=>(
                                <div className="cell" 
                                id={`c${rowIndex}${colIndex}`}
                                key={colIndex}
                                onClick={()=>handleCellClick(rowIndex,colIndex)}>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default ComputerBoard;