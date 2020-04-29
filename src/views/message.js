import html from './message.html'
import './message.css'

let iframe
let body
let widget

export function show () {
  body = document.getElementsByTagName('body')[0]
  const temporary = document.createElement('div')
  temporary.innerHTML = html
  while (temporary.children.length > 0) {
    body.appendChild(temporary.children[0])
  }
  widget = document.getElementById('otechie-widget')
  iframe = document.getElementsByClassName('otechie-widget-iframe')[0]
  const bubble = document.getElementsByClassName('otechie-widget-bubble')[0]
  const mobileX = document.getElementsByClassName('otechie-mobile-x')[0]

  bubble.addEventListener('click', toggle)
  mobileX.addEventListener('click', toggle)
  iframe.src = `${process.env.WEB_URL}/${window.ow.configurations.username}`
}

export function toggle () {
  if (widget.classList.contains('otechie-open')) {
    widget.classList.remove('otechie-open')
    body.classList.remove('otechie-lock')
    iframe.contentWindow.blur()
  } else {
    iframe.hidden = false
    widget.classList.add('otechie-open')
    body.classList.add('otechie-lock')
    iframe.contentWindow.focus()
  }
}
