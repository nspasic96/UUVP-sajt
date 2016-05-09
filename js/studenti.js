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
	student.fullName="Treba izvući puno ime sa stranice rezultati!";
	nizStudenata.push(student);
}
// function addEvLis(item){
// 	item.addEventListener('mouseover',function (){
// 	this.style.width = (100).toString()+"px";
// 	this.style.height = (100).toString()+"px";
// 	});
// 	item.addEventListener('mouseout',function (){
// 	this.style.width = (50).toString()+"px";
// 	this.style.height = (50).toString()+"px";
// 	});
// }


