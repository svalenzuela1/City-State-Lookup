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

    //onchange event handler for states dropdown
    //find the id for states <select> option
    const statesDropdown = document.getElementById("statesDropdown")
    statesDropdown.onchange = statesDropdownChanged;
}

//this function is to authomatically load the states from the array
// in first select tag
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

 //this function is responsible for the cities popping up in the second <select> element
 function statesDropdownChanged(){

    //find the state and city <select> tags
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //after picking previous state with cities popping up
    //this will remove those cities after picking another state from first dropdown
    citiesDropdown.options.length = 0;

    //save the value from state selection(state abbreviation) into variable
    let stateAbbreviation = statesDropdown.value;

    //if user left first <select> tag blank then create popup notifying them
    if(stateAbbreviation == ""){
        alert("Please Choose State")
        return;
    }

    //use find method to find the matching cities from the states
    let matchingCities = cityStates.find(element => element.stateAbbr == stateAbbreviation)

    //loop through the cities in the matching state and create <option> element for each of them
   // for(i in matchingCities.cities.length){
    for(let i = 0; i < matchingCities.cities.length; i++){
        //create an option for each city
        let createOption = document.createElement("option")

        //add text for each city option
        createOption.textContent = matchingCities.cities[i]

        //append each option to the second <select> tag
        citiesDropdown.appendChild(createOption)
    }
 }