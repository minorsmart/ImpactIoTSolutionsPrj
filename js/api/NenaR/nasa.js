// NASA API code
function fetchNasaData() {
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = "CYtsN6hBGQfsrYbKekU2JPUHcQkGYhUxBtz4VCcx";
    const nasaTitle = document.querySelector("#nasa-title");
    const nasaMediaSection = document.querySelector("#nasa-media-section");

    const nasaImageSection = `
        <a id="nasa-hdimg" href="" target="_blank">
            <div class="image-div">
                <img id="nasa-image_of_the_day" src="" alt="image-by-nasa">
            </div>
        </a>`;

    const nasaVideoSection = `
        <div class="video-div">
            <iframe id="nasa-videoLink" src="" frameborder="0" allowfullscreen></iframe>
        </div>`;

    const currentDate = new Date().toISOString().slice(0, 10);
    let newDate = "&date=" + currentDate + "&";

    try {
        fetch(baseUrl + apiKey + newDate)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                displayNasaData(json);
            });
    } catch (error) {
        console.log(error);
    }

    function displayNasaData(data) {
        nasaTitle.innerHTML = data.title;

        if (data.media_type === "video") {
            nasaMediaSection.innerHTML = nasaVideoSection;
            document.getElementById("nasa-videoLink").src = data.url;
            document.getElementById("nasa-image_of_the_day").style.display = 'none';
            document.getElementById("nasa-videoLink").style.display = 'block';
        } else {
            nasaMediaSection.innerHTML = nasaImageSection;
            document.getElementById("nasa-hdimg").href = data.hdurl;
            document.getElementById("nasa-image_of_the_day").src = data.url;
            document.getElementById("nasa-image_of_the_day").style.display = 'block';
            document.getElementById("nasa-videoLink").style.display = 'none';
        }
    }
}

// Use addEventListener to ensure both functions run on window load
window.addEventListener('load', function() {
    fetchNasaData();
});
