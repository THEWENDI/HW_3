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

let studentTable = document.createElement('table');
studenttable.className = 'studenttable'
document.body.append(studentTable);

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

//tableHeader
let firstrow = document.createElement('tr')
studenttable.append(firstrow);


tableInfo.tableHeader.forEach((ele) => {
    firstrow.append(createth(ele))
});

//Destructuring
// const { tableContent: [student1, student2, student3, student4] } = tableInfo

const { tableContent } = tableInfo;

//tableContent
for (let i = 0; i < tableContent.length; i++) {
    let row = document.createElement('tr')
    studenttable.append(row);
    Object.values(tableContent[i]).forEach((ele) => {
        row.append(createtd(ele));
    })

}


//2.
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

let olist = document.createElement('ol');
olist.className = 'olist';
document.body.append(olist);

function createListItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


const orderedlist = document.querySelector('.olist');

list.forEach((ele) => {
    orderedlist.append(createListItem(ele))
});

let ulist = document.createElement('ul');
ulist.className = 'ulist';
document.body.append(ulist);

const unorderedlist = document.querySelector('.ulist');

list.forEach((ele) => {
    unorderedlist.append(createListItem(ele))
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
document.body.append(dropDown);

const dropdown = document.querySelector('.dropdownlist');


function createdropdownItem(name, value) {
    let option = document.createElement('option');
    option.textContent = name;
    option.value = value;
    return option;
}


const dropdownList = document.querySelector('.dropdownlist');

dropDownList.forEach((ele) => {
    dropdown.append(createdropdownItem(ele.content, ele.value))
});

