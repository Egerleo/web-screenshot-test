
function setup(){
    createCanvas(300, 300);
   // noCanvas();
           background(100,0,0); // colour the canvas
   const video = createCapture(VIDEO); 
    //createCanvas(400, 400);
    const submitLoc = document.getElementById("submitLoc");
    submitLoc.addEventListener("click",() =>{
            var userNameInput = document.getElementById("username");
                if (userNameInput.value == []) {
                    console.log("type a name");
                } else {

                    if ("geolocation" in navigator) {

                        navigator.geolocation.getCurrentPosition(async position =>{

                            const lat = position.coords.latitude;
                            document.getElementById('latitude'). textContent = lat;
                            const lon = position.coords.longitude;
                            document.getElementById('longitude'). textContent = lon;
                            const username = userNameInput.value;
                            video.loadPixels();
                            const image64 = video.canvas.toDataURL();
                            const data = { lat, lon, username,image64 }; //, image64
                            const options = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            }
                            const response = await fetch('/api', options);
                            const json = await response.json(); 
                        }
                        );
                    } else {
                        console.log('geolocation not available')
                    }

                }


            })

     


}   

function draw(){
    if (mouseIsPressed){
        fill(0);
    } else {
      
    }
    ellipse(mouseX,mouseY, 10,10);
}



