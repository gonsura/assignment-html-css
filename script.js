const s = (elm) => document.getElementById(elm)

const block = (elm) => (elm.style.display = 'block')
const none = (elm) => (elm.style.display = 'none')

const fillWhite = (elm) => elm.setAttribute('fill', '#fff')
const fillGray = (elm) => elm.setAttribute('fill', '#1A1003')

const bgPrimary = (elm) => (elm.style.backgroundColor = '#FF9C1B')
const bgTertiary = (elm) => (elm.style.backgroundColor = '#F2F5F9')

s('home-nav').addEventListener('click', () => {
  block(s('home'))
  none(s('resume'))
  none(s('contact'))
  fillWhite(s('home-svg'))
  fillGray(s('resume-svg'))
  fillGray(s('contact-svg'))
  bgPrimary(s('home-bg'))
  bgTertiary(s('resume-bg'))
  bgTertiary(s('contact-bg'))
})

s('resume-nav').addEventListener('click', () => {
  block(s('resume'))
  none(s('home'))
  none(s('contact'))
  fillWhite(s('resume-svg'))
  fillGray(s('home-svg'))
  fillGray(s('contact-svg'))
  bgPrimary(s('resume-bg'))
  bgTertiary(s('home-bg'))
  bgTertiary(s('contact-bg'))
})
s('contact-nav').addEventListener('click', () => {
  // s('contact').style.display = 'block'
  block(s('contact'))
  // s('home').style.display = 'none'
  none(s('home'))
  // s('resume').style.display = 'none'
  none(s('resume'))
  // s('contact-svg').setAttribute('fill', '#fff')
  fillWhite(s('contact-svg'))
  // s('home-svg').setAttribute('fill', '#1A1003')
  fillGray(s('home-svg'))
  // s('resume-svg').setAttribute('fill', '#1A1003')
  fillGray(s('resume-svg'))
  // s('contact-bg').style.backgroundColor = '#FF9C1B'
  bgPrimary(s('contact-bg'))
  // s('home-bg').style.backgroundColor = '#F2F5F9'
  bgTertiary(s('home-bg'))
  // s('resume-bg').style.backgroundColor = '#F2F5F9'
  bgTertiary(s('resume-bg'))
})
