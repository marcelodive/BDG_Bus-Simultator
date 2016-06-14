var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var routing = L.Routing.control({
	waypoints: [
		L.latLng(57.74, 11.94),
		L.latLng(57.6792, 11.949),	    
		L.latLng(57.6292, 11.939)
	]
}).addTo(map);

window.onload = function() {
	console.log(routing._routes);
	console.log("Tudo certo");
};



//
//var myMovingMarker = L.Marker.movingMarker(routing._routes["0"]["coordinates"],
//        [20000]).addTo(map);
//
//myMovingMarker.start();