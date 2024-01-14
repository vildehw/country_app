export default function Continent({continents, setContinents}){

    
    function fetchCountry (svgFilePath){ 

    
        // Fetch SVG content
        fetch(svgFilePath)
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
        </>
    )
}