function galeria() {
  let time = 5000,
    ImgIndex = 0,
    imagens = document.querySelectorAll('.imgs-galeria img')
    max = imagens.length
  imagens[ImgIndex].classList.add('selecionado')

  function proximaImg() {
    imagens[ImgIndex].classList.remove('selecionado')
    ImgIndex++

    if (ImgIndex >= max) {
      ImgIndex = 0
    }

    imagens[ImgIndex].classList.add('selecionado')
  }

  function inicio() {
    setInterval(() => {
      proximaImg()
    }, time)
  }

  window.addEventListener('load', inicio)

}

galeria()

function moverMenuRes() {
  let btnCheck = document.querySelector('#checkbox-menu')
  let menu = document.querySelector('.menu ul')

  btnCheck.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
}

moverMenuRes()

