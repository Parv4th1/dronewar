const Welcome = ({ startGame }) => {
    return (
        <div className="welcomeContainer">
            <div className="welcome">
                <h2>Welcome to Drone War</h2>
                <p>...where you and your opponent become rival commanders.</p>
            </div>
            <div className="gameRulesContainer">
                <h3>Objective:</h3>
                <p>Outsmart your opponent and destroy their towers before they destroy yours!</p>

                <h3>Setup:</h3>
                <p>Each player has a 5x5 battlefield with 2 towers to defend.</p>

                <h3>Gameplay:</h3>
                <p>Place your towers on your battlefield before the action begins. </p>
                <p>On your turn you can either shoot or scan.</p>
                <p>Shoot: Take aim at the computer's battlefield, choosing a square to shoot at; if you hit a tower, watch it crumble!</p>
                <p>Scan: Deploy your drone to scout enemy territory and mark towers, but be wary: using the drone consumes a complete turn, and you can only use it once. </p>
                <p>Brace yourself for the computer's retaliation.</p><br/>
                <p>Victory is achieved by destroying all enemy towers to become the ultimate Drone War champion!</p>
                <button id='start' onClick={startGame}>Start Game</button>
            </div>
        </div>
    );
}
export default Welcome;