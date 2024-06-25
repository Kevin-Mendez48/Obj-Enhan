function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    };
}

function numberTwo(){
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};
}
function numberThree(){
 var instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return '${this.firstName} says bye!';
    }
 };
}
function createAnimals(species,verb,noise){
    return{
        species,
        [verb](){
            return noise;
        }
    };
}
