function basculer() {
  var x = document.getElementById('panel');
  if (getComputedStyle(x).display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
