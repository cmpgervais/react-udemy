var nameVar = 'Chris';
nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal';
    return petName;
}

var fullName = 'Chris Gervais';

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}


getPetName()
console.log(petName)