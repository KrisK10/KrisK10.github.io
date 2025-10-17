const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

const slides = [
	{ src: 'images/photo3.jpg',
	  alt: 'Tree turning colors',
	  caption: 'They say I\'m changing'
	},
	{ src: 'images/photo4.jpg',
	  alt: 'Dead flower',
	  caption: 'I find my head drooping more often'
	},
	{ src: 'images/photo5.jpg',
	  alt: 'Wilting flower',
	  caption: 'It weighs heavy on my mind'
	},
	{ src: 'images/photo6.jpg',
	  alt: 'Dead branch',
	  caption: 'It sticks out in my thoughts like a sore thumb'
	},
	{ src: 'images/photo8.jpg',
	  alt: 'Dead plants',
	  caption: 'My brain is a tangled mess'
	},
	{ src: 'images/photo7.jpg',
	  alt: 'Dead plant in shadows',
	  caption: 'The whole world seems dark around me'
	},
	{ src: 'images/photo1.jpg', 
	  alt: 'Dead marigolds',
	  caption: 'It\'s easier to close up than to speak out'
	},
	{ src: 'images/photo2.jpg',
	  alt: 'Dead bush',
	  caption: 'It\'d be refreshing to feel bare'
	},
	{ src: 'images/photo9.jpg',
	  alt: 'Half dead flower',
	  caption: 'Why do others seem so far above me?'
	},
	{ src: 'images/photo10.jpg', 
	  alt: 'Dying bush',
	  caption: 'I feel infected'
	},
];

let currentIndex = 0;

slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}

showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);