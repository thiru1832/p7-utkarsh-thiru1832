function abc (a,b){
   console.log(a,b);
   return function(a,b){
    console.log(a,b);
   }
}

const a = abc(1,2);

console.log(a);


//a(5,6);