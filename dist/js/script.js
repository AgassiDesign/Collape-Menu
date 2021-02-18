const mobile_btn = document.querySelector('.mobile__menu-btn');
const navbar = document.querySelector('.navbar');
const navCollapse = document.querySelector('.nav__collapse');
navCollapse.style.display = 'block';
let clientHeight = navCollapse.clientHeight;
navCollapse.style.display = '';

function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

const navbarCollapse = debounce(() => {
  if (navCollapse.classList.contains('show')) {
    mobile_btn.classList.remove('open');
    navCollapse.style.height = clientHeight;
    navCollapse.classList.remove('collapse');
    navCollapse.classList.remove('show');
    navCollapse.classList.add('collapsing');
    setTimeout(() => {
      navCollapse.style.height = '';
    }, 15);
    setTimeout(() => {
      navCollapse.classList.remove('collapsing');
      navCollapse.classList.add('collapse');
    }, 350);
  } else {
    mobile_btn.classList.add('open');
    navCollapse.classList.remove('collapse');
    navCollapse.classList.add('collapsing');
    setTimeout(() => {
      navCollapse.style.height = clientHeight;
    }, 15);
    setTimeout(() => {
      navCollapse.classList.add('collapse');
      navCollapse.classList.remove('collapsing');
      navCollapse.classList.add('show');
      navCollapse.style.height = '';
    }, 350);
  }
}, 350);

mobile_btn.addEventListener('click', function () {
  navbarCollapse();
});
