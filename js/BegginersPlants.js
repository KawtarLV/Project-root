function updateFeatured(imageSrc, plantName, plantTitle, plantDescription) {
    // Ensure that the image, name, title, and description exist
    const featuredImage = document.getElementById('featured-image');
    const plantNameElement = document.getElementById('plant-name');
    const plantTitleElement = document.getElementById('plant-title');
    const plantDescriptionElement = document.getElementById('plant-description');

    if (featuredImage && plantNameElement && plantTitleElement && plantDescriptionElement) {
        // Update the featured image source
        featuredImage.src = imageSrc;
        // Update the plant name, title, and description
        plantNameElement.textContent = plantName;
        plantTitleElement.textContent = plantTitle;
        plantDescriptionElement.textContent = plantDescription;
    } else {
        console.error('One or more elements are missing.');
    }
}