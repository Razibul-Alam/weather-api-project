
        const appid='7c6df41e74367d41cd8d4c4e0f3112a4'
// the function is used for search name search field and getting a meal***
  function button(){
        const searchFeild=document.getElementById('search').value;
        console.log(searchFeild)
        if (searchFeild.length<1) {
            alert('write a name or letter')
        }else{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFeild}`)
.then(res=>res.json())
. then(data=>mainApi(data.meals))
        }



}

function mainApi(info){
    console.log(info)
    let div=document.getElementById('maindiv')
    div.innerHTML=''
    info.map(data=>{const newdiv=document.createElement('div')
    newdiv.className='newDiv col-lg-4'
        const divInfo=`
        <div class="">
  <div class="">
    <div class="card h-100">
      <img src=${data.strMealThumb} class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${data.strMeal}</h5>
        <button type="button" onclick="showDetail(${data.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show details
      </button>
      </div>
    </div>
  </div>
</div>
        `
newdiv.innerHTML=divInfo;
div.appendChild(newdiv);})
    
       
}

const showDetail=(id)=>{
    console.log(id)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
.then(res=>res.json())
. then(data=>{
    
    console.log(data.meals[0])
    const{strMeal,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=data.meals[0]
    console.log(strMeal,strIngredient1)
    const foodDetail=document.getElementById('foodDetail')
    foodDetail.innerHTML=`<h4>${strMeal}</h4>
    <li>${strIngredient1}</li>
    <li>${strIngredient2}</li>
    <li>${strIngredient3}</li>
    <li>${strIngredient4}</li>
    <li>${strIngredient5}</li>`

})

    
}
