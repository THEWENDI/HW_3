//1.
const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
        {
            'Student Name': 'John',
            Age: 19,
            Phone: '455 - 983 - 0903',
            Address: '123 Ave, San Francisco, CA, 94011',
        },
        {
            'Student Name': 'Alex',
            Age: 21,
            Phone: '455 - 983 - 0912',
            Address: '456 Rd, San Francisco, CA, 94012',
        },
        {
            'Student Name': 'Josh',
            Age: 22,
            Phone: '455 - 345 - 0912',
            Address: '789 Dr, Newark, CA, 94016',
        },
        {
            'Student Name': 'Matt',
            Age: 23,
            Phone: '321 - 345 - 0912',
            Address: '223 Dr, Sunnyvale, CA, 94016',
        },
    ],
};

let studenttable = document.createElement('table');
studenttable.className = 'studenttable'
document.body.appendChild(studenttable);

//th,td function 
function createth(content) {
    let th = document.createElement('th');
    th.textContent = content;
    return th;
}

function createtd(content) {
    let td = document.createElement('td');
    td.textContent = content;
    return td;
}

//firstrow
let firstrow = document.createElement('tr')
studenttable.appendChild(firstrow);


tableInfo.tableHeader.forEach((ele) => {
    firstrow.appendChild(createth(ele))
});

//secondrow
let secondrow = document.createElement('tr')
studenttable.appendChild(secondrow);


let tableContent = tableInfo.tableContent;

let tableContent1 = Object.values(tableContent[0]);

tableContent1.forEach((ele) => {
    secondrow.appendChild(createtd(ele));
});

//thirdrow
let thirdrow = document.createElement('tr')
studenttable.appendChild(thirdrow);

let tableContent2 = Object.values(tableContent[1]);

tableContent2.forEach((ele) => {
    thirdrow.appendChild(createtd(ele));
});

//fourthrow
let fourthrow = document.createElement('tr')
studenttable.appendChild(fourthrow);

let tableContent3 = Object.values(tableContent[2]);

tableContent3.forEach((ele) => {
    fourthrow.appendChild(createtd(ele));
});

//fifthrow
let fifthrow = document.createElement('tr')
studenttable.appendChild(fifthrow);

let tableContent4 = Object.values(tableContent[3]);

tableContent4.forEach((ele) => {
    fifthrow.appendChild(createtd(ele));
});



//2.
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

let olist = document.createElement('ol');
olist.className = 'olist';
document.body.appendChild(olist);

function createListItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


const orderedlist = document.querySelector('.olist');

list.forEach((ele) => {
    orderedlist.appendChild(createListItem(ele))
});

let ulist = document.createElement('ul');
ulist.className = 'ulist';
document.body.appendChild(ulist);

const unorderedlist = document.querySelector('.ulist');

list.forEach((ele) => {
    unorderedlist.appendChild(createListItem(ele))
});

//3.
const dropDownList = [
    { value: 'newark', content: 'Newark' },
    { value: 'santaClara', content: 'Santa Clara' },
    { value: 'unionCity', content: 'Union City' },
    { value: 'albany', content: 'Albany' },
    { value: 'dalyCity', content: 'Daly City' },
    { value: 'sanJose', content: 'San Jose' },
];

let dropDown = document.createElement('select');
dropDown.className = 'dropdownlist';
document.body.appendChild(dropDown);

const dropdown = document.querySelector('.dropdownlist');


function createdropdownItem(name, value) {
    let option = document.createElement('option');
    option.textContent = name;
    option.value = value;
    return option;
}


const dropdownList = document.querySelector('.dropdownlist');

dropDownList.forEach((ele) => {
    dropdown.appendChild(createdropdownItem(ele.content, ele.value))
});

