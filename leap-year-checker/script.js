/*
Créez une fonction qui prend une année en entrée et détermine s'il s'agit 
d'une année bissextile ou non. Les années bissextiles sont divisibles par 4,
 mais pas par 100, sauf si elles sont également divisibles par 400.
*/

function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return `${year} est une année bissextile`
    } else {
        return `${year} n'est pas une année bissextile`
    }
}   

console.log(isLeapYear(1997))
console.log(isLeapYear(2000))