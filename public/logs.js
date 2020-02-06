getData();
            async function getData(){
                const response = await fetch('/api');
                const data = await response.json();
console.log(data);
                for (item of data){
                    const root = document.createElement('div');
                    root.style = "background-color:white";
                    const username = document.createElement('div');
                    const geo = document.createElement('div');
                    const date = document.createElement('div');
                    const image = document.createElement('img');
                    const imageCanvas = document.createElement('img');
                    const br = document.createElement("BR");
                    //const lineBreak = document.createElement('p');

                    username.textContent = `name: ${item.username}`;
                    geo.textContent = `${item.lat}°,${item.lon}°`;
                    const dateString = new Date(item.timestamp).toLocaleString();
                    date.textContent = dateString;
                    image.src = item.image64;
                    imageCanvas.src = item.canvas64;
                    imageCanvas.style = "max-height:200px; max-widht:200px;"
                    image.style = "max-height:200px; max-widht:200px;"
                    console.log(item.image64);
                    console.log(item.canvas64);
                    image.alt = "screenshot funzt leider ned";

                    root.append(username, geo,date, image,imageCanvas); //, lineBreak
                    document.body.append(root);


                }

            }
            fetch("/api");

