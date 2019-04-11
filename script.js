function classToggle() {
    this.classList.toggle('active');
    document.querySelector('.box').classList.toggle('open');
}

window.onload=function(){
  document.querySelector('.btn').addEventListener('click', classToggle);
}

