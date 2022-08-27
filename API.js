function clickd(){
   fetch('https://jsonplaceholder.typicode.com/photos')
   .then(res => res.json())
   .then(json => nextFunction(json))
}

function nextFunction(json){
    const div = document.getElementById('api-lode');
    for( const valu of json){
        const newDiv =document.createElement('div');
        newDiv.classList.add('newDiv')
        newDiv.innerHTML= `
            <h3 class='rk'>${valu.id} </h3>
            <h3 class='rk'>title:: ${valu.title} </h3>
            <h4 class='rk'>url :: ${valu.url} </h4>
            <h4 class='rk'>thumbnailUrl :: ${valu.thumbnailUrl} </h4>

        `
        div.appendChild(newDiv)
    }
}
