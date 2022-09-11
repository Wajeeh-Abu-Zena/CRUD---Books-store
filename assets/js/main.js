var bookName = document.getElementById("bookName");
var bookPrice = document.getElementById("bookPrice");
var bookDesc = document.getElementById("bookDesc");
var addBtn = document.getElementById("add");
var read = document.getElementById("table");
var books = [];
var c_index;

if(localStorage.getItem("bookList") == null)
    books = [];
else
    books = JSON.parse(localStorage.getItem("bookList"));
    displayData();

function insertBook(){              //Insert values from the forom to the books arry
    var book = {
        Name: bookName.value,
        Price : bookPrice.value,
        Desc : bookDesc.value
    };
    books.push(book);
    localStorage.setItem("bookList",JSON.stringify(books));
};

function displayData(){           //Read the data from books arry and dislay it to list
    
    var data ="";
    for(var i=0; i<books.length; i++)
        data +=
            `<tr>
                <th>${i}</th>
                <td>${books[i].Name}</td>
                <td>${books[i].Price}</td>
                <td>${books[i].Desc}</td>
                <td>
                    <div class="text-center">
                    <button type="button" onclick="getdateBook(${i})" class="btn btn-outline-primary ">Update</button>
                    <button type="button" onclick="deleteBook(${i})" class="btn btn-outline-danger">Delete</button>
                    </div>
                    </td>
            </tr>`
        
        read.innerHTML=data;
        
};

function clearData(){              //clean the forom colomms 
    bookName.value = "";
    bookPrice.value = "";
    bookDesc.value = "";
};

function addBook(){                //Add book when click on the button "Add book"
    if(addBtn.innerHTML=="UpdateBook"){
        updateBook();
    }
        
    else
        insertBook();                  
        displayData();
        clearData();
};

function deleteBook(index){         //delete book from list
    books.splice(index,1);
    localStorage.setItem("bookList",JSON.stringify(books));
    displayData();
};

function getdateBook(index){         //update book from list
    bookName.value = books[index].Name;
    bookPrice.value = books[index].Price;
    bookDesc.value = books[index].Desc;
    addBtn.innerHTML= "UpdateBook";
    document.getElementById('clear').style.visibility = 'hidden';
    c_index = index;
};

function updateBook(){
    books[c_index].Name = bookName.value; 
    books[c_index].Price = bookPrice.value;
    books[c_index].Desc = bookDesc.value;   
    localStorage.setItem("bookList",JSON.stringify(books));
    addBtn.innerHTML = "Add Book";
    document.getElementById('clear').style.visibility = 'visible';
};

function search(e){
    data="";
    for(var i=0; i<books.length; i++){
        if(books[i].Name.toLowerCase().includes(e.value.toLowerCase())){
            data +=
            `<tr>
                <th>${i}</th>
                <td>${books[i].Name}</td>
                <td>${books[i].Price}</td>
                <td>${books[i].Desc}</td>
                <td><button type="button" onclick="uptdateBook(${i})" class="btn btn-outline-primary">Update</button>
                    <button type="button" onclick="deleteBook(${i})" class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>`
        }
        read.innerHTML=data;
    }
};




