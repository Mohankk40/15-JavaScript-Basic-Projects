const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if(id) {
    //remove active from other buttons
    tabBtn.forEach((btn) => {
      btn.classList.remove('active');
    });

    e.target.classList.add('active');

    articles.forEach((content) => {
      content.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');
  }
});