const findTheOldest = function(arr) {
    const currentYear = (new Date()).getFullYear();
    let oldest = {name: '', age: 0};
    arr.forEach(
        person => {
            const personAge = person['yearOfDeath'] ? person['yearOfDeath'] - person['yearOfBirth'] : currentYear - person['yearOfBirth'];

            if (personAge > oldest.age) {
                oldest.name = person.name;
                oldest.age = personAge;
            }
        }
    )
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
