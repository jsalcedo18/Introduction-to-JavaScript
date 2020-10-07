/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/ 

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value ✅
   2. Return true if age is 18 or higher ✅

   HINT: no function required
*/
let votingAge = 21;

if(votingAge >= 18){
  console.log(true);
}else{
  console.log(false);
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables *Different variables* and assign them values ✅
   2. Use a conditional *If statement* to change the value of the 1st variable 
   based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/
let WillieSport = 'football'; //1st Variable
let JayneeSport = 'Soccer'; //2nd Variable- If the 2nd variable occurs, then the 1st variable is changed

if(JayneeSport === 'Soccer'){  //If JayneeSport is equal to Soccer than variable WillieSport changes to 'Baseball'
  WillieSport = 'Baseball';
}else{
  WillieSport = 'football';
}

console.log(WillieSport);

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999" ✅
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method, no function needed
*/
let birthDate = Number("1999");

console.log(Number(birthDate));  
/*Notes: in order to change to integer, it had to be Number(). 
thats why you console.log the whole thing versus just ("1999"). */


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(num1, num2){
    return num1 * num2;
  }

console.log(multiply(5, 5));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(human){
  return human * 7;
}

console.log(dogYears(7));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. 
  For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older ( adultDogs >= 1year)
     up to 5 lbs - 5% of their body weight (weight <= 5 lbs (weight * 5%)) ✅
     6 - 10 lbs - 4% of their body weight (weight >=6 lbs && weight <=10 lbs (weight * 4%)) ✅
     11 - 15 lbs - 3% of their body weight (weight >=11 lbs && weight <=15 lbs (weight * 3%)) ✅
     > 15lbs - 2% of their body weight (weight > 15 lbs (weight * 2%)) ✅

  Puppies less than 1 year
     2/12 (0.16666667) - 4/12 (0.33333333) months 10% of their body weight (age >= (0.16666667) && age < (0.33333333) (weight * 10%)) ✅
     4/12 - 7/12 (0.58333333) months 5% of their body weight (age >= (0.33333333) && age < (0.58333333) (weight * 5%)) ✅
     7/12 - 12/12 (1) months 4% of their body weight (age >= (0.58333333) && age < (1) (weight * 4%)) ✅
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
  if(age >=1) {  //if the age is greater than or equal to one, your gonna run thru its if-statements, if not, then jump to else-if statements (puppy)
    if(weight <=5){
      return weight * 0.05;
    }else if(weight >=6 && weight <=10){
      return weight * 0.04;
    }else if(weight >=11 && weight <=15){
      return weight * 0.03;
    }else if(weight > 15){
      return weight * 0.02;
    }
  }else if(age >= 0.16666667 && age < 0.33333333){
    return weight * 0.10;
  }else if(age >= 0.33333333 && age < 0.58333333){
    return weight * 0.05;
  }else if(age >= 0.58333333 && age < 1){
    return weight * 0.04;
  }
} //end of funtion hungryDog

console.log(hungryDog(15, 1));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// Rock, Paper, Scissors - Let's play against the computer!
/*
- Create a global variable that randomly generates the computer's choice // var outcome = math.floor(math.random()*3) ✅
    - Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1) ✔
- Use the game function below to do the following:
    1. Receive 2 parameters the user's choice and the computer's choice // (usersChoice✅, computersChoice✅)
    2. Return whether the user won, lost, or tied based on these rules of the game described below ✅
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie ✅
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

/* Game Guidelines:
'rock' === 0
'paper' === 1
'scissors' === 2 

Returns:
'you win!'
'you lose!'
`it's a tie`

RULES OF THE GAME: 
-Scissors(2) beats Paper(1)
  user          comp ✔
  comp          user ✔
-Paper(1) beats Rock(0)
 user           comp ✔
 comp           user ✔
-Rock(0) beats Scissors(2)
 user            comp ✔
 comp            user ✔
-Or there's a tie
*/

function game(usersChoice){

  var computersChoice = Math.floor(Math.random()*3);
  
  if(usersChoice === 'scissors' && computersChoice === 1){
    return 'you win!';
  }else if(usersChoice === 'paper' && computersChoice === 2){
    return 'you lose!';
  }else if(usersChoice === 'paper' && computersChoice === 0){
    return 'you win!';
  }else if(usersChoice === 'rock' && computersChoice === 1){
    return 'you lose!';
  }else if(usersChoice === 'rock' && computersChoice === 2){
    return 'you win!';
  }else if(usersChoice === 'scissors' && computersChoice === 0){
    return 'you lose!';
  }else{
    return "it's a tie";
  }
  } //End of function game 
  
  console.log(game('scissors'));
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(/*add your code here*/){
    /*add your code here*/
  }



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(/*add your code here*/){
    /*add your code here*/
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(/*add your code here*/){
        /*add your code here*/
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
  function grade(number){
    if(number >= 90){
      return ("A");
  }else if(number >= 80){
      return ("you got a B");
  }else if(number >= 70){
      return ("C");
  }else if(number >= 60){
      return ("D");
  }else{
      return ("F");
  }}
console.log(grade(100));
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
