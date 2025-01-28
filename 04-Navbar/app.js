const navToggle = document.querySelector('.nav-toggle');
const showLink = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // if(showLink.classList.contains('show-links')){
  //   showLink.classList.remove('show-links');
  // } else{
  //   showLink.classList.add('show-links');
  // }
  showLink.classList.toggle('show-links');
});