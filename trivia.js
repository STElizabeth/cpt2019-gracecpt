var score = 0
var i = 1
var ans = 1

function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
    if (ans===1){
        y = document.getElementById("qans").value
        if(yy==="C"){
            document.getElementById("question").value="You are right"
            var audio = new Audio('correct.mp3');
	        audio.play();
            document.searchImage.src ="smile.gif"
            score++
        
        }
        else {
           document.getElementById("question").value="You are wrong"
           var audio = new Audio('incorrect.mp3');
	       audio.play();
             document.searchImage.src ="sad.gif"
            score++

        
        }
    document.view.qscore.value=score
    }
    else if (ans===2){ 
	   y = document.getElementById("qans").value
       if(yy==="B"){
            document.getElementById("question").value="You are right"
            var audio = new Audio('correct.mp3');
	        audio.play();
           document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"

        
    }
    document.view.qscore.value=score
}
    
    else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"
	

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
    else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
	document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"

        
    }
    document.view.qscore.value=score
}
    else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
 	audio.play();
        document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
	document.searchImage.src ="sad.gif"
        
    }
    document.view.qscore.value=score
}
    else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"
	

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
      //   var audio = new Audio('correct.mp3');
	//audio.play();
        document.searchImage.src ="smile.gif"
	

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
      //   var audio = new Audio('incorrect.mp3');
	//audio.play();
        document.searchImage.src ="sad.gif"
     

        
    }
    document.view.qscore.value=score
}
    else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
       //  var audio = new Audio('correct.mp3');
	audio.play();
        
	
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('incorrect.mp3');
	audio.play();
document.searchImage.src ="sad.gif"
    }
    document.view.qscore.value=score
}
    else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"

    }
    document.view.qscore.value=score
}
    else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
    }
    document.view.qscore.value=score
}

    else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
    else if (ans===12){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
    else if (ans===13){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
	document.searchImage.src ="sad.gif"
        
    }
    document.view.qscore.value=score
}
    else if (ans===14){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
    else if (ans===15){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"
	

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
    
    }
    document.view.qscore.value=score
}
    else if (ans===16){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
    }
    document.view.qscore.value=score
}
    else if (ans===17){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
        
    }
    document.view.qscore.value=score
}
    else if (ans===18){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"
	

         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
	document.searchImage.src ="sad.gif"
        
    }
    document.view.qscore.value=score
}
    else if (ans===19){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"
	
    }
    document.view.qscore.value=score
}
    else if (ans===20){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         var audio = new Audio('correct.mp3');
	audio.play();
        document.searchImage.src ="smile.gif"


         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
         var audio = new Audio('incorrect.mp3');
	audio.play();
        document.searchImage.src ="sad.gif"

    }
    document.view.qscore.value=score
  }
	
    ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What year was the movie The Outsiders made in? \na)1981 \nb)1979 \nc)1983 \nd)1999";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="This popular filmmaker directed the 1994 movie Pulp Fiction:\na) Steven Spielberg \nb) Quentin Tarantino \nc) Stanley Kubrick \nd) Alfred Hitchcock";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which actor played Pennywise in Stephen Kings It (2017)? \na) Bill Skarsgard \nb) Tom Hanks \nc) Tim Curry \nd) Finn Wolfhard";
    document.view.qans.value=""
}
    else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following movies fits this description: A young girl moves to a new school after living elsewhere, where she falls into the hands of an A-list girl clique and soon becomes one of them. \na) Reality High \nb) High School Musical \nc) Mean Girls \nd) The Breakfast Club";
    document.view.qans.value=""
    } 
       else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of these classic horror films is based off of a book? \na) Halloween \nb) Friday the 13th \nc) Scream \nd) The Shining";
    document.view.qans.value=""
    } 
    else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which year was The Wizard of Oz made? \na) 1980 \nb) 1945 \nc) 1984 \nd) 1939";
    document.view.qans.value=""
    } 
 
 else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of these movies was not directed by Al Pacino? \na) The Dark Tower \nb) Scarface \nc) The Godfather \nd) Hangman ";
     
    document.view.qans.value=""
    } 
    else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which actress played the lead role in The Hunger Games? \na) Jennifer Lawrence \nb) Scarlett Johansson \nc) Emma Watson \nd) Angelina Jolie";
    document.view.qans.value=""
    } 
      else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What actor starred in The Outsiders and Karate Kid? \na) Gary Wallace \nb) Johnny Depp \nc) Ralph Macchio \nd) Jaden Smith";
    document.view.qans.value=""
    } 
     else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What book is the movie Stand By Me based on? \na) It \nb) Pet Sematary \nc) Misery \nd) The Body";
    document.view.qans.value=""
    } 
         else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What actor(s) has played both a superhero, and Sherlock Holmes? \na) Robert Downey Jr \nb) Benedict Cumberbatch \nc) Ben Affleck \nd) Both a) and b)";
    document.view.qans.value=""
    } 
    
         else if (i===12){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not a Disney Channel original movie?\na) Camp Rock \nb) Cadet Kelly \nc) Shes the Man \nd) Cow Bells";
    document.view.qans.value=""
    } 
     else if (i===13){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not a John Hughes movie? \na) Home Alone \nb) Good Will Hunting \nc) Sixteen Candles \nd) Weird Science";
         document.view.qans.value=""
    } 
       else if (i===14){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What movie is the number one highest grossing film of all time? \na) Avengers: Endgame \nb) Titanic \nc) Avatar \nd) Star Wars: The Force Awakens";
         document.view.qans.value=""
    } 
         else if (i===15){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these actors has not won an oscar? \na) Robert Downey Jr \nb) Cate Blanchett \nc) Rami Malek \nd) Brie Larson";
         document.view.qans.value=""
    } 
    else if (i===16){
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of of the following movies was not based on a book? \na) The Giver \nb) Jurassic Park \nc) Rocky \nd) Little Women";
         document.view.qans.value=""
    } 
       else if (i===17){
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the lead actress in A Walk to Remember? \na) Cameron Diaz \nb) Mila Kunis \nc) Alicia Silverstone \nd) Mandy Moore";
         document.view.qans.value=""
    } 
        else if (i===18){
	document.view.qnum.value=i;	
	document.view.question.value ="What movie is the line Nobody puts baby in a corner from? \na) Footloose \nb) Dirty Dancing \nc) Pretty in Pink \nd) Crybaby";
         document.view.qans.value=""
    } 
       else if (i===19){
	document.view.qnum.value=i;	
	document.view.question.value ="Which movie was the first to be in colour? \na) Metropolis \nb) Citizen Kane \nc) The Third Man \nd) The Wizard of Oz";
         document.view.qans.value=""
    } 
    
    else if (i===20){
	document.view.qnum.value=i;	
	document.view.question.value ="Which movie was the first full-length animated movie? \na) Snow White and the Seven Dwarfs \nb) Spirited Away \nc) The Lion King \nd) Fantasia";
         document.view.qans.value=""
    } 
        else {
    mark=score*10
    if(mark >= 80){
	document.write("Congrats you got ",mark, " %" )
	document.write("<img src='goodscore.gif'>")
	var audio = new Audio('correct.mp3');
	    audio.play();
	 

     }
     else {
	document.write("Sorry you got ",mark, " %")
	document.write("<img src='badscore.gif'>")
	var audio =  new Audio('incorrect.mp3');
	audio.play(); 
     } 
        }
	
	
	i++;

}