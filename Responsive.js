


const centerDiv = document.getElementById('centerDiv');

fetch("https://jsonplaceholder.typicode.com/photos?_limit=10 ")
.then( (res)=>res.json())
.then ((jsondata) => {
jsondata.map((val)=>{
 key = val.id;
 let img = document.createElement("img");
 img.src= `https://picsum.photos/200/300?random=${val.id}`;
 centerDiv.appendChild(img);
 console.log(val.url)


})

});