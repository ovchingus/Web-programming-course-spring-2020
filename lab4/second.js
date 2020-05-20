function Insert(tag, content) {
    const node = document.createElement(tag)
    const textNode = document.createTextNode(content)
    node.appendChild(textNode)
    return node
}

export function openSecond() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        const abilities = data.abilities

        return Promise.all(abilities.map(element => {
            return fetch(element.ability.url)
        }))
    })
    .then((data) => {
        return Promise.all(data.map(abilityResp => {
            return abilityResp.json()
        }))
    })
    .then((data) => {
        const content = document.querySelector('.content')
        content.innerHTML = ''
        const div = document.createElement('div')
        const abilityUl = document.createElement('ul')
        data.forEach((elem) => {
            const abilityLi = document.createElement('li')
            const effectUl = document.createElement('ul')
            elem.effect_entries.forEach((eff => {
                effectUl.appendChild(Insert('li', eff.effect))
            }))
            abilityLi.appendChild(Insert('h4', elem.name))

            abilityLi.appendChild(effectUl)
            abilityUl.appendChild(abilityLi)
        })
        div.appendChild(Insert('h2', 'All abilities of Ditto:'))
        div.appendChild(abilityUl)
        content.appendChild(div)
    })
}