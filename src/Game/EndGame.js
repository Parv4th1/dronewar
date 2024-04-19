const EndGame = ({compHits,playHits})=>{
    document.getElementById('shoot').disabled = 'true';
    const findWinner = ()=> {
        if(playHits===2)
        
            return 'PLAYER';
        else if(compHits===2)
            return 'COMPUTER';
    }
    const winn = findWinner();
    return(

      <div className="endgame">
        <p id="gameover">GAME OVER</p>
        <p id="winnerdeclaration">{winn} WINS!</p>
      </div>
    )
}
export default EndGame;