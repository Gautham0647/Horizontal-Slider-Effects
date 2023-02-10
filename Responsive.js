


const centerDiv = document.getElementById('centerDiv');

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20 ")
.then( (res)=>res.json())
.then ((jsondata) => {
jsondata.map((val)=>{
 key = val.id;
 let img = document.createElement("img");
 img.src= `https://picsum.photos/200/350?random=${val.id}`;
 centerDiv.appendChild(img);
 console.log(val.url)


})

});