//your code here
 document.addEventListener("DOMContentLoaded", () => {
        const imageUrls = [
          "https://picsum.photos/id/237/200/300",
          "https://picsum.photos/seed/picsum/200/300",
          "https://picsum.photos/200/300?grayscale",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300.jpg"
        ];
        
        let selectedImages = [];
        let shuffledImages = [...imageUrls];
        let duplicateImage = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
        shuffledImages.push(duplicateImage);
        shuffledImages = shuffledImages.sort(() => Math.random() - 0.5);
        
        const container = document.getElementById("image-container");
        shuffledImages.forEach((src, index) => {
          const img = document.createElement("img");
          img.src = src;
          img.dataset.index = index;
          img.addEventListener("click", () => handleImageClick(img));
          container.appendChild(img);
        });
        
        const resetButton = document.getElementById("reset");
        const verifyButton = document.getElementById("verify");
        const message = document.getElementById("para");
        
        function handleImageClick(img) {
          if (selectedImages.length < 2 && !selectedImages.includes(img)) {
            img.classList.add("selected");
            selectedImages.push(img);
            resetButton.style.display = "block";
            if (selectedImages.length === 2) verifyButton.style.display = "block";
          }
        }
        
        verifyButton.addEventListener("click", () => {
          if (selectedImages[0].src === selectedImages[1].src) {
            message.textContent = "You are a human. Congratulations!";
          } else {
            message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
          }
          verifyButton.style.display = "none";
        });
        
        resetButton.addEventListener("click", () => {
          selectedImages.forEach(img => img.classList.remove("selected"));
          selectedImages = [];
          resetButton.style.display = "none";
          verifyButton.style.display = "none";
          message.textContent = "";
        });
      });