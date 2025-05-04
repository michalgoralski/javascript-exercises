const findTheOldest = function(people) {
    let result = people.reduce((acc, cur) => {
        let curAge = 0;
        let accAge = 0;
        if (cur.hasOwnProperty("yearOfDeath")) curAge = cur.yearOfDeath - cur.yearOfBirth;
        else curAge = new Date().getFullYear() - cur.yearOfBirth;
        if (acc.hasOwnProperty("yearOfDeath")) accAge = acc.yearOfDeath - acc.yearOfBirth;
        else accAge = new Date().getFullYear() - acc.yearOfBirth;
        if(curAge > accAge){
            acc = cur;
        }
        return acc;
    }, person = {
        name: "Bob",
        yearOfBirth: 2000,
        yearOfDeath: 2000,
    });
    return result;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
