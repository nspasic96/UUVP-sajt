<link rel="stylesheet" href="velikiBrojvi.css" type="text/css">
<?php
	if(isset($_GET['broj1'])&&isset($_GET['broj2'])){
		$br1=$_GET['broj1'];
		$br2=$_GET['broj2'];
		$nizCifara1 = array();
		$nizCifara2 = array();
		for($i=strlen($br1)-1; $i>=0; $i--){
			$nizCifara1[]=(int)$br1[$i];
			if(!is_numeric($br1[$i])){
				die("Los unos");
			}
		}
		for($i=strlen($br2)-1; $i>=0; $i--){
			$nizCifara2[]=(int)$br2[$i];
			if(!is_numeric($br2[$i])){
				die("Los unos");
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
		if($rezObr[strlen($br1)+strlen($br2)]!=0){
			for($i=strlen($br1)+strlen($br2); $i>=0; $i--){
				$rez[strlen($br1)+strlen($br2)-$i]=$rezObr[$i];
			}	
		}
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

		echo "<p>". $br1 . " * ". $br2 . " = " . $ceoBroj . "</p>";	

		// for($i=0; $i<=strlen($br1)+strlen($br2); $i++){
		// 	echo $rezObr[$i];
		// 	echo "\n";
		// }
		// echo 'dobro je';
	}
?>