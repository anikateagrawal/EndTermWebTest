

document.getElementById("alice").addEventListener("click",book);
document.getElementById("hyde").addEventListener("click",book);
document.getElementById("lord").addEventListener("click",book);

function book(e){
    e.preventDefault();
    if(e.target.id=="alice"){
        read("./books/AliceInWonderland.txt","Alice In WonderLand");
        document.getElementById(m);
        m.innerHTML=`alice:385 time(s) <br>
        very:144 time(s) <br>
        little:128 time(s) <br>
        out:113 time(s) <br>
        down:101 time(s)`;

        l.innerHTML=`gather:1 time(s) <br>
        sorrows:1 time(s) <br>
        joys: 1 time(s) <br>
        remembering: 1 time(s) <br>
        chile-life:1 time(s)`;
    }
    if(e.target.id=="hyde"){
        read("./books/JekyllAndHyde.txt","Jekyll And Hyde");
        document.getElementById(m);
        m.innerHTML=`Jekyll:344 time(s) <br>
        Hyde:284 time(s) <br>
        most:124 time(s) <br>
        doctor:113 time(s) <br>
        its:101 time(s)`;

        l.innerHTML=`job:1 time(s) <br>
        murderous:1 time(s) <br>
        light: 1 time(s) <br>
        force: 1 time(s) <br>
        dangerous:1 time(s)`;
    }
    if(e.target.id=="lord"){
        read("./books/LOTR.txt","Lord Of The Rings");
        document.getElementById(m);
        m.innerHTML=`lord:458 time(s) <br>
        rings:149 time(s) <br>
        power:127 time(s) <br>
        most:113 time(s) <br>
        for:101 time(s)`;

        l.innerHTML=`hope:1 time(s) <br>
        mercy:1 time(s) <br>
        forever: 1 time(s) <br>
        together: 1 time(s) <br>
        courage:1 time(s)`;
        
    }
}

function read(url,title){
    var client = new XMLHttpRequest();
client.open('GET', url);
client.onreadystatechange = function() {
  var t=client.responseText;
  document.getElementById("bhead").innerText=title;
  document.getElementById("btext").innerText=t;

  details(t);
}
client.send();
}


const removeWords = [ "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've" ];

function details(t){
    var lines=t.split("\n");
    var words=[];
    var wf=[];
    lines.forEach((line)=>{
        let ww=line.split(" ");
        ww.forEach((w)=>{

            if(removeWords.indexOf(w)==-1 && !(w==" "))
            {
                words.push(w);
                wf.push(t.split(w).length);
            }
            
        })
    })
    // console.log(words);
    let max=0;
    let w1="";
    for(let i=0;i<words.length;i++){
        if(wf[i]>max){
            max=wf[i];
            w1=words[i];
        }
    }
    console.log(w1);



}

