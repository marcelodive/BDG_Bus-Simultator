var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var routing = L.Routing.control({
	waypoints: [
	    L.latLng(57.6792, 11.949),
		L.latLng(57.74, 11.94)
	]
}).addTo(map);

$('.mapBtn').on('click', addMarkers);

function addMarkers(){
	console.log([routing._routes["0"]["coordinates"]]);
	
	var myMovingMarker = L.Marker.movingMarker(routing._routes["0"]["coordinates"],
	        [2]).addTo(map);	
	myMovingMarker.start();
}



