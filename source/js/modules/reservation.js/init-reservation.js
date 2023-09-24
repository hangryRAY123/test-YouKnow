export const initResrvation = () => {
  const btn = Array.from(document.querySelectorAll('.rooms__btn'));
  const overlay = Array.from(document.querySelectorAll('.rooms__overlay'));
  const card = Array.from(document.querySelectorAll('.rooms__card'));

  btn.forEach((item, index) => {
    const addOverlay = () => {
      overlay[index].style.visibility = 'visible';
      overlay[index].style.opacity = '1';
      overlay[index].style.cursor = 'pointer';
    };

    item.onclick = () => {
      item.disabled = 'disabled';
      card[index].addEventListener('mouseleave', addOverlay);
    };

    overlay[index].onclick = () => {
      overlay[index].style.visibility = 'hidden';
      overlay[index].style.opacity = '0';
      overlay[index].style.cursor = 'auto';
      item.disabled = '';
      card[index].removeEventListener('mouseleave', addOverlay);
    };
  });

};
