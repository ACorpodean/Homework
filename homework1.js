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
    last: "Hammarstr??m",
    year: 1829,
    passed: 1909
}];


const people = ["Bernhard, Sandra", "Bethea, Erin", "Becker, Carl", "Bentsen, Lloyd", "Beckett, Samuel", "Blake, William", "Berger, Ric", "Beddoes, Mick", "Beethoven, Ludwig", "Belloc, Hilaire", "Begin, Menachem", "Bellow, Saul", "Benchley, Robert", "Blair, Robert", "Benenson, Peter", "Benjamin, Walter", "Berlin, Irving", "Benn, Tony", "Benson, Leana", "Bent, Silas", "Berle, Milton", "Berry, Halle", "Biko, Steve", "Beck, Glenn", "Bergman, Ingmar", "Black, Elk", "Berio, Luciano", "Berne, Eric", "Berra, Yogi", "Berry, Wendell", "Bevan, Aneurin", "Ben-Gurion, David", "Bevel, Ken", "Biden, Joseph", "Bennington, Chester", "Bierce, Ambrose", "Billings, Josh", "Birrell, Augustine", "Blair, Tony", "Beecher, Henry", "Biondo, Frank"];


const friends = [{
    name: "Wes",
    year: 1988
}, {
    name: "Kait",
    year: 1986
}, {
    name: "Irv",
    year: 1970
}, {
    name: "Lux",
    year: 2015
}];
const comments = [{
    text: "Love this!",
    id: 523423
}, {
    text: "Super good",
    id: 823423
}, {
    text: "You are the best",
    id: 2039842
}, {
    text: "Ramen is my fav food ever",
    id: 123523
}, {
    text: "Nice Nice Nice!",
    id: 542328
}];

// const friends = [{
//         name: "Lux",
//         year: 1988
//     }];

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

const FirstLastNames = inventors.map( n => {
    const f = n.first
    const l = n.last
    return [f,l]
});

const FirstLastNamesII = inventors.map( n => [n.last,n.first]);

// homework 11

const Homework11 = inventors.find( i => i.first === "Galileo" && i.last ==="Galilei")
 
console.info(Homework11);

// homework 12

const totalYearsLived = inventors.reduce((acc,inventors) => {
    acc += inventors.passed - inventors.year;
    return acc;
}, 0);

console.info(totalYearsLived);

//  homework 13


let sortedOut = function sortingByYear (inventors) {
    inventors.sort(function(a, b){return b.year - a.year});
    return inventors;
};





// homework 14

// const allObjects = document.querySelectorAll('div.mw-category li');
// const allArray = Array.from(allObjects);
// const allText = allArray.map( i=> i.innerText);
// const filterItems = (arr, query) => {return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)}
// filterItems(allText, 'de');


// Homework 16

// var today = new Date();
// var year = today.getFullYear();

const exists = friends.some( (p) => {
    var today = new Date();
    var currentyear = today.getFullYear();
    // var age = currentyear - p.year;
    // console.warn(p.year);
    // console.error(currentyear);
    // console.info(age);
    return (currentyear - p.year) >= 19});

    console.info(exists);


    // Homework 17

const allOlder = friends.every( (p) => {
        var today = new Date();
        var currentyear = today.getFullYear();
        return (currentyear - p.year) >= 19});

    console.info(allOlder);

// Homework 18

const commentID = comments.find( ({ id }) => id === 823423);
console.info(commentID);

// Homework 19

function removeObj (array, cid){
    var ind = array.findIndex( p  => p.id === cid)
    array.splice(ind,  1);
};

function remove (a, i) {
    return a.filter(c => c.id !== i);
};

comments = remove(comments,12234);


