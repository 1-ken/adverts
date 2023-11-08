
function loadPage(page) {
  if (page === 'home.html') {
    
    document.getElementById('content').innerHTML = '';
  } else {
    fetch(page)
      .then(response => response.text())
      .then(content => {
        document.getElementById('content').innerHTML = content;
      })
  }

  // Update active link
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}