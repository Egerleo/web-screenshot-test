getData();
            async function getData(){
                const response = await fetch('/api');
                const data = await response.json();

                for (item of data){
                    const root = document.createElement('div');
                    const username = document.createElement('div');
                    const geo = document.createElement('div');
                    const date = document.createElement('div');
                    const image = document.createElement('img');
                    const lineBreak = document.createElement('p');

                    username.textContent = `name: ${item.username}`;
                    geo.textContent = `${item.lat}°,${item.lon}°`;
                    const dateString = new Date(item.timestamp).toLocaleString();
                    date.textContent = dateString;
                    image.src = item.image64;
                    image.alt = "screenshot wenn man ne cam hat";

                    root.append(username, geo,date, image, lineBreak);
                    document.body.append(root);



                }
                console.log(data);
            }
            fetch("/api");