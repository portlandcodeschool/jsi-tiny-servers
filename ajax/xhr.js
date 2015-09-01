var xhr = new XMLHttpRequest();
// readyState == 0
console.log(Date.now(), xhr.readyState);

// Set callback to handle state change:
xhr.onreadystatechange = function(evt) {
	console.log(evt.timeStamp, this.readyState);
	if (this.readyState === 4)
		console.log(this.response)	
}

var url = '/api';
xhr.open('GET',url);
// readyState == 1

xhr.send(null);//null --> no body/data to send
// readyState == 2

// server receives request, begins response...
// readyState ==3

// response complete...
// readyState == 4
