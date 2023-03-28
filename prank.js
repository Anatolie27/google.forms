let video = document.getElementById('my-video');
let text = document.getElementById('my-text');

video.addEventListener('ended', function() {
  video.style.display = 'none';
  text.style.display = 'block';
});