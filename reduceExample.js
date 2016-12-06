// JS Array reduce()
var numbers = [1,2,3,4,5];   // Declare array and assign to var numbers
var result = numbers.reduce(function(prev,next,index) {
             console.log(index + ":" + prev + ":" + next);
             prev += next;
             return prev;
            },0);
console.log("Final Result: " + result);
} 
