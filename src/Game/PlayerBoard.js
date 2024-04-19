import tower from './tower.png';
const PlayerBoard = ({playerBoardArray,setPlayerBoardArray,placet1,setplacet1,placet2,setplacet2})=>{
    const handleCellClick = (rowIndex, colIndex)=>{
        if(placet1==='placing'&&playerBoardArray[rowIndex][colIndex]!==2)
        {
            const updatedPlayerBoardArray = [...playerBoardArray];
            updatedPlayerBoardArray[rowIndex][colIndex] = 1;
            setPlayerBoardArray(updatedPlayerBoardArray);
            let cellid=`p${rowIndex}${colIndex}`;
            document.getElementById(cellid).style.backgroundImage=`url(${tower})`
            document.getElementById(cellid).style.backgroundSize="cover";
            document.getElementById(cellid).style.backgroundSize="center";
            document.getElementById(cellid).style.backgroundColor="lilac";
            setplacet1('placed');
        }
        else if(placet2==='placing'&&playerBoardArray[rowIndex][colIndex]!==1)
        {
            const updatedPlayerBoardArray = [...playerBoardArray];
            updatedPlayerBoardArray[rowIndex][colIndex] = 2;
            setPlayerBoardArray(updatedPlayerBoardArray);
            let cellid=`p${rowIndex}${colIndex}`;
            document.getElementById(cellid).style.backgroundImage=`url(${tower})`
            document.getElementById(cellid).style.backgroundSize="cover";
            document.getElementById(cellid).style.backgroundSize="center";
            document.getElementById(cellid).style.backgroundColor="lilac";
            setplacet2('placed');
        }
    }
    return(
        <div className="pboard">
            {playerBoardArray.map((row,rowIndex)=>(
                <div className="row" key={rowIndex}>
                    {row.map((cell,colIndex)=>(
                        <div 
                        className="cell" 
                        key={colIndex}
                        id={`p${rowIndex}${colIndex}`}
                        onClick={()=>handleCellClick(rowIndex, colIndex)}>
                        </div>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}
export default PlayerBoard;