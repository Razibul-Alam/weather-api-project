
        const appid='7c6df41e74367d41cd8d4c4e0f3112a4'

  function button(){
        const searchFeild=document.getElementById('search').value;
        fetch(`https://jsonplaceholder.typicode.com/users/`)
.then(res=>res.json())
. then(data=>mainApi(data))



}

function mainApi(info){
    // console.log(info)
    let div=document.getElementById('maindiv')
    div.innerHTML=''
    info.map(data=>{const newdiv=document.createElement('div')
    newdiv.className='newDiv col-lg-3'
        const divInfo=`<h3>${data.name}</h3>
        <h4>Email: ${data.email}</h4>
        <button onclick="showDetail(${data.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Show details</button>
        `
newdiv.innerHTML=divInfo;
div.appendChild(newdiv);})
    
       
}

const showDetail=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/`)
.then(res=>res.json())
. then(data=>{
    const users=data.filter(user=>user.id==id)
    console.log(users)
    const foodDetail=document.getElementById('foodDetail')
    foodDetail.innerHTML=`<h3>Name:${users[0].name}</h3>
    <h4>Email :${users[0].email}</h4>`

})

    
}
