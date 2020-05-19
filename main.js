//大域変数
var q1; //答えの画像の番号
var q2;
var q3;
var a1 = 1; //解答の画像の番号
var a2 = 2;
var a3 = 3;
//-----------------------------

function shuffle()
{
  var elm=document.getElementsByTagName("img");
  //var e = document.getElementById("line1");
  var i = 0, k = 0;  
  var h = new Array(3);
     
  for(i = 0; i < h.length; i++){
          h[i] = 0;
  }

  i = 0;
  while(i < 3){
  	k = Math.round(Math.random()*100)%3;
  	if(h[k] == 0){
    	h[k] = i + 1;
        i++;
		
		if(k == 0) q1 = i;
		else if(k == 1) q2 = i;
		else if(k == 2) q3 = i;
	}

  }
              
  for(i = 0; i < 3; i++){
    elm[i].src="../../images/"+h[i]+".jpg";    
  }
    //e.innerHTML = "再スタートはここをクリック。";

	setTimeout(hide, 1000); //タイマー
}

function init()
{
	var elm=document.getElementsByTagName("img");
	//var e1 = document.getElementById("line1");
	var e = document.getElementById("line2");

	for(i = 1; i < 4; i++){
    	elm[i-1].src="../../images/"+i+".jpg";    
	}
	for(i = 1; i < 4; i++){
    	elm[i+2].src="../../images/"+i+".jpg";    
	}

	//e1.innerHTML = "ここをクリックして、スタート！！";
	e.innerHTML = "↓↓　回答欄　↓↓";
}

function next1()
{
	var elm=document.getElementsByTagName("img");
	//var e = document.getElementById("line1");
	a1++;
	if(a1 == 4) a1 = 1;
	elm[3].src = "../../images/"+a1+".jpg";
}
function next2()
{
	var elm=document.getElementsByTagName("img");
	//var e = document.getElementById("line1");
	a2++;
	if(a2 == 4) a2 = 1;
	elm[4].src = "../../images/"+a2+".jpg";
}
function next3()
{
	var elm=document.getElementsByTagName("img");
	//var e = document.getElementById("line1");
	a3++;
	if(a3 == 4) a3 = 1;
	elm[5].src = "../../images/"+a3+".jpg";
}

function hide()
{
	var elm=document.getElementsByTagName("img");
	var i = 0;
	for(i = 0; i < 3; i++){
		elm[i].src = "../../images/qmark.jpg";
	}
}

function answer()
{
	var elm=document.getElementsByTagName("img");
	var e = document.getElementById("line2");
	elm[0].src = "../../images/"+q1+".jpg";
	elm[1].src = "../../images/"+q2+".jpg";
	elm[2].src = "../../images/"+q3+".jpg";
	
	if(q1 == a1 && q2 == a2 && q3 ==a3){
 		e.innerHTML = "正解！！　すごい！！";
	}else{
		e.innerHTML = "残念...　またチャレンジしてね！";
	}
}
