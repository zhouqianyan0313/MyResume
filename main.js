window.onload=function(){
	var ul=document.getElementsByTagName("ul")[0];
	var lis=ul.getElementsByTagName("li");
	var oInformation=document.getElementById("information");
	var oDivs=oInformation.getElementsByTagName("div");

	for (var i=0; i<lis.length; i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for (var j=0; j<oDivs.length; j++){
				oDivs[j].style.display="none";
			}
			oDivs[this.index].style.display="block";
		}
	}

}