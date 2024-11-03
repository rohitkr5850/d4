function displayAnimalImage() {
    const animalSelect = document.getElementById("animalSelect");
    const animalImage = document.getElementById("animalImage");
    
    // Get the selected animal
    const selectedAnimal = animalSelect.value;
    
    // Update the image source based on the selected animal
    animalImage.src = images/${selectedAnimal}.jpg;
    animalImage.alt = ${selectedAnimal} image;
  }