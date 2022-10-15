function openCanvas() {

    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}

function closeCanvas(event) {
    const node = document.querySelector('aside')
    const target = event.target.classList.value
    if (node.contains(event.target)) return
    if (target.includes('offcanvas-btn') || target.includes('fa-comment') ||
     target.includes('nav-link')) return
     
    if ($('aside').hasClass('offcanvas-aside-open')) {
        document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
        document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
    }
}