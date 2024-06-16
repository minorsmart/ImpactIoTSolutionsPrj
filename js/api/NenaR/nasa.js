function nasarequested() {
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = "CYtsN6hBGQfsrYbKekU2JPUHcQkGYhUxBtz4VCcx";
    const nasaTitle = document.querySelector("#nasa-title");
    const nasaMediaSection = document.querySelector("#nasa-media-section");

    const nasaImageSection = `<a id="nasa-hdimg" href="" target="_blank">
        <div class="image-div">
            <img id="nasa-image_of_the_day" src="" alt="image-by-nasa">
        </div>
    </a>`;

    const nasaVideoSection = `<div class="video-div"> 
        <iframe id="nasa-videoLink" src="" frameborder="0"></iframe>
    </div>`;

    const currentDate = new Date().toISOString().slice(0, 10);

    function fetchData(date) {
        let newDate = "&date=" + date + "&";
        try {
            fetch(baseUrl + apiKey + newDate)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    displayData(json);
                });
        } catch (error) {
            console.log(error);
        }
    }

    function displayData(data) {
        nasaTitle.innerHTML = data.title;

        if (data.media_type === "video") {
            nasaMediaSection.innerHTML = nasaVideoSection;
            document.getElementById("nasa-videoLink").src = data.url;
        } else {
            nasaMediaSection.innerHTML = nasaImageSection;
            document.getElementById("nasa-hdimg").href = data.hdurl;
            document.getElementById("nasa-image_of_the_day").src = data.url;
        }
    }

    // Fetch today's data onload
    fetchData(currentDate);
}

window.onload = function() {
    nasarequested();
};
