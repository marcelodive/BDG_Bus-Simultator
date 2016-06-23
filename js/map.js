var map = L.map('map');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map);

map.setView([-19.840387	,-43.950244], 7);

function start(){
	if (routing != null){
		map.removeLayer(routing);
	}
	
	var routing = L.Routing.control({
		waypoints: busStop(),
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
	
	var busLocation = busLoc();
	var i = 0;
	
	busStop().forEach(function(entry){
		L.marker(entry, {icon: busStopIcon}).addTo(map).bindPopup(busLocation[i]);
		i++;
	});
	
	$(".leaflet-routing-container").remove();
	
	function addMarkers(){	
		var totalDistance = routing._routes[0].summary.totalDistance; //meters
		var totalTime = routing._routes[0].summary.totalTime; //seconds
		var myMovingMarker = L.Marker.movingMarker(routing._routes[0]["coordinates"],
				totalTime*1000, {icon: busYellowIcon}).addTo(map).bindPopup($( ".busControl" ).val());	
		myMovingMarker.start();
	}
	
	(function loop() {
		var randomNumber = Math.floor((Math.random() * 900000) + 300000);
		setTimeout(function(){
			addMarkers();
			loop();
		}, randomNumber);
	}());

}

//start();

$('.start').on('click', start);


