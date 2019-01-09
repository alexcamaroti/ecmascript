var fields = [
	document.querySelector("#cDate"),
	document.querySelector("#cQuantity"),
	document.querySelector("#cCost")
];

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener('submit', function(event){
	event.preventDefault();
	var tr = document.createElement("tr");
	fields.forEach(function(field){
		var td = document.createElement("td");
		td.textContent = field.value;
		tr.appendChild(td);
	});
	var tdTotal = document.createElement("td");
	tdTotal.textContent = fields[1].value * fields[2].value;
	tr.appendChild(tdTotal);

	tbody.appendChild(tr);

	cleanFieldsAndFocus(fields);
});

function cleanFieldsAndFocus(fields) {
	fields[0].value = '';
	fields[1].value = 1;
	fields[2].value = 0;
	fields[0].focus();
}


