// //Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####
let result = '#'
let numberofhastags = 5

for (let i = 0; i <= numberofhastags; i++) {
    console.log(line)
    line = line + '#'
}

// Extra for experts: 
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F.
// " Call that function for a few different scores and log the result to make sure it works.

const score = 60
function assignGrade(numscore) {
    if (numscore => 90) {
        console.log('A')
    }
    if (numscore => 80) {
        console.log('B')
    }
    if (numscore => 70) {
        console.log('C')
    }
    if (numscore => 60) {
        console.log('D')
    }

}
assignGrade()