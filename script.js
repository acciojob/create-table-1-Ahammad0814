function insert_Row() {
	//Write your code here
	const newRow = `<tr><td>New cell1</td> 
		<td>New cell2</td></tr>`

	const oldRows = document.getElementById("sampleTable").innerHTML;

	document.getElementById("sampleTable").innerHTML = newRow + oldRows;
}
