const names=['Guadalupe','Ollie','Aki'];
const word = "surprise";

function writeCards( names, word ) {
 let eachCard = []
 for ( let i = 0; i < names.length; i++ ) {
   eachCard.push( `Thank you, ${names[i]}, for the wonderful ${word} gift!` )
 }
 return eachCard
}

function countDown(){
    let number = 11;
    while (number --){
        console.log(number)
    }
}