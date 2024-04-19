const PlaceTowers = ({placet1,setplacet1,placet2,setplacet2,computerBoardArray,setComputerBoardArray})=>{
    const placeCompTowers = ()=>{
        console.log('placing towers');  
        let t=1;
        let row = Math.floor(Math.random()*5);
        let col = Math.floor(Math.random()*5);
        const updatedComputerBoardArray = [...computerBoardArray];
        updatedComputerBoardArray[row][col] = 1;
        let t1 = [row,col];
        while(t<2)
        {
            row = Math.floor(Math.random()*5);
            col = Math.floor(Math.random()*5);
            if(!(row===t1[0] && col===t1[1]))
            {
                t+=1;
                updatedComputerBoardArray[row][col] = 2;
            }
        }
        setComputerBoardArray(updatedComputerBoardArray);
    }
    const handleT1click = ()=>{
        setplacet1('placing')
    }
    const handleT2click = ()=>{
        placeCompTowers();
        setplacet2('placing')
    }
    return(
        <div className='tower-display'>
            <button id="tower1" 
            onClick={handleT1click}
            disabled={placet1==='placed'?true:false} >Tower1</button>
            <button id="tower2" onClick={handleT2click}
            disabled={placet2==='placed'?true:false}>Tower2</button>
        </div>
    )
}
export default PlaceTowers;