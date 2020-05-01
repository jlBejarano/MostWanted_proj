"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTraits(people);
      break;
    default:
      app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person, people);
      break;
    case "family":
      displayFamily(person, people);
      break;
    case "descendants":
      displayDescendants(person, people)
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByTraits(people){

  var trait = "";
  var traitsList = people;

  traitsList = searchByGender(traitsList);
  traitsList = searchByHeight(traitsList);
  traitsList = searchByWeight(traitsList);
  traitsList = searchByOccupation(traitsList);
  traitsList = searchByEyeColor(traitsList);

  if(traitsList.length === 22){
    alert("No criteria selected.")
  }
  else if(traitsList.length === 0){
    alert("Search criteria not found.")
  }
  else{
    for(var i=0; i < traitsList.length; i++){
      trait += traitsList[i].firstName + " " + traitsList[i].lastName + " ";
    }
    alert(trait);
  }
  app(people);
}

function searchByGender(people){

  var genderSearch = promptFor("Search by gender? Enter yes or no.", yesNo).toLowerCase();

  switch (genderSearch){
    case "yes":
      var findGender = lookUpGender(people);
      return findGender;
    case "no":
      return people;
    default:
      searchByGender(people);
    break;
  }
}

function searchByHeight(people){
  
  var heightSearch = promptFor("Search by height? Enter yes or no.", yesNo).toLowerCase();

  switch (heightSearch){
    case "yes":
      var findHeight = lookUpHeight(people);
      return findHeight;
    case "no":
      return people;
    default:
      searchByHeight(people);
    break;
  }
}

function searchByWeight(people){
  
  var weightSearch = promptFor("Search by weight? Enter yes or no.", yesNo).toLowerCase();

  switch (weightSearch){
    case "yes":
      var findWeight = lookUpWeight(people);
      return findWeight;
    case "no":
      return people;
    default:
      searchByWeight(people);
    break;
  }
}

function searchByOccupation(people){
  
  var occupationSearch = promptFor("Search by occupation? Enter yes or no.", yesNo).toLowerCase();

  switch (occupationSearch){
    case "yes":
      var findOccupation = lookUpOccupation(people);
      return findOccupation;
    case "no":
      return people;
    default:
      searchByOccupation(people);
    break;
  }
}

function searchByEyeColor(people){
  
  var eyeColorSearch = promptFor("Search by eye color? Enter yes or no.", yesNo).toLowerCase();

  switch (eyeColorSearch){
    case "yes":
      var findEyeColor = lookUpEyeColor(people);
      return findEyeColor;
    case "no":
      return people;
    default:
      searchByEyeColor(people);
    break;
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
