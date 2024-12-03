




const container = document.querySelector('.partner-team');
const elementsToAnimate = document.querySelectorAll('.partner-team-box');
let observer;
let animationIndex = 0;


function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Запускаем анимацию только один раз, когда контейнер становится видимым.
            if(animationIndex === 0){
              animateElements();
            }
            observer.unobserve(container); // Прекращаем наблюдение после запуска анимации
        }
    });
}

function animateElements(){
  if (animationIndex < elementsToAnimate.length) {
    const currentElement = elementsToAnimate[animationIndex];
    currentElement.classList.add('animating');

    currentElement.addEventListener('animationend', () => {
      currentElement.classList.remove('animating');
      animationIndex++;
      if(animationIndex < elementsToAnimate.length){
        animateElements();
      }
    }, { once: true });
  }
}

function initAnimation() {
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2, // 50% видимости
  });
  observer.observe(container);
}

window.addEventListener('load', initAnimation);



            const image = document.querySelector('.main__fotos');
        
        const observers = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('show');
              observers.unobserve(image); // Наблюдатель отключается после появления
            }
          });
        }, {
          threshold: 0 // Появление на 50%
        });
        
        observers.observe(image);
        


      
        
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src ="images/free-icon-close-151882.png";
}
    else {
        navBtnImg.src ="images/icons8-меню.svg";
}
}



const links=document.querySelectorAll(".nav__menu__item>a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}
        

document.querySelector('.btn_title').addEventListener('click', openPopup);
function openPopup() {document.querySelector('.popup > .obratnuj-zvonok').classList.add('_opened')
};

document.querySelector('.popup__close').addEventListener('click', closePopup)
// document.querySelector('.popup__close-bk').addEventListener('click', closePopup)


function closePopup() { document.querySelector('.popup > .obratnuj-zvonok').classList.remove('_opened')
}
     
        





