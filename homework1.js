var employees = [{
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27"
}, {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44"
}, {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17"
}, {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63"
}, {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37"
}, {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40"
}, {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26"
}, {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70"
}, {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72"
}, {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98"
}];

// homeWork 2 version 1

function collectFirstName(employees) {
    var firstNames = employees.map(function(employee){
       return employee.firstName;
    });
    // console.info('first',firstNames);
    return firstNames;
};

var names = collectFirstName(employees);
console.info('names', names);

// homeWork 3 version 1

function calculateAverageSalaryV1(employees) {
    var sum=0;
    var salary = employees.map(function(emp){
        return parseFloat(emp.salary);
    });
    salary.forEach(function(value){
        sum += value;        
    });
    console.info('sum', sum, 'employees length', employees.length)
    return sum/employees.length
};
        
var avg = calculateAverageSalaryV1(employees);
console.info(avg);

// Homework 3 version 2

function calculateAverageSalaryV2(employees) {
    var sum=0;
    employees.forEach(function(value){
        var sal = parseFloat(value.salary);
        sum += sal;     
    });
    return sum/employees.length
};      
var avg = calculateAverageSalaryV2(employees);
console.info(avg);

// Homvework 3 version 3

function av(employees) {
    var sum = employees.reduce((acc, employee) => {
        acc += employee.salary * 1;
        return acc
    },0);
    return sum / employees.length
}

 console.info(av(employees))

//Calculate female salary average


function calculateFemaleSalaryAverage(employees) {
    var sum=0;
    var count= 0;
    employees.forEach(employee => {
        if (employee.gender == 'Female') {
            count += 1;
            sum = sum + Number(employee.salary);
        }
        // console.info('count', count , 'sum' , sum);
    });
    return sum / count
}

var averageFemale = calculateFemaleSalaryAverage(employees);
console.info('averageFemale', averageFemale)

//split employeess in 2 arrays on gender

function splitEmployees(employees) {
    var f= [];
    var m= [];
    employees.forEach(function(employee) {
        // console.info('employee gender', employee.gender);
        // console.info('employee gender', gender)
        // console.info('type of', typeof gender)
        // if ( employee.gender === 'Female') {
        //     f.push(employee)
        // } else {
        //     m.push(employee)
        // }
        employee.gender == 'Female' ? f.push(employee) : m.push(employee)
    });
    return [f,m]
}

console.info(splitEmployees(employees));
