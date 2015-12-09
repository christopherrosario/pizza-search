$( document ).ready(function() {
    $( "#enter" ).click( function(e) {
        var  client_id ="0XOI0ZS0KEER4HN4TX2RR5OZP4APUJVPFN01TCM41V5BHDZX"
    var client_secret  ="VTCMVBG4NZBQT0EK4EUOOBFPDHC20XBZ5D1G1R1QYWWR4JVU"
          $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
        });

        
         $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + "0XOI0ZS0KEER4HN4TX2RR5OZP4APUJVPFN01TCM41V5BHDZX" +
        "&client_secret=" + "VTCMVBG4NZBQT0EK4EUOOBFPDHC20XBZ5D1G1R1QYWWR4JVU" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            console.log(data);
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
        });
    
  })});
 