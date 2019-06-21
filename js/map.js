function initMap() {
    var myLatLng = {lat: 10.730307, lng: 106.693941};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'RMIT Uni'
    });
  }