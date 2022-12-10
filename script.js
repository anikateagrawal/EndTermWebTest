

(Array.from(document.getElementsByTagName("a"))).forEach((a)=>{
    console.log("assd");
    a.addEventListener("click",book);
});


function book(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id=="alice"){
        read("./books/AliceInWonderland.txt","Alice In WonderLand");
    }
    if(e.target.id=="hyde"){
        read("./books/JekyllAndHyde.txt","Jekyll And Hyde");
    }
    if(e.target.id=="lord"){
        read("./books/LOTR.txt","Lord Of The Rings");
    }
}

function read(url,title){
    var client = new XMLHttpRequest();
client.open('GET', url);
client.onreadystatechange = function() {
  var t=client.responseText;
  document.getElementById("bhead").innerText=title;
  document.getElementById("btext").innerText=t;
}
client.send();
}

