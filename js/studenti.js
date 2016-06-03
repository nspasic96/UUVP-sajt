function getUrlParameters(){
	var params=[
		{
			key: "page",
			value: 1
		},
		{
			key: "npp",
			value: 3
		}
	];
	var url=window.location.href;
	var page=1;
	var npp=3;
	if(url.match(/page=([0-9]+)/)){
		page=url.match(/page=([0-9]+)/)[0].split('=')[1];
	}		
	if(url.match(/npp=([0-9]+)/)){
		npp=url.match(/npp=([0-9]+)/)[0].split('=')[1];
	}	
	params[0].value=page;
	params[1].value=npp;
	return params;

	// var s="parametri su "; 
	// s+="page="+page;
	// s+=" npp="+npp;
 //    window.alert(s);
}
function displayPages(){
	var stranice = document.getElementById('stranice');
    var params = getUrlParameters();
	for(var i=1; i<= (Math.ceil(nizStudenata.length/Number(params[1].value))); i++){
		var div = document.createElement('div');
		var a = document.createElement('a'); 
		var pageNum = document.createTextNode(String(i));
		a.appendChild(pageNum);
		a.href="?page="+String(i)+"&npp="+String(params[1].value);
		div.className="allPages";
		if(params[0].value==i){
			div.className+=" currentPage";
		} 
		div.appendChild(a); 
		stranice.appendChild(div); 

	}
}

function displayPage(pageNum,numberPerPage){
	for(var i=(pageNum-1)*numberPerPage; i<pageNum*numberPerPage && i<nizStudenata.length; i++){
		var a=document.createElement("a");
		var img=document.createElement("img");
		img.src=nizStudenata[i].srcStranice;
		img.className=nizStudenata[i].klasa;
		img.title=nizStudenata[i].fullName;
		a.href=nizStudenata[i].srcSlike;
		a.target="_blank";
		a.appendChild(img);
		students.appendChild(a);
	}
}
var nizStudenata = [
	{
		id:11,
		brPoena:0,
		srcSlike: "../../../stranice/11",
		srcStranice: "../../../showimage.php?id=3546",
		klasa: "studentslika",
		fullName: "Nikola Pavlović"
	},
	{
		id:22,
		brPoena:0,
		srcSlike: "../../../stranice/22",
		srcStranice: "../../../showimage.php?id=3557",
		klasa: "studentslika",
		fullName: "Saša Đorđević"
	}
];
for(var i=35; i<=88; i++){
	var student={
		id:i,
		brPoena:0,
		srcSlike: "../../../stranice/"+String(i),
		srcStranice: "../../../showimage.php?id=" + String(i+3535),
		klasa: "studentslika",
		fullName: ""
	};
	student.fullName="id="+String(student.id);
	nizStudenata.push(student);
}

nizStudenata[2].fullName="Dušan Ristić";
nizStudenata[3].fullName="Nikola Spasić";
nizStudenata[4].fullName="Lazar Stamenković";
nizStudenata[5].fullName="Miodrag Mikić";
nizStudenata[6].fullName="Igor Stošić";
nizStudenata[7].fullName="Petar Petković";
nizStudenata[8].fullName="Nikola Kostić";
nizStudenata[9].fullName="Radoica Nikolić";
nizStudenata[10].fullName="Mihailo Popović";
nizStudenata[11].fullName="Stefan Jovanović";
nizStudenata[12].fullName="Sara Stanković";
nizStudenata[13].fullName="Nikola Golubović";
nizStudenata[14].fullName="Đorđe Kasagić";
nizStudenata[15].fullName="Milan Ranđelović";
nizStudenata[16].fullName="Dragoljub Nikolić";
nizStudenata[17].fullName="Ivica Tasić";
nizStudenata[18].fullName="Nikola Živković";
nizStudenata[19].fullName="Nemanja Jovanović";
nizStudenata[20].fullName="Miloš Stamenković";
nizStudenata[21].fullName="Vojin Krtolica";
nizStudenata[22].fullName="Željko Kostić";
nizStudenata[23].fullName="Marko Ilić";
nizStudenata[24].fullName="Nikola Dimitrijević";
nizStudenata[25].fullName="Danilo Spasov";
nizStudenata[26].fullName="Zlatomir Paunović";
nizStudenata[27].fullName="Ana Živojinović";
nizStudenata[28].fullName="Dušan Ilić";
nizStudenata[29].fullName="Stefan Ristić";
nizStudenata[30].fullName="Jovan Pešić";
nizStudenata[31].fullName="Vladica Stanković";
nizStudenata[32].fullName="Nikola Jovanović";
nizStudenata[33].fullName="Miloš Vasić";
nizStudenata[34].fullName="Vladimir Spasić";
nizStudenata[35].fullName="Žarko Ristić";
nizStudenata[36].fullName="Mirolsav Milojković";
nizStudenata[37].fullName="Katarina Miljković";
nizStudenata[38].fullName="Nenad Grbić";
nizStudenata[39].fullName="Pavle Kovačević";
nizStudenata[40].fullName="Branislav Veličković";
nizStudenata[41].fullName="Sara Nikolić";
nizStudenata[42].fullName="Lazar Vujović";
nizStudenata[43].fullName="Stefan Filipović";
nizStudenata[44].fullName="Marija Milić";
nizStudenata[45].fullName="Nenad Radoičić";
nizStudenata[46].fullName="Nikola Budimir";
nizStudenata[47].fullName="Ljubiša Jovčić";
nizStudenata[48].fullName="Nemanja Milutinović";
nizStudenata[49].fullName="Strahinja Mitić";
nizStudenata[50].fullName="Andrijana Jovanović";
nizStudenata[51].fullName="Nikola Antanasković";
nizStudenata[52].fullName="Miloš Cakić";
nizStudenata[53].fullName="Nemanja Ivanković";
nizStudenata[54].fullName="Danijela Pavlović";
nizStudenata[55].fullName="Nenad Prokić";