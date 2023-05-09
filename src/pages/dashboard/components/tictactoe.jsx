import '../styles/tictactoe.css'
import React, {useState} from 'react';

function TicTacToe () {
            let [text, setText] = useState("");
            let [text2, setText2] = useState("");
            let [text3, setText3] = useState("");
            let [text4, setText4] = useState("");
            let [text5, setText5] = useState("");
            let [text6, setText6] = useState("");
            let [text7, setText7] = useState("");
            let [text8, setText8] = useState("");
            let [text9, setText9] = useState("");
            const [result, setResult] = useState("");

    let [currentPlayer, setCurrentPlayer] = useState('X');
    function updateOne(){
        if (text === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText(currentPlayer);
            console.log(text)
        }tie();
        checkWin();
        
    }
    function updateTwo(){
        if (text2 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text2 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText2(currentPlayer);
            console.log(text2)
        }tie();
      checkWin();
      
    }
    function updateThree(){
        if (text3 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text3 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText3(currentPlayer);
            console.log(text3)
        }tie();
checkWin();

    }
    function updateFour(){
        if (text4 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text4 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText4(currentPlayer);
            console.log(text4)
        }tie();
checkWin();

    }
function updateFive(){
        if (text5 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text5 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText5(currentPlayer);
            console.log(text5)
        }tie();
checkWin();

    }
    function updateSix(){
        if (text6 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text6 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText6(currentPlayer);
            console.log(text6)
        }tie();
checkWin();

    }
    function updateSeven(){
        if (text7 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text7 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText7(currentPlayer);
            console.log(text7)
        }tie();
checkWin();

    }
    function updateEight(){
        if (text8 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text8 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText8(currentPlayer);
            console.log(text8)
        }tie();
checkWin();

    }
    function updateNine(){
        if (text9 === "") {
            currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X') ;
            text9 =  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
            setText9(currentPlayer);
            console.log(text9)
        }tie();
        checkWin();
        
    }
    function restart (){
       window.location.reload();
    }
    function checkWin(){
        if (text === currentPlayer && text === text2 && text2 === text3){
            setResult("Congratulations "+ currentPlayer +" wins");
            document.getElementById('three',).style.color = 'white'
            document.getElementById('three').style.backgroundColor = 'black';
            document.getElementById('three').style.border= '6px solid green'
            document.getElementById('one',).style.color = 'white'
            document.getElementById('one').style.backgroundColor = 'black';
            document.getElementById('one').style.border= '6px solid green'
            document.getElementById('two',).style.color = 'white'
            document.getElementById('two').style.backgroundColor = 'black';
            document.getElementById('two').style.border= '6px solid green'
            setTimeout(() => {
                if(text4 !== 'X'&& text4 !== 'O'){            
                setText4 (" ")
            }
                if(text5 !== 'X'&& text5 !== 'O'){
                    setText5(" ")
                }
                if(text6 !== 'X'&& text6 !== 'O'){
                    setText6(" ")
                }
                if(text7 !== 'X'&& text7 !== 'O'){
                    setText7(" ")
                }
                if(text8 !== 'X'&&text8 !== 'O'){
                    setText8(" ")
                }
                if(text9 !== 'X'&& text9 !== 'O'){
                    setText9(" ");
                }
            }, 0);
          }

          if (text4 === currentPlayer && text4 === text5 && text5 === text6) {
            document.getElementById('four',).style.color = 'white'
            document.getElementById('four').style.backgroundColor = 'black';
            document.getElementById('four').style.border= '6px solid green'
            document.getElementById('five',).style.color = 'white'
            document.getElementById('five').style.backgroundColor = 'black';
            document.getElementById('five').style.border= '6px solid green'
            document.getElementById('six',).style.color = 'white'
            document.getElementById('six').style.backgroundColor = 'black';
            document.getElementById('six').style.border= '6px solid green'
    
            setResult("Congratulations! "+ currentPlayer+" wins!");
            setTimeout(() => {
                if(text !== 'X'&& text !== 'O'){            
                setText(" ")}
                if(text2 !== 'X'&& text2 !== 'O'){
                    setText2(" ")
                }
                if(text3 !== 'X'&& text3 !== 'O'){
                    setText3(" ")
                }
                if(text7 !== 'X'&& text7 !== 'O'){
                    setText7(" ")
                }
                if(text8 !== 'X'&&text8 !== 'O'){
                    setText8(" ")
                }
                if(text9 !== 'X'&& text9 !== 'O'){
                    setText9(" ")
                }
            }, 0);
          }
          if (text === currentPlayer && text === text4 && text4 === text7) {
            document.getElementById('one',).style.color = 'white';
            document.getElementById('one').style.backgroundColor = 'black';
            document.getElementById('one').style.border= '6px solid green';
            document.getElementById('four',).style.color = 'white';
            document.getElementById('four').style.backgroundColor = 'black';
            document.getElementById('four').style.border= '6px solid green'
            document.getElementById('seven',).style.color = 'white';
            document.getElementById('seven').style.backgroundColor = 'black';
            document.getElementById('seven').style.border= '6px solid green';
    
            setResult("Congratulations! "+  currentPlayer+" wins!");
            setTimeout(() => {
                if(text2 !== 'X'&& text2 !== 'O'){
                    setText2(" ")
                }
                if(text3 !== 'X'&& text3 !== 'O'){
                    setText3(" ")
                }
                if(text5 !== 'X'&& text5 !== 'O'){
                    setText5(" ")
                }
                if(text6 !== 'X'&& text6 !== 'O'){
                    setText6(" ")
                }
                if(text8 !== 'X'&&text8 !== 'O'){
                    setText8(" ")
                }
                if(text9 !== 'X'&& text9 !== 'O'){
                    setText9(" ");
                }
            }, 0);
        }
    if (text === currentPlayer && text === text5 && text5 === text9) {
        document.getElementById('one',).style.color = 'white'
        document.getElementById('one').style.backgroundColor = 'black';
        document.getElementById('one').style.border= '6px solid green'
        document.getElementById('five',).style.color = 'white'
        document.getElementById('five').style.backgroundColor = 'black';
        document.getElementById('five').style.border= '6px solid green'
        document.getElementById('nine',).style.color = 'white'
        document.getElementById('nine').style.backgroundColor = 'black';
        document.getElementById('nine').style.border= '6px solid green'
        setResult("Congratulations "+ currentPlayer +" wins");
        setTimeout(() => {
                if(text2 !== 'X'&& text2 !== 'O'){
                    setText2(" ")
                }
                if(text3 !== 'X'&& text3 !== 'O'){
                    setText3(" ")
                }
                if(text4 !== 'X'&& text4 !== 'O'){            
                setText4(" ")
            }
                if(text6 !== 'X'&& text6 !== 'O'){
                    setText6(" ")
                }
                if(text7 !== 'X'&& text7 !== 'O'){
                    setText7(" ")
                }
                if(text8 !== 'X'&&text8 !== 'O'){
                    setText8(" ")
                }
        }, 0);
      
    }
    if (text7 === currentPlayer && text7 === text8 && text8 === text9) {
        document.getElementById('seven',).style.color = 'white'
        document.getElementById('seven').style.backgroundColor = 'black';
        document.getElementById('seven').style.border= '6px solid green'
        document.getElementById('eight',).style.color = 'white'
        document.getElementById('eight').style.backgroundColor = 'black';
        document.getElementById('eight').style.border= '6px solid green'
        document.getElementById('nine',).style.color = 'white'
        document.getElementById('nine').style.backgroundColor = 'black';
        document.getElementById('nine').style.border= '6px solid green'
        setResult("Congratulations! "+ currentPlayer+" wins!");
        setTimeout(() => {
            if(text !== 'X'&& text !== 'O'){            
                setText(" ")
            }
            if(text2 !== 'X'&& text2 !== 'O'){
                setText2(" ")
            }
            if(text3 !== 'X'&& text3 !== 'O'){
                setText3(" ")
            }
            if(text4 !== 'X'&& text4 !== 'O'){            
                setText4 (" ")
            }
                if(text5 !== 'X'&& text5 !== 'O'){
                    setText5(" ")
                }
                if(text6 !== 'X'&& text6 !== 'O'){
                    setText6(" ")
                }
        }, 0);
    }
    if (text2 === currentPlayer && text2 === text5 && text5 === text8) {
        document.getElementById('two',).style.color = 'white'
        document.getElementById('two').style.backgroundColor = 'black';
        document.getElementById('two').style.border= '6px solid green'
        document.getElementById('five',).style.color = 'white'
        document.getElementById('five').style.backgroundColor = 'black';
        document.getElementById('five').style.border= '6px solid green'
        document.getElementById('eight',).style.color = 'white'
        document.getElementById('eight').style.backgroundColor = 'black';
        document.getElementById('eight').style.border= '6px solid green'
        setResult("Congratulations! "+ currentPlayer+" wins!");
        setTimeout(() => {
            if(text !== 'X'&& text !== 'O'){            
                setText(" ")}
            if(text3 !== 'X'&& text3 !== 'O'){
                    setText3(" ")
                }
                if(text4 !== 'X'&& text4 !== 'O'){            
                    setText4 (" ")
                }
                if(text6 !== 'X'&& text6 !== 'O'){
                    setText6(" ")
                }
            if(text7 !== 'X'&& text7 !== 'O'){
                setText7(" ")
            }
            if(text9 !== 'X'&& text9 !== 'O'){
                setText9(" ")
            }
        }, 0);
      
    }
    if (text3 === currentPlayer && text3 === text6 && text6 === text9) {
        document.getElementById('three',).style.color = 'white'
        document.getElementById('three').style.backgroundColor = 'black';
        document.getElementById('three').style.border= '6px solid green'
        document.getElementById('nine',).style.color = 'white'
        document.getElementById('nine').style.backgroundColor = 'black';
        document.getElementById('nine').style.border= '6px solid green'
        document.getElementById('six',).style.color = 'white'
        document.getElementById('six').style.backgroundColor = 'black';
        document.getElementById('six').style.border= '6px solid green'
       
        setResult("Congratulations "+ currentPlayer +" wins");
        setTimeout(() => {
            if(text !== 'X'&& text !== 'O'){            
                setText(" ")}
                if(text2 !== 'X'&& text2 !== 'O'){
                    setText2(" ")
                }
                if(text4 !== 'X'&& text4 !== 'O'){            
                    setText4(" ")
                }
                if(text5 !== 'X'&& text5 !== 'O'){
                    setText5(" ")
                }
                if(text7 !== 'X'&& text7 !== 'O'){
                    setText7(" ")
                }
            if(text8 !== 'X'&&text8 !== 'O'){
                setText8(" ")
            }
        }, 0);
      
    }

    if (text3 === currentPlayer && text3 === text5 && text5 === text7) {
        document.getElementById('three',).style.color = 'white'
        document.getElementById('three').style.backgroundColor = 'black';
        document.getElementById('three').style.border= '6px solid green'
        document.getElementById('five',).style.color = 'white'
        document.getElementById('five').style.backgroundColor = 'black';
        document.getElementById('five').style.border= '6px solid green'
        document.getElementById('seven',).style.color = 'white'
        document.getElementById('seven').style.backgroundColor = 'black';
        document.getElementById('seven').style.border= '6px solid green'

        setResult("Congratulations! "+  currentPlayer+" wins!");
setTimeout(() => {
    if(text !== 'X'&& text !== 'O'){            
        setText(" ")}
        if(text2 !== 'X'&& text2 !== 'O'){
            setText2(" ")
        }
        if(text4 !== 'X'&& text4 !== 'O'){            
            setText4(" ")
        }
            if(text6 !== 'X'&& text6 !== 'O'){
                setText6(" ")
            }
            if(text8 !== 'X'&&text8 !== 'O'){
                setText8(" ")
            }
            if(text9 !== 'X'&& text9 !== 'O'){
                setText9(" ");
            }
}, 0);
}  
    }
    function tie(){ 
    if( text!=="" && text2!=="" && text3!=="" && text4!=="" && text5!=="" && text6!=="" && text7!=="" && text8!=="" && text9!==""){
        setResult("Oh! It's a tie. Click RESTART to start again")
    }
}
        return (
            <div class="background">
                <div className="heading">Start Game</div>
                <div className="result">{result}</div>
                <div className="wrapper">
                    <div onClick={updateOne} id="one" className="grid" >{text}</div>
                    <div onClick={updateTwo} id="two" className="grid">{text2}</div>
                    <div onClick={updateThree} id="three" className="grid">{text3}</div>
                    <div onClick={updateFour} id="four" className="grid">{text4}</div>
                    <div onClick={updateFive} id="five" className="grid">{text5}</div>
                    <div onClick={updateSix} id="six" className="grid">{text6}</div>
                    <div onClick={updateSeven} id="seven" className="grid">{text7}</div>
                    <div onClick={updateEight} id="eight" className="grid">{text8}</div>
                    <div onClick={updateNine} id="nine" className="grid">{text9}</div>
                </div>
                <button onClick={restart} className="restart">Restart</button>
                
            </div>

        );
    }

export default TicTacToe;