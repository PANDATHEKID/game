var roll=document.getElementById("roll");//the div that has roll in it
var num=document.getElementById("dis-num");//the div that contains the display number of roll
//the id's of the cells
var box_1=document.getElementById("box-1");
var box_11=document.getElementById("box-11");
var box_3=document.getElementById("box-3");
var box_4=document.getElementById("box-4");
var box_2=document.getElementById("box-2");
var box_5=document.getElementById("box-5");
var box_6=document.getElementById("box-6");
var box_7=document.getElementById("box-7");
var box_8=document.getElementById("box-8");
var box_9=document.getElementById("box-9");
var box_10=document.getElementById("box-10");
var box_12=document.getElementById("box-12");
var box_13=document.getElementById("box-13");
var box_14=document.getElementById("box-14");
var box_15=document.getElementById("box-15");
var box_16=document.getElementById("box-16");
var box_17=document.getElementById("box-17");
var box_18=document.getElementById("box-18");
var box_19=document.getElementById("box-19");
var box_20=document.getElementById("box-20");
var a_1=document.getElementById("A1");// the flag over 1A(first)
var a_2=document.getElementById("A2");//the flag over 1A(second)
var b_1=document.getElementById("B1");// the flag over 1B(first)
var b_2=document.getElementById("B2");//the flag over 1B(second)
var turn=document.getElementById("turn");//contains the dislay of whose turn it is
var tokenB=document.getElementById("tokenB");
var tokenA=document.getElementById("tokenA");
var playerA=document.getElementById("playerA");
var playerB=document.getElementById("playerB");
var check_turn=document.getElementById("my-turn");
var go=document.getElementById("go");
var body=document.getElementsByTagName("body")[0];
var form=document.forms.myform;
var i=0;
var nA1=1;//the number of the classname for A1 i.e after the roll the respective classname's number
var nA2=1;//the number of the classname for A2 i.e after the roll the respective classname's number
var nB1=1;//the number of the classname for A3 i.e after the roll the respective classname's number
var nB2=1;//the number of the classname for A4 i.e after the roll the respective classname's number
var strA1="";//stores the current class of A1 i.e the previous class of the die roll
var strA2="";//stores the current class if A2
var strB1="";//stores the current class if B1
var strB2="";//stores the current class if B2
//classname stores the current class
var n;
var classnameA1;//it is the current class for A1
var classnameA2;//it is the current class for A2
var classnameB1;//it is the current class for B1
var classnameB2;//it is the current class for B2
//the down onclick event make the tockens come out automatically
//a_1.classList.toggle("box-2A");
//a_2.classList.toggle("box-1A2");
//b_2.classList.toggle("box-12B2");
//b_1.classList.toggle("box-11B");

//intially at home both have the same number so must be 2A.

a_1.innerHTML="2A";
a_2.innerHTML="";
b_1.innerHTML="2B";
b_2.innerHTML="";
go.onclick=function(){
	n=form.select.value;
	var random;
	if(n<=6 && n>0)
		random=n;
	else 
		alert("Enter a number from 1 to 6");
	function final()
	{
		if(a_1.className=="box-20A" && a_2.className=="box-20A2")
		{
			body.innerHTML="CONGRATULATIONS PLAYER A..... WINNER WINNER CHICKEN DINNER";
			body.style.fontSize="80px";
		}
		else if(b_1.className=="box-20B" && b_2.className=="box-20B2")
		{
			body.innerHTML="CONGRATULATIONS PLAYER B..... WINNER WINNER CHICKEN DINNER";
			body.style.fontSize="80px";
		}
	}		
	num.innerHTML=random;
	function moveautoA1(token1)
	{//will only move token 1 to box-1 and box-1 is empty
		token1.classList.toggle("box-1A");
	}
	function moveautoB1(token2) 
	{//will only move token 1 to box-1 and box-1 is empty
		token2.classList.toggle("box-1B");
	}
	function moveautoA2(token5)
	{//move the second tocken i.e A2 to box-1 
		token5.classList.toggle("box-1A2");
	}
	function moveautoB2(token6)
	{//move the second tocken i.e A2 to box-1 
		token6.classList.toggle("box-1B2");
	}
	function checkinvalidA()
	{
		if(nA1>20)
		{
			alert("invalid move");
			nA1=nA1-random;
		}
		else if(nA2>20)
		{
			alert("invalid move");
			nA2=nA2-random;
		}
	}
	function checkinvalidB()
	{
		if(nB1>20)
		{
			alert("invalid move");
			nB1=nB1-random;
		}
		else if(nB2>20)
		{
			alert("invalid move");
			nB2=nB2-random;
		}
	}
	function moveA1(token3)
	{
		nA1=nA1+random;
		//the down one will give an alert if the token is going more than 20 for A
		checkinvalidA();
		if(nA1<=20){
		classnameA1="box-" + nA1 +"A";
		token3.className="";
		token3.classList.toggle(classnameA1);
		}
		else
		console.log("hey");
		random=0;
	}
	function moveA2(token4)
	{
		nA2=nA2+random;
		checkinvalidA();
		if(nA2<=20)
		{
			classnameA2="box-"+ nA2 +"A2";
			token4.className="";
			token4.classList.toggle(classnameA2);
		}
		else
		{
			console.log("hey");
		}
		random=0;
	}
	function moveB1(token7)
	{
		nB1=nB1+random;
		checkinvalidB();
		if(nB1<=20)
		{
			classnameB1="box-"+ nB1 +"B";
			token7.className="";
			token7.classList.toggle(classnameB1);
		}
		else{
			console.log("hey");
		}
		random=0;
	}
	function moveB2(token8)
	{
		nB2=nB2+random;
		checkinvalidB();
		if(nB2<=20)
		{
			classnameB2="box-"+ nB2 +"B2";
			token8.className="";
			token8.classList.toggle(classnameB2);
		}
		else{
			console.log("hey");
		}
		random=0;
	}

	//check function checks if two tockens of the same player are in the same box and if yes then makes the changes
	function checkA(tokenone,tokentwo){
		if(tokenone.className.slice(4,6)== tokentwo.className.slice(4,6))
		{
			
			tokenone.innerHTML="2A";
			tokentwo.innerHTML="";
		}
		else{
			tokenone.innerHTML="1A";
			tokentwo.innerHTML="1A";
		}
	}
	function checkB(tokenone,tokentwo){
		if(tokenone.className.slice(4,6)== tokentwo.className.slice(4,6))
		{
			tokenone.innerHTML="2B";
			tokentwo.innerHTML="";
		}
		else
		{
			tokenone.innerHTML="1B";
			tokentwo.innerHTML="1B";
		}
	}
	
	//if i==0 player A's turn and if i==1 player B's turn.
	if(i==0)//to change the contents of turn and player A's turn
	{	//A's turn
		turn.innerHTML="TURN: PLAYER B";
		check_turn.innerHTML="TURN: PLAYER B";
		if(random==6 && a_1.className=="" && a_2.className=="")//here both the tockens of A are present in home. First move A1 
		{
			moveautoA1(a_1);
			strA1="box_1A";//storing A1 classname in store
			a_1.innerHTML="1A";
			a_2.innerHTML="1A";
		}
		else if(random==6 && a_2.className=="" && a_1.className!="")
		{
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				a_2.innerHTML="1A";
				a_1.innerHTML="1A";
			};

			a_2.onclick=function(){
				moveautoA2(a_2);
				strA2="box-1A2";//storing A2 classname in store
				checkA(a_1,a_2);
			};		
		}
		else if(a_1.className!="" && a_2.className!=""){
						console.log("3");
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				checkA(a_1,a_2);
			};
			a_2.onclick=function(){
				moveA2(a_2);
				strA2=classnameA2;
				checkA(a_1,a_2);
			};
		}
		else if(random!=6 && a_1.className!="" && a_2.className=="")
		{
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				checkA(a_1,a_2);
			};
			
		}
		i=1;
		final();
	}
	else if(i==1)//B's turn
	{	
		turn.innerHTML="TURN: PLAYER A";
		check_turn.innerHTML="TURN: PLAYER B";
		if(random==6 && b_1.className=="" && b_2.className=="" )//here both the tockens of A are present in home. First move A1 
		{
			moveautoB1(b_1);
			strB1="box_1B";//storing A1 classname in store
			b_1.innerHTML="1B";
			b_2.innerHTML="1B";
		}
		else if(random==6 && b_2.className=="" && b_1.className!=""  )
		{
			//here possibility is there that one might take out one tocken or one might continue with the tocken that is already out
				b_2.onclick=function(){
				moveautoB2(b_2);
				strB2="box-1B2";//storing A2 classname in store
				checkB(b_1,b_2);
				};
				b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				b_2.innerHTML="1B";
				b_1.innerHTML="1B";
				};
		}
		else if(b_1.className!="" && b_2.className!=""){
			b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				checkB(b_1,b_2);
			};
			b_2.onclick=function(){
				moveB2(b_2);
				strB2=classnameB2;
				checkB(b_1,b_2);
			};
		}
		else if(random!=6 && b_1.className!="" && b_2.className=="")
		{
			b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				checkB(b_1,b_2);
			};
		}
		i=0;
		final();
	}
};

roll.onclick=function()
{
	//the down one will give an alert if the token is going more than 20 for A
	function final()
	{
		if(a_1.className=="box-20A" && a_2.className=="box-20A2")
		{
			body.innerHTML="CONGRATULATIONS PLAYER A..... WINNER WINNER CHICKEN DINNER";
			body.style.fontSize="80px";
		}
		else if(b_1.className=="box-20B" && b_2.className=="box-20B2")
		{
			body.innerHTML="CONGRATULATIONS PLAYER B..... WINNER WINNER CHICKEN DINNER";
			body.style.fontSize="80px";
		}
	}
	var min=1; 
	var max=7;  
	var random =Math.floor(Math.random() * (+max - +min)) + +min;
	num.innerHTML=random;
	function moveautoA1(token1)
	{//will only move token 1 to box-1 and box-1 is empty
		token1.classList.toggle("box-1A");
	}
	function moveautoB1(token2) 
	{//will only move token 1 to box-1 and box-1 is empty
		token2.classList.toggle("box-1B");
	}
	function moveautoA2(token5)
	{//move the second tocken i.e A2 to box-1 
		token5.classList.toggle("box-1A2");
	}
	function moveautoB2(token6)
	{//move the second tocken i.e A2 to box-1 
		token6.classList.toggle("box-1B2");
	}
	function checkinvalidA()
	{
		if(nA1>20)
		{
			alert("invalid move");
			nA1=nA1-random;
		}
		else if(nA2>20)
		{
			alert("invalid move");
			nA2=nA2-random;
		}
	}
	function checkinvalidB()
	{
		if(nB1>20)
		{
			alert("invalid move");
			nB1=nB1-random;
		}
		else if(nB2>20)
		{
			alert("invalid move");
			nB2=nB2-random;
		}
	}
	function moveA1(token3)
	{
		nA1=nA1+random;
		//the down one will give an alert if the token is going more than 20 for A
		checkinvalidA();
		if(nA1<=20){
		classnameA1="box-" + nA1 +"A";
		token3.className="";
		token3.classList.toggle(classnameA1);
		}
		else
		console.log("hey");
		random=0;
	}
	function moveA2(token4)
	{
		nA2=nA2+random;
		checkinvalidA();
		if(nA2<=20)
		{
			classnameA2="box-"+ nA2 +"A2";
			token4.className="";
			token4.classList.toggle(classnameA2);
		}
		else
		{
			console.log("hey");
		}
		random=0;
	}
	function moveB1(token7)
	{
		nB1=nB1+random;
		checkinvalidB();
		if(nB1<=20)
		{
			classnameB1="box-"+ nB1 +"B";
			token7.className="";
			token7.classList.toggle(classnameB1);
		}
		else{
			console.log("hey");
		}
		random=0;
	}
	function moveB2(token8)
	{
		nB2=nB2+random;
		checkinvalidB();
		if(nB2<=20)
		{
			classnameB2="box-"+ nB2 +"B2";
			token8.className="";
			token8.classList.toggle(classnameB2);
		}
		else{
			console.log("hey");
		}
		random=0;
	}

	//check function checks if two tockens of the same player are in the same box and if yes then makes the changes
	function checkA(tokenone,tokentwo){
		if(tokenone.className.slice(4,6)== tokentwo.className.slice(4,6))
		{
			
			tokenone.innerHTML="2A";
			tokentwo.innerHTML="";
		}
		else{
			tokenone.innerHTML="1A";
			tokentwo.innerHTML="1A";
		}
	}
	function checkB(tokenone,tokentwo){
		if(tokenone.className.slice(4,6)== tokentwo.className.slice(4,6))
		{
			tokenone.innerHTML="2B";
			tokentwo.innerHTML="";
		}
		else
		{
			tokenone.innerHTML="1B";
			tokentwo.innerHTML="1B";
		}
	}
	
	//if i==0 player A's turn and if i==1 player B's turn.
	if(i==0)//to change the contents of turn and player A's turn
	{	//A's turn
		turn.innerHTML="TURN: PLAYER B";
		check_turn.innerHTML="TURN: PLAYER B";
		if(random==6 && a_1.className=="" && a_2.className=="")//here both the tockens of A are present in home. First move A1 
		{
			moveautoA1(a_1);
			strA1="box_1A";//storing A1 classname in store
			a_1.innerHTML="1A";
			a_2.innerHTML="1A";
		}
		else if(random==6 && a_2.className=="" && a_1.className!="")
		{
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				a_2.innerHTML="1A";
				a_1.innerHTML="1A";
			};

			a_2.onclick=function(){
				moveautoA2(a_2);
				strA2="box-1A2";//storing A2 classname in store
				checkA(a_1,a_2);
			};		
		}
		else if(a_1.className!="" && a_2.className!=""){
						console.log("3");
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				checkA(a_1,a_2);
			};
			a_2.onclick=function(){
				moveA2(a_2);
				strA2=classnameA2;
				checkA(a_1,a_2);
			};
		}
		else if(random!=6 && a_1.className!="" && a_2.className=="")
		{
			a_1.onclick=function(){
				moveA1(a_1);
				strA1=classnameA1;
				checkA(a_1,a_2);
			};
			
		}
		i=1;
		final();
	}
	else if(i==1)//B's turn
	{	
		turn.innerHTML="TURN: PLAYER A";
		check_turn.innerHTML="TURN: PLAYER A";
		if(random==6 && b_1.className=="" && b_2.className=="" )//here both the tockens of A are present in home. First move A1 
		{
			moveautoB1(b_1);
			strB1="box_1B";//storing A1 classname in store
			b_1.innerHTML="1B";
			b_2.innerHTML="1B";
		}
		else if(random==6 && b_2.className=="" && b_1.className!=""  )
		{
			//here possibility is there that one might take out one tocken or one might continue with the tocken that is already out
				b_2.onclick=function(){
				moveautoB2(b_2);
				strB2="box-1B2";//storing A2 classname in store
				checkB(b_1,b_2);
				};
				b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				b_2.innerHTML="1B";
				b_1.innerHTML="1B";
				};
		}
		else if(b_1.className!="" && b_2.className!=""){
			b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				checkB(b_1,b_2);
			};
			b_2.onclick=function(){
				moveB2(b_2);
				strB2=classnameB2;
				checkB(b_1,b_2);
			};
		}
		else if(random!=6 && b_1.className!="" && b_2.className=="")
		{
			b_1.onclick=function(){
				moveB1(b_1);
				strB1=classnameB1;
				checkB(b_1,b_2);
			};
		}
		i=0;
		final();
	}
};
