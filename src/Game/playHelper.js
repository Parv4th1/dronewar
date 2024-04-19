const computerShoot = (possibleCompShots, setPossibleCompShots, playerBoardArray, setPlayerBoardArray, compHits, setCompHits, playHits, setPlayHits, winner, setWinner)=>{
    const len = possibleCompShots.length;
    const ind = Math.floor(Math.random()*len);
    const celltoshoot = possibleCompShots[ind];
    const row = Math.floor(celltoshoot/5);
    const col = celltoshoot%5;
    const updatedPlayerBoardArray = [...playerBoardArray];
    if(playerBoardArray[row][col]!==1 && playerBoardArray[row][col]!==2)
    {
        let cellid=`p${row}${col}`;
        document.getElementById(cellid).style.backgroundColor='rgb(96, 95, 95)';
        updatedPlayerBoardArray[row][col] = 5;
    }
    else
    {
        let cellid=`p${row}${col}`;
        document.getElementById(cellid).style.backgroundImage='none';
        document.getElementById(cellid).style.backgroundColor='black';
        setTimeout(()=>{setCompHits(compHits=>compHits+1)},1000);
        console.log('computer made hits',compHits)
    }
    setPlayerBoardArray(updatedPlayerBoardArray);
    let newshots = possibleCompShots;
    newshots.splice(ind,1);
    setPossibleCompShots(newshots)
    console.log(possibleCompShots);
    console.log('shooting cell '+row+col+' index '+ind+'celltoshoot'+celltoshoot);
}
export default computerShoot;
