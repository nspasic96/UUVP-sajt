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
	cur=0;
	while(sortirano[cur].brPoena == temp){
		prvoMesto.push(sortirano[cur]);
		cur++;
	}
	temp=sortirano[cur].brPoena;
	while(sortirano[cur].brPoena == temp){
		drugoMesto.push(sortirano[cur]);
		cur++;
	}
	temp=sortirano[cur].brPoena;
	while(sortirano[cur].brPoena == temp){
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
	for(var i=0; i<3; i++){
		var mesto=document.createTextNode(String(i+1) + ". mesto:");
		top33= document.getElementById('top3');
		top33.appendChild(mesto);
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
}