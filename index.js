fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=7c6df41e74367d41cd8d4c4e0f3112a4")
.then(res=>res.json())
.then(data=>mainApi(data))

function newElement(){
    const div=document.getElementById('maindiv')
    const newdiv=document.createElement('div')
    newdiv.innerHTML=`<h1>hello world</h1>
    <h1>hello bangladesh</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, officia!</p>`;
    
    div.appendChild(newdiv);
}

function mainApi(info){
const searchInput=document.getElementById('search')
const button=document.getElementById('button')
button.addEventListener('click',function(){
// searchInput.value=info

const div=document.getElementById('maindiv')
    const newdiv=document.createElement('div')
    newdiv.className='newDiv'
    newdiv.innerHTML=`<h1> temperature:${info.main.temp}</h1>
    <h1>Humidity:${info.main.humidity}</h1>
    <p>${info.name}</p>`;
    
    div.appendChild(newdiv);
     console.log(info)
})
}

