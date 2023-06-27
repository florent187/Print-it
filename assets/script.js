const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

  
  // Définir les variables nécessaires
  let currentIndex = 0;
  
  // Sélectionner les éléments HTML nécessaires
  const banner = document.getElementById('banner');
  const prevButton = document.querySelector('.arrow_left');
  const nextButton = document.querySelector('.arrow_right');
  const dots = document.querySelector('.dots');
  
  
  
  nextButton.addEventListener('click', onNextButtonClick);
  
  
  prevButton.addEventListener('click', onPrevButtonClick);
  
 
  
  function onNextButtonClick() {
	currentIndex++;
	if (currentIndex === slides.length) {
	  currentIndex = 0;
	}
	showImage();
  }
  
  
  function onPrevButtonClick() {
	currentIndex--;
	if (currentIndex < 0) {
	  currentIndex = slides.length - 1;
	}
	showImage();
  }
  
  
  function showImage() {
	const imageElement = banner.querySelector('.banner-img');
	const tagLineElement = banner.querySelector('p');
  
	const slide = slides[currentIndex];
  
	// Modifier l'image et la ligne de texte de la bannière
	imageElement.src = "./assets/images/slideshow/" + slide.image;
	tagLineElement.innerHTML = slide.tagLine;
  
	// Mettre à jour les bullet points
	const dotsContainer = document.querySelector('.dots');
	dotsContainer.innerHTML = ''; // Supprimer les bullet points précédents
  
	slides.forEach((_, index) => {
	  const dot = document.createElement("span");
	  dot.className = "dot";
	  
	  if (index === currentIndex) {
		dot.classList.add("dot_selected"); // Ajouter la classe "dot_selected" pour le point correspondant à la diapositive en cours
	  }

	  if (index === 0 && currentIndex === 0) {
		dot.classList.add("dot_selected"); // Ajouter la classe "dot_selected" pour le point correspondant à la première diapositive
	  }
	  dotsContainer.appendChild(dot);
	});
  }
  // Appeler la fonction showImage() pour afficher la première image lors du chargement de la page
  showImage();
