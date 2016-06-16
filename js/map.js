var map = L.map('map');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map);

var busStops =
	[
		[-19.834497,	 -44.028512],
		[-19.835922,	 -44.027545],
		[-19.835281,	 -44.024123],
		[-19.837259,	 -44.021301],
		[-19.838329,	 -44.020536],
		[-19.836538,	 -44.018878],
		[-19.833182,	 -44.016518],
		[-19.831842,	 -44.015002],
		[-19.832575,	 -44.014946],
		[-19.833155,	 -44.014071],
		[-19.834018,	 -44.010938],
		[-19.836137,	 -44.009774],
		[-19.837055,	 -44.009538],
		[-19.838518,     -44.007773],
		[-19.837852,     -44.006507],
		[-19.836732,	 -44.002108],
		[-19.837514,	 -44.000804],
		[-19.839775,	 -43.999120],
		[-19.841371,	 -43.998358],
		[-19.841608,	 -43.996920],
		[-19.842047,	 -43.995552],
		[-19.841684,	 -43.994833],
		[-19.839337,	 -43.992790],
		[-19.840624,	 -43.990676],
		[-19.843127,	 -43.989083],
		[-19.843939,	 -43.987769],
		[-19.846785,	 -43.985371],
		[-19.848233,	 -43.983172],
		[-19.847214,	 -43.980490],
		[-19.846200,	 -43.978655],
		[-19.846513,	 -43.975957],
		[-19.845892,	 -43.972787],
		[-19.842880,	 -43.970293],
		[-19.842910,	 -43.966801]
	];

var routing = L.Routing.control({
	waypoints: busStops,
	createMarker: function() { return null; }
}).addTo(map);

$('.mapBtn').on('click', addMarkers);

var busStopIcon = L.icon({
    iconUrl: 'images/busStopIcon.png',
    iconSize:     [15, 15],
    iconAnchor:   [7, 7], 
    popupAnchor:  [0, -7] 
});
var busYellowIcon = L.icon({
    iconUrl: 'images/busYellowIcon.png',
//    iconSize:     [13, 40],
    iconAnchor:   [13, 40], 
    popupAnchor:  [0, -40] 
});

busStops.forEach(function(entry){
	L.marker(entry, {icon: busStopIcon}).addTo(map).bindPopup("Endereço...");
});

$(".leaflet-routing-container").remove();

function addMarkers(){	
	var totalDistance = routing._routes[0].summary.totalDistance; //meters
	var totalTime = routing._routes[0].summary.totalTime; //seconds
	var myMovingMarker = L.Marker.movingMarker(routing._routes[0]["coordinates"],
			totalTime*1000, {icon: busYellowIcon}).addTo(map).bindPopup("Linha 510");	
	myMovingMarker.start();
}



