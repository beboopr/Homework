/* You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored. 
 Create a function that calculates the final points for the team and returns that value.*/

 const calculateScore = (twoPointers, threePointers) => {
    return (twoPointers * 2) + (threePointers * 3)
 }


console.log(calculateScore(5, 2))

//  function calculateScore () {

//  }

