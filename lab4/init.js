import { openFirst } from './first.js'
import { openSecond } from './second.js'

export function initialize() {
    const tab = document.createElement('div')
    tab.className='tab'
    const content = document.createElement('div')
    content.className='content'

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')

    button1.textContent='MyInfo'
    button2.textContent='Pockemons'

    button1.addEventListener('click', (e) => {
        openFirst()
    })
    button2.addEventListener('click', (e) => {
        openSecond()
    })

    tab.appendChild(button1)
    tab.appendChild(button2)

    document.body.appendChild(tab)
    document.body.appendChild(content)

    openFirst()
}