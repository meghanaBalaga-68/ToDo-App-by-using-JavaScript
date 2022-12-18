let addTodo =document.getElementById("btn-click");
let local =localStorage.getItem("data");
let data = local? JSON.parse(local) : [];
addTodo.addEventListener("click", (event)=>{
    event.preventDefault();
    let usrData = document.getElementById('userData').value;

    console.log(usrData)

    data.push(usrData)
    localStorage.setItem('data', JSON.stringify(data))
    location.reload()
    console.log(data)
})

for(let i in data)
{ 
    document.getElementById('todo').innerHTML +=  `<ul><li>${data[i]}</li></ul>`
    
    
}
 document.getElementById("userData").value =" ";