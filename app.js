
  
const studentList = [
    // name , rool , gender, location, fess, age, class

    ['Raza ', '01', 'Mail', 'Chittagong', 200 , '23', '02' ],
    ['Jasy ', '02', 'Female', 'Chittagong', 200 , '12', '01' ],
    ['Rubel', '03', 'mail', 'Dinajpur', 100 , '22', '02' ],
    ['Roma', '04', 'Female', 'Dinajpur', 100 , '21', '01' ],
    ['Shahab', '05','Mail', 'Sylhet', 500 , '24', '03' ],
    ['Arif', '06', 'Mail', 'Chittagong', 400, '7', '01' ],
    ['Razzak', '07' , 'Mail', 'Dhaka', 150 , '12', '03' ],
    ['Istiak', '08', 'Mail', 'Comilla',230 , '15', '01' ],
    ['somaiya', '09', 'Female', 'Dinajpur',250 , '15', '02' ],
    ['sufiya', '10', 'Femail', 'Comilla',230 , '55', '03' ],
    ['Rohan ', '11', 'Mail', 'Dinajpur', 400 , '60', '02' ],
    ['Yeasmin ', '12', 'Female', 'Chittagong', 700 , '5', '01' ],
    ['Tasmin ', '13', 'Female', 'Comilla', 900 , '10', '03' ],
    ['Sokina ', '14', 'Female', 'Sylhet', 700 , '09', '02' ],
    ['Jorina ', '15', 'Female', 'Chittagong', 200 , '32', '01' ],
    ['Imran ', '16', 'Mail', 'Comilla', 200 , '3', '03' ],
    [' saima ', '17', 'Female', 'Sylhet', 800 , '12', '02' ],
    ['soma', '18', 'Female', 'Dinajpur', 100 , '25', '03' ],
    ['Tahmina', '19', 'Female', 'Dinajpur', 100 , '12', '01' ],
    ['Shakib', '20','Mail', 'Sylhet', 500 , '33', '03' ],
    ['Ai', '21', 'Mail', 'Chittagong', 400, '17', '02' ],
    ['Rmim', '22' , 'Mail', 'Dhaka', 150 , '18', '03' ],
    ['Ismail', '23', 'Mail', 'Comilla',230 , '21', '03' ],
    ['Nasrin', '24', 'Female', 'Dinajpur',230 , '5', '01' ],
    ['koddos apa', '25', 'Female', 'Comilla',230 , '65', '01' ],
    ['Sabbir ', '26', 'Mail', 'Dinajpur', 400 , '19', '02' ],
    ['Toha ', '27', 'Female', 'Chittagong', 700 , '18', '03' ],
    ['Sadiya ', '28', 'Female', 'Comilla', 900 , '02', '03' ],
    ['Liza ', '29', 'Female', 'Sylhet', 700 , '20', '03' ],
    ['Paki ', '30', 'Female', 'Chittagong', 200 , '100', '01' ],
    

   

]

// - Total Admnission fees
// =============================
let TotalFees = 0;
studentList.map( (data, i ) => {
        console.log(`${i + 1} . ${data[0]} = ${data[4]}`);
        TotalFees += data[4];
    })
console.log(`
-------------------
Total fees = ${TotalFees}

`);


// - Find Female student result
// =================================

studentList.forEach( (data, i) => {
    if(data[2] === 'Female'){
        console.log(` Hi, ${data[0]} Your are ${data[2]}`);
        
    } 
    
})


// - Find class wise student result
// =================================

studentList.forEach( (data, i) => {
    if(data[6] === '03'){
        console.log(` Hi, ${data[0]} Your Class Is  ${data[6]}`);
        
    } 
    
})




// - Location wise student result
// =================================

studentList.map( (data, i) => {
    if(data[3] === 'Chittagong'){
        console.log(` Hi, ${data[0]} Your Location Is  ${data[3]}`);
    } 
})


// - find student between 10 - 25 age
// =================================

studentList.map( (data, i) => {
    if(+data[5] > 10 && +data[5] < 25){
        console.log(` Hello, ${data[0]} Your age Is  ${data[5]}`);
    } 
})

