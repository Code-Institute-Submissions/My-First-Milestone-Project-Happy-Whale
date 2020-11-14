
      function initMap() {
       
        const uluru = { lat: 51.4545, lng: 2.5879 };
      
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
      
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }