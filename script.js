document.addEventListener("DOMContentLoaded", function () {
  new SimpleAdaptiveSlider(".slider", {
    loop: false,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});

let allFilterBtn = document.querySelectorAll('.slider__filter-btn');

if (allFilterBtn) {
  allFilterBtn.forEach(button => {
    button.addEventListener('click', () => {
      allFilterBtn.forEach(btn => {
        btn.classList.remove('active')
      });
      if (button.id === 'her') {
        document.querySelector('.slider__control_next').click();
        document.querySelector('.slider__btn').style.display = 'none';
        document.querySelectorAll('.slider__item').forEach(item => item.classList.remove('slider__item_active'))
        document.querySelector(`.slider__item-${button.id}`).classList.add('slider__item_active')
      }

      if (button.id === 'his') {
        document.querySelector('.slider__control_prev').click();
        document.querySelector('.slider__btn').style.display = 'none';
        document.querySelectorAll('.slider__item').forEach(item => item.classList.remove('slider__item_active'))
        document.querySelector(`.slider__item-${button.id}`).classList.add('slider__item_active')
      }

      if (button.id === 'all') {
        document.querySelector('.slider__control_prev').click();
        document.querySelector('.slider__btn').style.display = 'flex';
      }
      button.classList.add('active');
    })
  })
}