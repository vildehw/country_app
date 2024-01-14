

import { useState } from 'react';
import './App.css';
import Continent from './components/Continent.js';


function App() { 


  /*
  function fetchCountry (svgFilePath){ 

    
    // Fetch SVG content
    fetch(svgFilePath)
    .then(response => response.text())
    .then(svgText => {
        // Inject SVG into the specified container
        document.getElementById("svgContainer").innerHTML = svgText;

        // Call a function to add event listeners to the SVG paths
        addEventListenersToSVG();
    })
    .catch(error => console.error('Error fetching SVG:', error));
    }



// Function to add event listeners to SVG paths
function addEventListenersToSVG() {
    // Select all <path> elements in the SVG
    var paths = document.querySelectorAll("svg path");  

    const list = Array.from(paths)

    const nameList = []
    list.map((list) => nameList.push(list.getAttribute("name")))
    console.log(nameList) 

    let randomName = 0
    const guessed = []  
    let wrongs = 0 
    
    document.getElementById("countries").innerHTML = nameList[randomName] 
    // Iterate through each path and add event listeners 

    
    
    list.map((path, index) => {

        path.addEventListener("click", function () { 

            if (path.getAttribute("name") === nameList[randomName]
            ){
                console.log("Path " + (index + 1 ) + (path.getAttribute("name")) + " clicked!")
                path.style.fill = "green"  
                //nameList.splice(randomName,1)  
                guessed.push(nameList[randomName]) 
                console.log("guessed" + guessed) 

                    if(guessed.length < nameList.length) {
                    randomName++
                    console.log("namelist " + nameList)  
                    //randomName = randomMinMax(0, nameList.length)  
                    console.log("ny " + nameList[randomName]) 
                    document.getElementById("countries").innerHTML = nameList[randomName] 
                    } else {
                        document.getElementById("countries").innerHTML = "game over" 
                    }
                
            } else{
                console.log("feil")  
                wrongs++
                document.getElementById("counter").innerHTML = wrongs

            }
        });
            });
    }


*/

/*
<button onclick="fetchCountry('europe.svg')">Europa</button> 
    <button onclick="fetchCountry('africa.svg')">Afrika</button> 
    <button onclick="fetchCountry('world.svg')">verden</button>
    
    <h4 id="countries"></h4> 
    
    <div id="svgContainer"></div> 
    <h4> Antall bomklikk</h4> 
    <h4 id="counter"></h4> 
*/ 

const [continents, setContinents] = useState()

  return ( 
    <>
    
    <Continent continents={continents} setContinents={setContinents}/>
    </>
  );
}

export default App;
