const x = 0;
function setup(){

    noCanvas();
    //       background(100); // colour the canvas
    const video = createCapture(VIDEO); // use local video file
    video.size(320, 240);

    document.getElementById("submitLoc").addEventListener("click",() =>{
                var userNameInput = document.getElementById("username");

                console.log(userNameInput.value);
                if ("geolocation" in navigator) {

                navigator.geolocation.getCurrentPosition(async position =>{

                    const lat = position.coords.latitude;
                    document.getElementById('latitude'). textContent = lat;
                    const lon = position.coords.longitude;
                    document.getElementById('longitude'). textContent = lon;
                    const username = userNameInput.value;
                    video.loadPixels();
                    const image64 = video.canvas.toDataURL();
                    const data = { lat, lon, username , image64};
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                    const response = await fetch('/api', options);
                    const json = await response.json();
                     console.log(json);   
                }
                );
            } else {
                console.log('geolocation not available')
            }
            })

     


}    



