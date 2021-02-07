function updateSlider(sliderValue, numberElement){ 
			document.getElementById(numberElement).innerHTML = sliderValue;
			return;
		}
// Create a request variable and assign a new XMLHttpRequest object to it.

function getLight(){
	var request = new XMLHttpRequest()

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://diracweiler.github.io/dataFile.json', true)

	request.onload = function () {
  		// Begin accessing JSON data here
		var data = JSON.parse(this.responseText)

		if (request.status >= 200 && request.status < 400) {
			const cLight = document.getElementById('currentLight')
			cLight.textContent = data[0].value
			const dLight = document.getElementById('desiredLight')
			dLight.value = data[1].value

		} else {
  			console.log('error')
		}
	}
	// Send request
	request.send()
}
getLight();

function postLight(dLight){
	var data = new FormData();
	data.append()

	var request = new XMLHttpRequest()
	request.open('PUT', 'https://diracweiler.github.io/dataFile.json', true)



}

