//first time is first condition usually the starting point, the second in the what the loop goes to or the exit condition, or the end, the third is what is being executed//
for(let i = 0; i <= 50; i++)
    if(i % 3 == 0) 
        console.log("Fizz");
    else if (i % 5 == 0) 
        console.log("Buzz");
    else if (i % 15 == 0) 
        console.log("FizzBuzz");
    else console.log(i);