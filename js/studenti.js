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



