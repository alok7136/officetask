const { default: Item } = require("antd/lib/list/Item");

let arr = [];
var url = "https://jsonplaceholder.typicode.com/todos";

async function getdata() {
  const response = await fetch(url);
  let data = await response.json();
  arr = data;
  display = `<tr><td>Id</td><td>title</td><td>status</td><td>RemoveItem</td><td>EditItem</td></tr>`;
  arr.map((element) => {
    display += `<tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.completed}</td>
        <td><button onclick="ondelete(${element.id})">Delete</button></td>
        <td><button>Edit</button></td>
    </tr>`;
  });
  document.getElementById("display").innerHTML = display;
}

function ondelete(res) {
  // var del = ''
  let arr1 = arr.filter((element) => {
    return element.id != res;
  });
  arr = arr1;
  display = `<tr><td>Id</td><td>title</td><td>status</td><td>RemoveItem</td><td>EditItem</td></tr>`;
  arr1.map((element) => {
    display += `<tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.completed}</td>
        <td><button onclick="ondelete(${element.id})">Delete</button></td>
        <td><button onclick="edit(${element.id})">Edit</button></td>
    </tr>`;
  });
  document.getElementById("display").innerHTML = display;
  // document.getElementsByTagName(del).innerHTML=del
}

function oninsert() {
  if (validate()) {
    alert("Data has been inserted !!!");
    let insert = {
      id: document.getElementById("id").value,
      title: document.getElementById("title").value,
      completed: document.getElementById("completed").value,
    };
    arr.unshift(insert);
    console.log(arr);
    display = `<tr><td>Id</td><td>title</td><td>status</td><td>RemoveItem</td><td>EditItem</td></tr>`;
    arr.map((element) => {
      display += `<tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
            <td><button onclick="ondelete(${element.id})">Delete</button></td>
            <td><button>Edit</button></td>
        </tr>`;
    });
    document.getElementById("display").innerHTML = display;
    document.getElementsByTagName(del).innerHTML = del;
  } else {
    alert("please fill all field");
  }
}

function validate() {
  isValid = true;
  if (
    document.getElementById("id").value == "" ||
    document.getElementById("title").value == "" ||
    document.getElementById("completed").value == ""
  ) {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}

function Editrow() {
  if (validate()) {
    alert("Data has been inserted !!!");
      selectedRow = td.parentElement.parentElement;
      document.getElementById("id").value = selectedRow.cells[0].innerHTML;
      document.getElementById("title").value = selectedRow.cells[1].innerHTML;
      document.getElementById("completed").value = selectedRow.cells[2].innerHTML;
    arr.filter((Item)=>{
      
    });
    console.log(arr);
    display = `<tr><td>Id</td><td>title</td><td>status</td><td>RemoveItem</td><td>EditItem</td></tr>`;
    arr.map((element) => {
      display += `<tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
            <td><button onclick="ondelete(${element.id})">Delete</button></td>
            <td><button>Edit</button></td>
        </tr>`;
    });
    document.getElementById("display").innerHTML = display;
    document.getElementsByTagName(del).innerHTML = del;
  } else {
    alert("please fill all field");
  }
}



function edit(resp) {
  
  let arr2 = arr.filter((element) => {
    return element.id != resp;
  });
  arr = arr2;
  display = `<tr><td>Id</td><td>title</td><td>status</td><td>RemoveItem</td><td>EditItem</td></tr>`;
  arr1.map((element) => {
    display += `<tr>
              <td>${element.id}</td>
              <td>${element.title}</td>
              <td>${element.completed}</td>
              <td><button onclick="ondelete(${element.id})">Delete</button></td>
              <td><button onclick="edit(${element.id})">Edit</button></td>
          </tr>`;
  });
  document.getElementById("display").innerHTML = display;
}

// function onEdit() {
//         selectedRow = td.parentElement.parentElement;
//         document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
//         document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
//         document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
//         document.getElementById("city").value = selectedRow.cells[3].innerHTML;
//     }
