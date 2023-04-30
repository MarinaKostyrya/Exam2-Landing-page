'use strict';

function initMap() {
    const center = new google.maps.LatLng(47.134087,28.855135);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "b9a88885f344febd",
        zoom: 12,
        center: center,
    });

    const imgMarker = './assets/icons/Pin.png';
    new google.maps.Marker({
        position: center,
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
}

window.initMap = initMap;


