
let students = [
    {
        id: 1,
        name: "rikkei",
        email: "rikke@gmail.com",
        numberPhone: "0828638888",
        address: "Hà nội",
        gender: "nam",
      },
    {
        id: 2,
        name: "akademy",
        email: "akademy@gmail.com",
        numberPhone: "0828638888",
        address: "HCM",
        gender:"nữ",
      },
    {
        id: 3,
        name: "nguyen van a",
        email: "nguyenvana@gmail.com",
        numberPhone: "0828638888",
        address: "HCM",
        gender:"nam",
      },
    {
        id: 4,
        name: "pham thi b",
        email: "phamthi@gmail.com",
        numberPhone: "0828638888",
        address: "HCM",
        gender: "nữ",
      },
];

// render học viên
let tbody = document.getElementById("tbody");
let form = document.getElementById("main-form");
let btn = document.getElementById("btn");
let search = document.getElementById("search");
function renderStudents(){
    tbody.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        tbody.innerHTML = tbody.innerHTML + 
    `<tr id="${students[i].id}">
        <th scope="row">${i + 1}</th>
        <td>${students[i].name}</td>
        <td>${students[i].email}</td>
        <td>${students[i].numberPhone}</td>
        <td>${students[i].address}</td>
        <td>${students[i].gender}</td>
        <td><button type="button" class="btn btn-primary btn-edit">edit</button>
          <button type="button" class="btn btn-secondary btn-delete">Delete</button>
        </td>
    </tr>`
        
    }
}
renderStudents();


//  thêm học viên mới
form.onsubmit = function (event){
    event.preventDefault();
    
    let student = {
        id: Math.floor(Math.random() * 1000000),
        name: form.name.value,
        email: form.email.value,
        numberPhone: form.numberPhone.value,
        address: form.address.value,
        gender:form.gender.value,
        
    };
    students.push(student);
    renderStudents();
}



// xoá học viên
tbody.onclick = function (event){
    if (event.target.classList.contains("btn-delete")){
        console.log(event.target.parentElement.parentElement.id);
        let deleteElement = event.target.parentElement.parentElement;
          deleteElement.remove();
    }
}



// search học viên

btn.onclick = function(){
    let searchElement = search.value;
    let findIndex = -1;
    for (let i = 0; i < students.length; i++) {
        if(students[i].name == searchElement);
        findIndex = i;
    }
console.log(students[i]);
}
