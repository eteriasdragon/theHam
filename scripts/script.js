// ==================== SERVICES SECTION ================
const servicesSectionTabs = document.querySelector('.services');

servicesSectionTabs.addEventListener('click', (e) => {
  const prevActiveTitle = document.querySelector('.services-item.active');
  prevActiveTitle.classList.remove('active');
  e.target.classList.add('active');

  const prevActiveTabContent = document.querySelector(".services__info-content.active");
  prevActiveTabContent.classList.remove('active');

  const targetAttribute = e.target.getAttribute('data-category');
  const activeTabContent = document.querySelector(`.services__info-content[data-category=${targetAttribute}]`);
  console.log(activeTabContent);
  activeTabContent.classList.add('active');
});


// ==================== AMAZING WORK SECTION ================

const loader = document.createElement('div');
loader.classList.add('loader');
for (i = 1; i <= 8; i++) {
  const loaderItem = document.createElement('div');
  loaderItem .classList.add('loader__box');
  loader.append(loaderItem);
}

const categoryImages = [
  {
    src: './img/amazing-works-graphic-design/01.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/01.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/01.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/01.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/02.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/02.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/02.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/02.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/03.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/03.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/03.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/03.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/04.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/04.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/04.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/04.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/05.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/05.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/05.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/05.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/06.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/06.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/06.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/06.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/07.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/07.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/07.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/07.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/08.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/08.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/08.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/08.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/09.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/09.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/09.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/09.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/10.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/10.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/10.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/10.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/11.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/11.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/11.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/11.jpg',
    category: 'wordpress'
  },
  {
    src: './img/amazing-works-graphic-design/12.jpg',
    category: 'graphic-design'
  },
  {
    src: './img/amazing-works-web-design/12.jpg',
    category: 'web-design'
  },
  {
    src: './img/amazing-works-landing-page/12.jpg',
    category: 'landing-pages'
  },
  {
    src: './img/amazing-works-wordpress/12.jpg',
    category: 'wordpress'
  }
];


const categories = document.querySelector('.portfolio-section-divides');

const allCategoryType = categories.querySelector('[data-category="all"]');

let showingImagesSrc = categoryImages.slice(0,12);

function creatingCard (category, src) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card'); 
  const image = document.createElement('img');
  image.classList.add('portfolio-section__previews');
  const frontSideCard = document.createElement('div');
  frontSideCard.classList.add('front');
  const backSideCard = document.createElement('div');
  backSideCard.classList.add('previews-hover');
  backSideCard.classList.add('back');
  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('hover-icons__wrapper');
  const linkIconWrapper = document.createElement('div');
  linkIconWrapper.classList.add('previews-hover__link-icon');
  const linkIcon = document.createElement('img');
  linkIcon.src = './img/icons/link-icon.png';
  linkIcon.classList.add('previews-hover__icon');
  const stopIconWrapper = document.createElement('div');
  stopIconWrapper.classList.add('stop-icon');
  const stopIcon = document.createElement('div');
  stopIcon.classList.add('stop-icon__square');
  const backSideTitle = document.createElement('p');
  backSideTitle.classList.add('previews-hover__title');
  backSideTitle.innerText = "creative design";
  const backSideSubtitle = document.createElement('p');
  backSideSubtitle.classList.add('previews-hover__subtitle');
  stopIconWrapper.append(stopIcon);
  linkIconWrapper.append(linkIcon);
  iconsWrapper.append(linkIconWrapper);
  iconsWrapper.append(stopIconWrapper);
  backSideCard.append(iconsWrapper);
  backSideCard.append(backSideTitle);
  backSideCard.append(backSideSubtitle);
  image.dataset.category = `${category}`;
  image.src = `${src}`;
  frontSideCard.append(image);
  cardWrapper.append(frontSideCard);
  cardWrapper.append(backSideCard);
  return cardWrapper;
}

let showingImages = categoryImages.slice(0,12);

let showingImagesWrapper = document.createElement('div');
  showingImagesWrapper.classList.add('portfolio-section-divides__previews');
  showingImagesWrapper.classList.add('active');
  showingImages.forEach(item => {
  showingImagesWrapper.append(creatingCard(item.category, item.src));
});

const mainGrid = document.querySelector('.divides-wrapper');
mainGrid.append(showingImagesWrapper);
let showingImagesWrapperCategory = document.createElement('div');
showingImagesWrapperCategory.classList.add('portfolio-section-divides__previews');

const loadMoreBtn = document.querySelector('.portfolio-section__load-button');

categories.addEventListener('click', e => {
  showingImagesWrapperCategory.classList.add('active');
  showingImagesWrapperCategory.classList.remove('unactive');
  if(e.target.classList.contains('active')) {
    return;
  }
  showingImagesWrapperCategory.classList.remove('active');
  const categoryType = e.target.dataset.category;
  let categoryImagesFiltered = categoryImages.filter(item => {
    return item.category === categoryType;
  });
  const prevTarget = categories.querySelector('.active');
  showingImagesWrapper.classList.add('unactive');
  showingImagesWrapper.classList.remove('active');
  e.target.classList.add('active');
  if(showingImagesWrapperCategory.innerHTML) {
    showingImagesWrapperCategory.innerHTML = "";
  }
  prevTarget.classList.remove('active');
  categoryImagesFiltered.forEach(item => {
    showingImagesWrapperCategory.append(creatingCard(item.category, item.src));
  });
  showingImagesWrapperCategory.classList.add('active');
  mainGrid.append(showingImagesWrapperCategory);
  if(e.target.dataset.category === "all") {
    showingImagesWrapper.classList.remove('unactive');
  };
  if(e.target.dataset.category === "all") {
    showingImagesWrapper.classList.remove('unactive');
    showingImagesWrapper.classList.add('active');
    showingImagesWrapperCategory.classList.remove('active');
    showingImagesWrapperCategory.classList.add('unactive');
    if ([...showingImagesWrapper.children].length < 36) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
    }
  } else {
    loadMoreBtn.style.display = "none";
  }
  addingCardSubtitle();
});

function addingCardSubtitle() {
  const cardsArray = [...document.querySelector('.portfolio-section-divides__previews.active').children];
  const categoriesArray = [...document.querySelector('.portfolio-section-divides').children];

  
  cardsArray.forEach(item => {
    const cardCategory = item.querySelector('img').dataset.category;
    categoriesArray.forEach(elem => {
      const categoryType = elem.getAttribute('data-category');
      const categoryTitle = elem.innerText;
      if (cardCategory === categoryType) {
        const cardSubtitle = item.querySelector('.previews-hover__subtitle');
        cardSubtitle.innerText = categoryTitle;
      }
    });
  });
};

addingCardSubtitle();
let showingMoreImages = [];
loadMoreBtn.addEventListener('click', evt => {
  loadMoreBtn.style.display = "none";
  loadMoreBtn.before(loader);
  loader.style.display = "flex";
  setTimeout(() => {
    if(showingMoreImages.length === 0) {
      showingMoreImages = categoryImages.slice(12,24);
      showingMoreImages.forEach(item => {
        showingImagesWrapper.append(creatingCard(item.category, item.src));
      });
    } else {
      showingMoreImages = [...showingMoreImages, ...categoryImages.slice(24,36)];
      let showingAnotherMoreImages = categoryImages.slice(24,36);
      showingAnotherMoreImages.forEach(item => {
        showingImagesWrapper.append(creatingCard(item.category, item.src));
      });
    }
    if(showingMoreImages.length < 13) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
    }
    loader.style.display = "none";
    addingCardSubtitle();
  }, 2000);
});

$('.feedback-content').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  dots: true,
});

var $masonryGrid = $('.images-gallery').masonry({
  gutter: 13,
  columns: 3
});
$masonryGrid.imagesLoaded().progress( function() {
  $masonryGrid.masonry();
});  

loadMoreImagesInGalleryBtn = document.querySelector('.best-images__loadmore-btn');

const imagesForGallery = [
  { src: './img/best-images-section/05.png'},
  { src: './img/best-images-section/02.png'},
  { src: './img/best-images-section/03.png'},
  { src: './img/best-images-section/04.png'},
  { src: './img/best-images-section/04.png'},
  { src: './img/best-images-section/05.png'},
  { src: './img/best-images-section/07.png'},
  { src: './img/best-images-section/06.png'},
  { src: './img/best-images-section/05.png'},
];


function creatingImgItemForGallery(src) {
  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('images-gallery__item');
  imgWrapper.classList.add('big-item');
  imgWrapper.classList.add('images-gallery__item--hover');
  
  const imgItem = document.createElement('img');
  imgItem.src = `${src}`;
  const imgHover = document.createElement('div');
  imgHover.classList.add('images-gallery__item-hover');
  const imgHoverSearchIcon = document.createElement('div');
  imgHoverSearchIcon.classList.add('images-gallery__item-hover-search-icon');
  imgHoverSearchIcon.classList.add('gallery-pictures__item');
  imgHoverSearchIcon.classList.add('big');
  const searchIcon = document.createElement('img');
  searchIcon.src = './img/icons/search-small-icon.png';
  const imgHoverZoomIcon = document.createElement('div');
  imgHoverZoomIcon.classList.add('images-gallery__item-hover-zoom-icon');
  imgHoverZoomIcon.classList.add('gallery-pictures__item');
  imgHoverZoomIcon.classList.add('big');
  const zoomIcon = document.createElement('img');
  zoomIcon.src = './img/icons/arrow icon.png';

  imgHoverSearchIcon.append(searchIcon);
  imgHoverZoomIcon.append(zoomIcon);
  imgHover.append(imgHoverSearchIcon);
  imgHover.append(imgHoverZoomIcon);
  imgWrapper.append(imgItem);
  imgWrapper.append(imgHover);
  return imgWrapper;
}

const imgGallery = document.querySelector('.images-gallery');


loadMoreImagesInGalleryBtn.addEventListener('click', evt => {
  loadMoreImagesInGalleryBtn.style.display = "none";
  loadMoreImagesInGalleryBtn.before(loader);
  loader.style.display = "flex";
  setTimeout(() => {
    let elems = [];
    loader.style.display = "none";
    imagesForGallery.forEach(item => {
      elems.push(creatingImgItemForGallery(item.src));
    });
    let $elems = $( elems );
    $masonryGrid.append( $elems ).masonry( 'appended', $elems );
  }, 2000);
});