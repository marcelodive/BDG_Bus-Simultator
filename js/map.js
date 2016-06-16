var map = L.map('map');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map);

var wayP = [
    	    L.latLng(-19.877157, -43.976565),
    	    L.latLng(-19.863042, -43.958176)	    
    	];

var routing = L.Routing.control({
	waypoints: wayP,
}).addTo(map);

$('.mapBtn').on('click', addMarkers);

function addMarkers(){
	console.log([routing._routes["0"]["coordinates"]]);
	
	console.log(routing._routes["0"].summary.totalDistance);
	
	var myMovingMarker = L.Marker.movingMarker(routing._routes["0"]["coordinates"],
	        10000).addTo(map);	
	myMovingMarker.start();
}



