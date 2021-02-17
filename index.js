
        const appid='7c6df41e74367d41cd8d4c4e0f3112a4'

  function button(){
        const searchFeild=document.getElementById('search').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchFeild}&appid=${appid}`)
.then(res=>res.json())
. then(data=>mainApi(data))


function mainApi(info){
    const div=document.getElementById('maindiv')
    const newdiv=document.createElement('div')
    newdiv.className='newDiv'
    newdiv.innerHTML=`<h1> temperature:${info.main.temp}</h1>
    <h1>Humidity:${info.main.humidity}</h1>
    <p>${info.name}</p>`;
    
    div.appendChild(newdiv);   
}
}


