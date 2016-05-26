"use strict"

function razdeliGlasoveRandomIVratiBodovaneStudente(){
	var i=0;
	var res = [];
	while(i<5){
		var cur=Math.floor((Math.random() * 100) + 1)% nizStudenata.length;
		if (nizStudenata[cur].brPoena == 0){
			console.log("Dodajem studenta sa idom " + nizStudenata[cur].id);
			nizStudenata[cur].brPoena = ++i;
			res.push(nizStudenata[cur]);
		}
	}
	return res;
}
function jaGlasam(){
	var i=0;
	var res = [];
	for(var i=0; i<5; i++){
		nizStudenata[i].brPoena=5-i;
		res.push(nizStudenata[i]);
	}
	return res;
}
function sortiraj(){
	var sortirano=[];
	for(var i=0; i<nizStudenata.length; i++){
		sortirano[i]=nizStudenata[i];
	}
	for(var i=0; i<sortirano.length-1; i++){
		for(var j=i+1; j<sortirano.length; j++){
			if(sortirano[i].brPoena < sortirano[j].brPoena){
				var std = sortirano[i];
				sortirano[i] = sortirano[j];
				sortirano[j] = std;
			}
		}
	}
	// var s;
	// for(var i=0; i<sortirano.length; i++){
	// 	s+=String(sortirano[i].brPoena)+ " ";
	// }
	// window.alert(s);
	return sortirano;
}
function daj3Najbolja(){
	var sortirano = sortiraj();
	var res = [];
	var prvoMesto = [];
	var drugoMesto = [];
	var treceMesto = [];
	var temp = sortirano[0].brPoena;
	var cur=0;
	while(cur<nizStudenata.length && sortirano[cur].brPoena == temp){
		prvoMesto.push(sortirano[cur]);
		cur++;
	}
	if(cur<nizStudenata.length){
		temp=sortirano[cur].brPoena;
	}
	while(cur<nizStudenata.length && sortirano[cur].brPoena == temp){
		drugoMesto.push(sortirano[cur]);
		cur++;
	}
	if(cur<nizStudenata.length){
		temp=sortirano[cur].brPoena;
	}
	while(cur<nizStudenata.length && sortirano[cur].brPoena == temp){
		treceMesto.push(sortirano[cur]);
		cur++;
	}
	console.log("prvo mesto:\n");
	for(var i=0; i<prvoMesto.length; i++){
		console.log(prvoMesto[i].id + "\n");
	}
	console.log("drugo mesto:\n");
	for(var i=0; i<drugoMesto.length; i++){
		console.log(drugoMesto[i].id + "\n");
	}
	console.log("trece mesto:\n");
	for(var i=0; i<treceMesto.length; i++){
		console.log(treceMesto[i].id + "\n");
	}
	res.push(prvoMesto);
	res.push(drugoMesto);
	res.push(treceMesto);
	return res;
}

function prikazi3Najbolja(){

	var top3 = [];
	top3 = daj3Najbolja();
	var top33;
	for(var i=0; i<3; i++){
		if(i==0){
			top33 = document.getElementById('gold');
			while (top33.hasChildNodes()) {   
    			top33.removeChild(top33.firstChild);
			}
			var naslov = document.createElement("h3");
			var textNaslova = document.createTextNode("Prvo mesto("+top3[0][0].brPoena+" poen(a))");
			naslov.appendChild(textNaslova);
			top33.appendChild(naslov);
		} else if(i==1){
			top33 = document.getElementById('silver');	
			while (top33.hasChildNodes()) {   
    			top33.removeChild(top33.firstChild);
			}	
			var naslov = document.createElement("h3");
			if(top3[1].length>0)
				var textNaslova = document.createTextNode("Treće mesto("+top3[1][0].brPoena+" poen(a))");
			else
				var textNaslova = document.createTextNode("Nema studenata koji su drugo mesto.");
			naslov.appendChild(textNaslova);
			top33.appendChild(naslov);	
		} else {
			top33 = document.getElementById('bronze');
			while (top33.hasChildNodes()) {   
    			top33.removeChild(top33.firstChild);
			}
			var naslov = document.createElement("h3");
			if(top3[2].length>0)
				var textNaslova = document.createTextNode("Treće mesto("+top3[2][0].brPoena+" poen(a))");
			else
				var textNaslova = document.createTextNode("Nema studenata koji su treće mesto.");
			naslov.appendChild(textNaslova);
			top33.appendChild(naslov);
		}
		for(var j=0; j<top3[i].length; j++){
			var a=document.createElement("a");
			var img=document.createElement("img");
			img.src=top3[i][j].srcStranice;
			img.className=top3[i][j].klasa;
			img.title=top3[i][j].fullName;
			a.href=top3[i][j].srcSlike;
			a.target="_blank";
			a.appendChild(img);
			top33.appendChild(a);
		}
	}
	for(var i=0; i<3; i++){
		if(i==0){
				top33 = document.getElementById('goldh');
			} else if(i==1){
				top33 = document.getElementById('silverh');			
			} else {
				top33 = document.getElementById('bronzeh');
			}
	}
}
function raspodeliPrimljeneGlasove(){
	var prviBrInd;
	var drugiBrInd;
	var treciBrInd;
	var cetvrtiBrInd;
	var petiBrInd;
	var prvo = document.getElementById("birajPrvoMesto");
	prviBrInd=prvo.options[prvo.selectedIndex].value;
	var drugo = document.getElementById("birajDrugoMesto");
	drugiBrInd=drugo.options[drugo.selectedIndex].value;
	var trece = document.getElementById("birajTreceMesto");
	treciBrInd=trece.options[trece.selectedIndex].value;
	var cetvrto = document.getElementById("birajCetvrtoMesto");
	cetvrtiBrInd=cetvrto.options[cetvrto.selectedIndex].value;
	var peto = document.getElementById("birajPetoMesto");
	petiBrInd=peto.options[peto.selectedIndex].value;
	var ind1;
	var ind2;
	var ind3;
	var ind4;
	var ind5;
	if(prviBrInd==11){
		ind1=0;
	} else {
		if(prviBrInd==22){
			ind1=1;
		} else{
			ind1=prviBrInd-33;
		}
	}
	if(drugiBrInd==11){
		ind2=0;
	} else {
		if(drugiBrInd==22){
			ind2=1;
		} else{
			ind2=drugiBrInd-33;
		}
	}
	if(treciBrInd==11){
		ind3=0;
	} else {
		if(treciBrInd==22){
			ind3=1;
		}else{
			ind3=treciBrInd-33;
		}
	}
	if(cetvrtiBrInd==11){
		ind4=0;
	} else {
		if(cetvrtiBrInd==22){
			ind4=1;
		}else{
			ind4=cetvrtiBrInd-33;
		}
	}
	if(petiBrInd==11){
		ind5=0;
	} else {
		if(petiBrInd==22){
			ind5=1;
		}else{
			ind5=petiBrInd-33;
		}
	}
	if(ind1!=ind2 && ind1!=ind3 && ind1!=ind4 && ind1!=ind5 && ind2!=ind3 && ind2!=ind4 && ind2!=ind5 && ind3!=ind4 && ind3!=ind5 && ind4!=ind5){
		nizStudenata[ind1].brPoena+=5;
		nizStudenata[ind2].brPoena+=4;
		nizStudenata[ind3].brPoena+=3;
		nizStudenata[ind4].brPoena+=2;
		nizStudenata[ind5].brPoena+=1;
		for(var i=0; i<nizStudenata.length; i++){
			console.log("Student sa id="+nizStudenata[i].id+" ima "+ nizStudenata[i].brPoena+" poena");
		}
		prikazi3Najbolja();
	} else {
		alert("Nije moguće da istom studentu date više glasova, ponovite glasanje.");
	}
}
