<?php
	$pisi=false;
		if($_SERVER['REQUEST_METHOD'] == "POST"){
		if(isset($_POST['broj1'])&&isset($_POST['broj2']) && !empty($_POST['broj1']) && !empty($_POST['broj2'])){
			$br1=$_POST['broj1'];
			$br2=$_POST['broj2'];
			$nizCifara1 = array();
			$nizCifara2 = array();
			for($i=strlen($br1)-1; $i>=0; $i--){
				$nizCifara1[]=(int)$br1[$i];
				if(!is_numeric($br1[$i])){
					die("Greška pri unosu prvog broja");
				}
			}
			for($i=strlen($br2)-1; $i>=0; $i--){
				$nizCifara2[]=(int)$br2[$i];
				if(!is_numeric($br2[$i])){
					die("Greška pri unosu drugog broja");
				}
			}
			$rezObr = array();
			for($i=0; $i<=strlen($br1)+strlen($br2); $i++){
				$rezObr[$i]=0;
			}
			for($i=0; $i<strlen($br1); $i++){
				for($j=0; $j<strlen($br2); $j++){
					$rezObr[$i+$j]+=$nizCifara1[$i]*$nizCifara2[$j];
				}
			}

			for($i=0; $i<strlen($br1)+strlen($br2); $i++){
				$rezObr[$i+1]+=(int)$rezObr[$i]/10;
				$rezObr[$i]=$rezObr[$i]%10;
			}
			$rez = array();
			if($rezObr[strlen($br1)+strlen($br2)-1]!=0){
				for($i=strlen($br1)+strlen($br2)-1; $i>=0; $i--){				
					$rez[strlen($br1)+strlen($br2)-1-$i]=$rezObr[$i];
				}	
			}
			if($rezObr[strlen($br1)+strlen($br2)-2]!=0){
				for($i=strlen($br1)+strlen($br2)-2; $i>=0; $i--){
					$rez[strlen($br1)+strlen($br2)-2-$i]=$rezObr[$i];
				}	
			}
			$ceoBroj = implode('',$rez);
			$pisi=true;
			// for($i=0; $i<=strlen($br1)+strlen($br2); $i++){
			// 	echo $rezObr[$i];
			// 	echo "\n";
			// }
			// echo 'dobro je';
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf8">
	<link rel="stylesheet" type="text/css" href="../css/indexStyle.css">
	<link rel="stylesheet" type="text/css" href="../css/velikiBrojevi.css">
	<title>Množenje velikih brojeva</title>
</head>
<body>
	<nav>
		<ul>
			<li><a href="../index.html">Početna</a></li>
			<li><a href="../stranice/oMeni.html">O meni</a></li>
			<li><a href="../stranice/radoviSaVezbi.html">Radovi sa vežbi</a></li>			
	        <li><a href="../stranice/studenti.html">Studenti</a></li>
			<li><a href="../stranice/http://www.pmf.ni.ac.rs">Fakultet</a></a></li>
			<li><a href="../stranice/oPredmetu.html">O predmetu</a></li>
			<li><a href="../stranice/mojeGlasanje.html">Glasanje</a></li>
            <li><a href="../stranice/kosiHitac.html">Animacija kosog hica</a></li>
		</ul>
	</nav>
	<p>
		U računaru brojevi se predstavljaju u binarnom obliku i postoje ograničenja za njihove vrednosti.
		Na primer, u javascriptu tip broja "Number" može da uzme vrednosti iz segmenta [5e-324,1.7976931348623157e+308]. Međutim, nekada je potrebno raditi sa mnogo većim(po apsoultoj vrednosti) brojevima i kao ilustraciju rešenja tog problema ovde je predstavljen kalkulator koji može da izračuna proizvod 2 velika broja(i za ove brojeve postoji ograničenje koje zavisi od broja cifara proizvoda(koji je manji ili jednak od zbira broja cifara oba broja), međutim ono opet daje "veću slobodu").
		Pažnja: Brojevi treba da budu pozitivni, zbog jednostavnosti primera.
	</p>
	<h4>
		Unesi dva prirodna broja: 
	</h4>
	<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
		<textarea name="broj1"></textarea>
		<textarea name="broj2"></textarea><br>
		<input type="submit" name="Racunaj" value="Racunaj">
	</form>
	<?php if($pisi) echo "<p id='res'>". $br1 . " <bold>*</bold> " . $br2 . " <bold>=</bold> " . $ceoBroj . "</p>"; ?> 
</body>
</html>