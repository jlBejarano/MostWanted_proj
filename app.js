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

  let traitsList = people;

  traitsList = searchByGender(traitsList);
  traitsList = searchByHeight(traitsList);
  traitsList = searchByWeight(traitsList);
  traitsList = searchByOccupation(traitsList);
  traitsList = searchByEyeColor(traitsList);

  if(traitsList !== 0){
    alert("No search criteria selected.")
  }
  app(people);
}

function searchByGender(people){

  let genderSearch = promptFor("Search by gender? Enter yes or no.", yesNo).toLowerCase();

  let foundPerson = people.filter(function(person){
    if(person.genderSearch === genderSearch){
      return true;
    }
    else{
      return false;
    }
  })
  var found = "";
  for (var i = 0; i <= foundPerson.length -1; i++){
    found =+ foundPerson[i].firstName + " " + foundPerson[i].lastName + "\n";
  }
  alert(found);
  app(people);

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
  
  let heightSearch = promptFor("Search by height? Enter yes or no.", yesNo).toLowerCase();
  
  let foundPerson = people.filter(function(person){
    if(person.heightSearch === heightSearch){
      return true;
    }
    else{
      return false;
    }
  })
  var found = "";
  for (var i = 0; i <= foundPerson.length -1; i++){
    found =+ foundPerson[i].firstName + " " + foundPerson[i].lastName + "\n";
  }
  alert(found);
  app(people);

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
  
  let weightSearch = promptFor("Search by weight? Enter yes or no.", yesNo).toLowerCase();

  let foundPerson = people.filter(function(person){
    if(person.weightSearch === weightSearch){
      return true;
    }
    else{
      return false;
    }
  })
  var found = "";
  for (var i = 0; i <= foundPerson.length -1; i++){
    found =+ foundPerson[i].firstName + " " + foundPerson[i].lastName + "\n";
  }
  alert(found);
  app(people);

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
  
  let occupationSearch = promptFor("Search by occupation? Enter yes or no.", yesNo).toLowerCase();

  let foundPerson = people.filter(function(person){
    if(person.occupationSearch === occupationSearch){
      return true;
    }
    else{
      return false;
    }
  })
  var found = "";
  for (var i = 0; i <= foundPerson.length -1; i++){
    found =+ foundPerson[i].firstName + " " + foundPerson[i].lastName + "\n";
  }
  alert(found);
  app(people);

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
  
  let eyeColorSearch = promptFor("Search by eye color? Enter yes or no.", yesNo).toLowerCase();
  
  let foundPerson = people.filter(function(person){
    if(person.eyeColorSearch === eyeColorSearch){
      return true;
    }
    else{
      return false;
    }
  })
  var found = "";
  for (var i = 0; i <= foundPerson.length -1; i++){
    found =+ foundPerson[i].firstName + " " + foundPerson[i].lastName + "\n";
  }
  alert(found);
  app(people);

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
  let personInfo = "Height" + "\n";
  personInfo += "Height" + person.height + "\n";
  let personInfo = "Weight" + person.weight + "\n";
  personInfo += "Weight" + person.weight + "\n";
  let personInfo = "Age" + "\n";
  personInfo += "Age" + person.age + "\n";
  let personInfo = "Occupation"+ "\n";
  personInfo += "Occupation"+ person.occupation + "\n";
  let personInfo ="Eye Color" + "\n";
  personInfo += "Eye Color" + person.eyecolor + "\n";
}
// TODO: finish getting the rest of the information to display
alert(personInfo);

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
