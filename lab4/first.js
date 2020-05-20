export function openFirst() {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const div = document.createElement('div')
    const pName = document.createElement('p')
    const pGroup = document.createElement('p')
    const name = document.createTextNode('Pavlov Maxim Mikhailovich')
    const group = document.createTextNode('Group M3306')
    pName.appendChild(name)
    pGroup.appendChild(group)

    const title = document.createElement('h2')
    const titleValue = document.createTextNode('My info:')
    title.appendChild(titleValue)
    div.appendChild(title)

    div.appendChild(pName)
    div.appendChild(pGroup)
    content.appendChild(div)
}