document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch random images from Lorem Picsum API
    function fetchRandomImages() {
        const apiUrl = "https://picsum.photos/v2/list?page=1&limit=6";

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                displayImages(data);
            })
            .catch(error => {
                console.error("Error fetching images:", error);
            });
    }

    // Function to display images in cards
    function displayImages(images) {
        const imageContainer = document.getElementById("imageContainer");

        images.forEach(image => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = image.download_url;
            img.alt = image.author;

            card.appendChild(img);
            imageContainer.appendChild(card);
        });
    }

    // Fetch random images when the page loads
    fetchRandomImages();
});



 

 imageContainer.addEventListener('click',() => {
     confirm()
    imageContainer.remove()
   
 })