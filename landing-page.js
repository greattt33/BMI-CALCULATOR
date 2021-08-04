
var figure=[];
var realWeight=[];
var realheight=[];
document.getElementById("one").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("one").value);

});
document.getElementById("zero").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("zero").value);

});
document.getElementById("two-zero").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("two-zero").value);

});
document.getElementById("point").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("point").value);

});


document.getElementById("two").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("two").value)
});
document.getElementById("three").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("three").value);
});
document.getElementById("four").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("four").value);
});
document.getElementById("five").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("five").value);
});
document.getElementById("six").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("six").value);
});
document.getElementById("seven").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("seven").value);
});
document.getElementById("eight").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("eight").value);
});
document.getElementById("nine").addEventListener("click",()=>{	
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	figure.push(document.getElementById("nine").value);
});
document.getElementById("clear").addEventListener("click",()=>{
	figure=[];
	realWeight=[];
	realheight=[];
	document.querySelector("#screen p").innerHTML=figure;
	document.querySelector("meter").value=0;
	document.querySelector("output").value=0;
})

document.getElementById("weight").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	var weight= numBar
	realWeight.push(weight);
	figure=[];
})

document.getElementById("height").addEventListener("click",()=>{
	var numBar=figure.join("");
	document.querySelector("#screen p").innerHTML=numBar;
	var height= numBar
	realheight.push(height);
	figure=[];
})

document.getElementById("enter").addEventListener("click",()=>{
	var result=(realWeight[0])/((realheight[0]/100)*(realheight[0]/100));
	document.querySelector("output").value=Math.round(result);
	
	document.querySelector("meter").value=Math.round(result);
	
})
