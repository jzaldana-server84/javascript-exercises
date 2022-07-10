const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(people) {
  let highestAge = 0;
  let age = 0;
  let birth = 0;
  let death = 0;
  const currentDate = new Date();
  let highestName = [{
    name: "",
    age: 0,
  }];

  people.forEach((element, index) => {
    birth = element.yearOfBirth;

    if (element.yearOfDeath == undefined) {
      death = currentDate.getFullYear();
    } else {death = element.yearOfDeath;}

    age = death-birth;
    
    if(index == 0) {
      highestAge = age; 
      highestName.name = element.name; 
      highestName.age = age;}
    else {
      if(age > highestAge) {highestAge = age; 
        highestName.name = element.name; 
        highestName.age = age;
      }
    }

  });

  return highestName;
};

console.log(findTheOldest(people));
//console.log(currentDate.getFullYear())

// Do not edit below this line
module.exports = findTheOldest;
