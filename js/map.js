var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map);

var routing = L.Routing.control({
	waypoints: [
	    [-19.942045, -43.995259],
		[-19.869621, -43.964181]
	]
}).addTo(map);




$('.mapBtn').on('click', addMarkers);

function addMarkers(){	
	var totalDistance = routing._routes[0].summary.totalDistance; //meters
	var totalTime = routing._routes[0].summary.totalTime; //seconds
	
	var myMovingMarker = L.Marker.movingMarker(routing._routes[0]["coordinates"],
			totalTime*1000).addTo(map);	
	myMovingMarker.start();
}



