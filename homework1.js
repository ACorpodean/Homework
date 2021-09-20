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

const inventors = [{
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
}, {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
}, {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
}, {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
}, {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
}, {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
}, {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
}, {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
}, {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
}, {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
}, {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
}, {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
}];


const people = ["Bernhard, Sandra", "Bethea, Erin", "Becker, Carl", "Bentsen, Lloyd", "Beckett, Samuel", "Blake, William", "Berger, Ric", "Beddoes, Mick", "Beethoven, Ludwig", "Belloc, Hilaire", "Begin, Menachem", "Bellow, Saul", "Benchley, Robert", "Blair, Robert", "Benenson, Peter", "Benjamin, Walter", "Berlin, Irving", "Benn, Tony", "Benson, Leana", "Bent, Silas", "Berle, Milton", "Berry, Halle", "Biko, Steve", "Beck, Glenn", "Bergman, Ingmar", "Black, Elk", "Berio, Luciano", "Berne, Eric", "Berra, Yogi", "Berry, Wendell", "Bevan, Aneurin", "Ben-Gurion, David", "Bevel, Ken", "Biden, Joseph", "Bennington, Chester", "Bierce, Ambrose", "Billings, Josh", "Birrell, Augustine", "Blair, Tony", "Beecher, Henry", "Biondo, Frank"];

// homework 6 

const arrayToObject = (array, param) => {
    const object = {};
    array.forEach(obj => {
        // object[obj[param]] = obj;
        // object[obj['lastName']]=obj;
        object[obj.lastName]=obj;
    })
    return object
}

console.log(arrayToObject(employees, 'lastName'))



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

// homework 9

const filtered = inventors.filter( i=> i.year >= 1500 && i.year <1600 )
console.info("filtered inventors 1500" ,  filtered);

// homework 10

// const FirstLastNames = inventors.map( n => {
//     let f = n.first
//     let l = n.last
//     return [f,l]
// });

const FirstLastNames = inventors.map( n => [n.last,n.first]);
    

// homework 11

