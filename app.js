console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
{
    for(let i=1; i<=100; i++)
if(i % 2!=0)
{
    console.log(i)
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i=1; i<=100; i++)
{
 if(i % 3 ===0 && i % 5===0)
 {
    console.log("FIzzBuzz" + i)
 }
 else if(i % 3 ===0 )
 {
    console.log("Fizz"+ i)
 }
 else if(i % 5 ===0)
 {
    console.log("Buzz" + i)
 }
}
console.log("Exercise 3 ===========");
let num = 1 ;
while(num <= 100)
{
    if(num % 2 != 0)
    {
    console.log(num)
    }
    num ++; 
}
console.log("While loop ===========");

let fizzy = 1; 
while(fizzy <= 100)
{
    if(fizzy % 3=== 0 && fizzy % 5==0)
    {
   console.log("FizzBuzz");
    }
    else if(fizzy % 3==0 )
    {
        console.log("Fizz")
    }
    else if( fizzy % 5==0 )
    {
        console.log("Buzz")
    }
    fizzy ++;
}

console.log("Exercise 1 and 2 with do while ===========");

let number = 1; 
do{
if(number % 2 != 0)
{
    console.log(number);
}
number ++;

}while(number<= 100)

console.log("Exercise 2 using do while====");
let fizz= 1;
do
{
if(fizz % 3==0 && fizz % 5==0)
{
    console.log("Fizzbuzz" + fizz);
}
else if(fizz %3 ==0 )
{
 console.log("Fizz" + fizz);
}
 
else if(fizz %5 ==0 )
{
    console.log("Buzz" + fizz);
}
fizz++;
}while(fizz <= 100)


console.log("Exercise 4 ===========");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;
for(let i = 0; i<=n; i++)
{
if(i ===value)
{
  found = true;
  break;    
}
}
if(found)
{
console.log("value found: ", value);
}
else
{
console.log("Value not found in the range");
}



console.log("Exercise 5 ===========");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let a = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i= start; i<= a; i++)
{
if(i % fizzDivisor ===0 & i % buzzDivisor ===0)
{
    console.log("FizzBuzz")
}
else if (i % fizzDivisor === 0) {
    console.log("FIZZ");
} else if (i % buzzDivisor === 0) {
    console.log("BUZZ");
}
}