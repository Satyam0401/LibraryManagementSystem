const form = document.querySelector("#book-form")
const tableList = document.querySelector("#book-list")
console.log(tableList)
/*function sum(a,b)
return a+b

const sum = (a,b)=>{//without braces if in one line
    return a+b
}*/

window.addEventListener("DOMContentLoaded",(e)=>{
    let books = JSON.parse(localStorage.getItem("books"))
    books.forEach(book=>createRow(book.title,book.author,book.isbn))
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title = document.querySelector("#title").value
    //console.log(title)
    const author = document.querySelector("#author").value
    //console.log(author)
    const isbn = document.querySelector("#isbn").value
    //console.log(isbn)
if(author ===''){
    document.querySelector("#author").focus()
    alert("Please fill the author details")
    return
}
else if(title === ''){
    document.querySelector("#title").focus()
    alert("Please fill the title details")    
    return
}
else if(isbn === ''){
    document.querySelector("#isbn").focus()
    alert("Please fill the isbn details")
    return
}

const book ={title,author,isbn}
console.log(book)
clearAllFields()
createRow(title,author,isbn)
addRow(book)
})
tableList.addEventListener("click",(e)=>{
    removeRow(e)
    let books = JSON.parse(localStorage.getItem("books"))
    const isbn= e.target.parentElement.previousElementSibling.textContent
    const newbooks = books.filter(book => book.isbn!==isbn)
    //console.log(newbooks)
    localStorage.setItem("books",JSON.stringify(newbooks))
})
function clearAllFields(){
document.querySelector("#title").value = ''
document.querySelector("#author").value = ''
document.querySelector("#isbn").value = ''
}
function createRow(title,author,isbn){
    const tr = document.createElement("tr")
tr.innerHTML = 
    `<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td> <a href = "#" class = "btn btn-danger float right delete">X</a></td>`
    tableList.appendChild(tr)

}
function addRow(book){
    let newbook;
    if(localStorage.getItem("books") === null){
        newbook = []
    }
    else {
       newbook = JSON.parse(localStorage.getItem("books")) 
    }
    newbook.push(book)
    //console.log(newbook)
    localStorage.setItem("books",JSON.stringify(newbook))
    }
    function removeRow(e){
        if(e.target.classList.contains("delete")){
        tableList.removeChild(e.target.parentElement.parentElement)
    }
    }