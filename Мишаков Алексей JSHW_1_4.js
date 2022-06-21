// 4***

const age_2 = 18 
const age_3 = 60

const checkAge = function (age) {
if (age && !isNaN(age)) {
        if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It’s less then ");
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel") 
    } else {
        console.log("Technical work") 
    }
} else console.log("Not an integer value")
}
let a = prompt("Enter your age")

checkAge(a)