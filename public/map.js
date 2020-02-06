require([
    "esri/Map",
    "esri/views/MapView",
    "esri/WebMap",
    "esri/Graphic",
    "esri/layers/FeatureLayer"
], function(
    Map, MapView, WebMap, Graphic, FeatureLayer
){
    var map = new Map({
        basemap: "streets"
    });
    var view = new MapView({
        map: map,
        container: viewDiv,
        zoom: 10
    });

    const keckLayer = new FeatureLayer({
        title: "Locations of Users",
        source: [],
        geometryType: "point",
        objectIdField: "ObjectID",
        spatialReference: { wkid: 4326 },
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-marker",
                size: 10,
                color: "red"
            }
        }
    })

    drawData();
            async function drawData(){
                const response = await fetch('/api');
                const data = await response.json();

                var graphics = [];
                var graphic;

                for (item of data){

                        console.log(item.lat);
                        console.log(item.lon);

                        graphic = new Graphic({
                            geometry: {
                                type:"point",
                                latitude: item.lat,
                                longitude: item.lon
                            }
                        })

                graphics.push(graphic);



                }
                keckLayer.source = graphics;

                map.add(keckLayer);
                view.goTo({
                    target: graphics[0]
                })
                console.log(keckLayer);
            }
            fetch("/api");


});