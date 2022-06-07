// humberger 
const humberger = document.querySelector('#humberger');
const navmenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
  humberger.classList.toggle('humberger-active');
  navmenu.classList.toggle('hidden');
});

//navbar-fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  }else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

// klick out of navbar to close navbar (phone version)
window.addEventListener('click',function (e) {
  if (e.target !=navmenu && e.target !=humberger) {
    humberger.classList.remove('humberger-active');
    navmenu.classList.toggle('hidden');
  }
});