function toggleContent(index) {
  const content = document.getElementById('content-' + index);
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}