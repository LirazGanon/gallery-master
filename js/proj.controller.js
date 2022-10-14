'use strict'
renderProjs()

function renderProjs() {
    var projs = getProjs()
    if (!projs || !projs.length) return

    var strHtmls = projs.map(proj => `
    <article data-id="${proj.id}" class="col-md-4 col-sm-6 portfolio-item p-0  m-3">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
    <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}.png">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
  </article>
        `
    )
    $('.proj-container').html(strHtmls)
    $('.portfolio-item').on('click', onRenderModal)
    $('.year').text(new Date().getFullYear())
}

function onSendMail(ev) {
    ev.preventDefault()
    const name = ev.target.name.value
    const email = ev.target.email.value
    const subject = ev.target.subject.value
    const body = ev.target.message.value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lirazganon@gmail.com&su=${subject}&body=${body}`,"blank")
    openCanvas()  
}



function onRenderModal(projId) {
    var projId = $(this).data().id
    console.log(projId)
    var proj = getProjs().find((proj) => proj.id === projId)

    const $modal = $('.project-details')
    $modal.children('h2').text(proj.name)
    $modal.children('.item-intro').text(proj.title)
    $modal.children('.tags').text(proj.labels.join(" "))
    $modal.children('.img-fluid').attr('src', `img/portfolio/${proj.id}-full.png`)
    $modal.children('.project-link').attr('href', proj.url)
    $modal.children('.desc').text(proj.desc)
    $modal.find('.proj-date').text(proj.publishedAt)
    $modal.find('.proj-category').text(proj.category)

}



