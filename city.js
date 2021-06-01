let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 }
];

window.onload = function(){
    //this adds the states to the first <select> tag in html
    loadStatesDropdown()

}

 function loadStatesDropdown(){
    //grab the HTML element by its ID
     const statesDropdown = document.getElementById('statesDropdown')

     //add a "select one" Option to the states Drop down 
     let selectOneOption = document.createElement("option")
     selectOneOption.textContent = "Select one..."
     selectOneOption.value = ""

     //add the selectOne Option to the states <select> element
     statesDropdown.appendChild(selectOneOption)

     //loop through the array above and create an <option> for each 
     //one and append it to <select> element for states
     for(let i=0; i < cityStates.length; i++){

        let createOption = document.createElement("option") //creates <option> element

        //add text to each <option> tag from text in the array
        createOption.textContent = cityStates[i].state
        
        //give each one a property of the state abbreviation
        createOption.value = cityStates[i].stateAbbr

        //append it to the HTML <select> element
        statesDropdown.appendChild(createOption)
     }
 }