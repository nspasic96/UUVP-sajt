var i = 0;

function processForm() {
    i++;
    var listItem = document.myCheckListForm.checklistItem.value;
	
	var listed = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;
}

function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
	document.getElementById(item).getElementsByTagName("input")[0].disabled = true;
}