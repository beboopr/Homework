const student =

// display all the students first names one at atim, one per line.
function showStudent(studentList) {

for(let i = 0; i <studentList.length; i++) {
    const student = studentList[i]
    console.log(student.firstName)
}

}
showStudent(student)