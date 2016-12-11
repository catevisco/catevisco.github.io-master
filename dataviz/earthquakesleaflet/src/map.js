var map = L.map('map').setView([40, -100], 4);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target"_blank">Terms &amp; Feedback</a>'
    }).addTo(map);