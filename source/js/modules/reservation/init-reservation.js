export const initReservation = () => {
  const btn = document.querySelectorAll('.rooms__btn');
  const overlay = document.querySelectorAll('.rooms__overlay');
  const card = document.querySelectorAll('.rooms__card');
  const room = document.querySelectorAll('.rooms__item');

  btn.forEach((item, i) => {
    const addOverlay = () => {
      overlay[i].classList.add('rooms__overlay--visible');
      card[i].classList.add('rooms__card--not-hover');
      room[i].classList.add('rooms__item--not-hover');
    };

    item.onclick = () => {
      item.disabled = 'disabled';
      card[i].addEventListener('mouseleave', addOverlay);
    };

    overlay[i].onclick = () => {
      item.disabled = '';
      overlay[i].classList.remove('rooms__overlay--visible');
      card[i].classList.remove('rooms__card--not-hover');
      room[i].classList.remove('rooms__item--not-hover');
      card[i].removeEventListener('mouseleave', addOverlay);
    };
  });
};
