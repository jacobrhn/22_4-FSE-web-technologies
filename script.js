
document.querySelector('.menu-ul').addEventListener('mouseover', function(event) {
  event.target.style.color = '#ff0000';
});

document.querySelector('.menu-ul').addEventListener('mouseout', function(event) {
  event.target.style.color = '';
});

