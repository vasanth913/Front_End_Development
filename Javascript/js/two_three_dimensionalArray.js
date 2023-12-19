const earnMoneyA= ["Frontend", "Backend", "fullstack"];

const earnMoneyB = ["AI", "Blockchain","Analytics"];

const growMoneyA = ["Stocks", "RealEstate", "FixedIncome"];

const growMoneyB = ["Options", "Futures"];

const giveMoney = ["QualityEducation"];

// Two Dimensional Array
const earnMoney = [earnMoneyA, earnMoneyB];

const growMoney = [growMoneyA, growMoneyB];

//Get the value of blockchain

/* In the two dimensional arrays

Step 1: Choose in which array we have that value "blockchain", either in earnMOney is  0 or
 earnMOney is 1 , It's in 1 so earnMoney[1]

Step 2: In Which index it has "blockchain value" in earnMoneyB, it is in index [1], 
so earnMoney [1] [1] */

console.log('blockchain and FixedIncome value', earnMoney[1][1], growMoney[0][2]);

// Three Dimensional Array

/* earnMoney will be first Array, growMOney will be second and giveMoney will be third */

const dhuddu = [earnMoney, growMoney, giveMoney];

/* Step 1: In the above array, we have the choose which array has that "realEstate" value
and it's "growMoney" so it's 1 so dhuddu[1]

Step 2: In the "growMoney", we have to check which has "realEstate" value and it's "growMOneyA"
so it's 0, so dhuddu[1][0]

Step 3: In the growMoney, which index has the "realEstate" value and it's 1, so dhuddu[1][0][1] */

console.log('RealEstate Value', dhuddu[1][0][1]);