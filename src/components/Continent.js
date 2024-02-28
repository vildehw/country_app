import africa from '../svg/africa.svg'

export default function Continent({continents, setContinents}){

    setContinents("africa.svg")
    
    function fetchCountry (continents){ 

    
        // Fetch SVG content
        fetch(continents)
        .then(response => response.text())
        .then(svgText => {
            // Inject SVG into the specified container
            document.getElementById("svgContainer").innerHTML = svgText;
    
            // Call a function to add event listeners to the SVG paths
            //addEventListenersToSVG();
        })
        .catch(error => console.error('Error fetching SVG:', error));
        }



    return(
        <>
        <button onclick={fetchCountry('africa.svg')}>Afrika</button> 
        <div id="svgContainer"></div> 
        <img src="/svg/africa.svg"/>
        </>
    )
}