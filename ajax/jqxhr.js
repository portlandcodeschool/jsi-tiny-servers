var url = '/api';

/* Old way:

var xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.send(null);//null --> no body/data to send
console.log('xhr: ',Object.keys(xhr));

*/


// New way with JQuery:
var jqxhr = $.ajax(url);
console.log('jqxhr: ',Object.keys(jqxhr));

// Promise Callbacks:
function report(response,status,jqxhr){
	console.log(response, typeof response)
}
function oops(jqxhr,status,error) {
	console.log("Oops:", error)
}

// Attaching promises:
jqxhr.done(report);
jqxhr.fail(oops);

// Alternative forms:
//jqxhr.always(report);
//jqxhr.then(report,oops);


function fullRequest(data) {
// Full request:
	$.ajax(url,{
		method:'GET',
		data:data,
		dataType:'json'
	}).done(report);
}

function getRequest(data) {
	$.get(url,data)
	 .done(report);
	// OR
	//$.get(url,data,report)
}

function getJSON(data) {
	$.getJSON(url,data,report);
	// OR
	//$.get(url,data,report,'json')
}

function postRequest(data) {
	$.post(url,data)
	 .fail(oops);
}
