var x=0;
var qute=new Array("“Be yourself; everyone else is already taken.”", "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“So many books, so little time.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“A room without books is like a body without a soul.”");
var auth=new Array("― Oscar Wilde", "― Marilyn Monroe", "― Frank Zappa","― Albert Einstein","― Marcus Tullius Cicero");

function genrate(){
    
   x= Math.floor(Math.random() * (4- 0)) + 0; 

   while(    document.getElementById("qute").innerHTML ==qute[x]){
    x= Math.floor(Math.random() * (4 - 0)) + 0; 

   }
    document.getElementById("qute").innerHTML = qute[x];

    document.getElementById("auther").innerHTML =auth[x]; 

}