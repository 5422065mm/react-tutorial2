import { useState } from "react";
export default function App() {

    var x = ["Willy the Goblin","Big Daddy","Father Christmas"];
    var y = ["the soup kitchen","Disneyland","the White House"];
    var z = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

    const [xItem, setXItem] = useState("");
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState("");
    const [showStory,cs] = useState(false);
    const [name,entername] = useState("Bob");
    const [ukus,c] = useState("us");
    const [i,j] = useState(0);

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }


    function handleClick(){
        cs(true);
        setXItem(randomValueFromArray(x));
        setYItem(randomValueFromArray(y));
        setZItem(randomValueFromArray(z)); 
        entername(document.getElementById("name").value|| "Bob"); //valueの箱に値がなければBob
        if(ukus === "us"){
          j(0);
        } else if(ukus === "uk"){
          j(1);
        }
    }

    
    function changeUkus(){
        c(event.target.value);
    }

    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input   id="name" type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input onChange = {changeUkus} type="radio" value="us" checked={ukus === "us"} />
          <label htmlFor="uk">UK</label>
          <input onChange = {changeUkus} type="radio" value="uk" checked={ukus === "uk"} />
        </div>
        <div>
            <button onClick={handleClick}>Generate random story</button>
        </div>

        {showStory && i == 0 && (
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}

        {showStory && i == 1 && (
          <p>
            It was 34 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs 21
            stone, and it was a hot day.
          </p>
        )}
      </>
    );
    
  }