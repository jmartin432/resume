import resume from "../resume.json"

export function makeMainDivs() {
    console.log('here')
    let resumeDiv = document.createElement("div", )
    resumeDiv.setAttribute('id', 'resume-div')
    document.body.appendChild(resumeDiv)
    let iconBarDiv = document.createElement("div", )
    iconBarDiv.setAttribute('id', 'icon-bar-div')
    document.body.appendChild(iconBarDiv)
}

function makeHeader(headerName, headerId) {
    let resumeDiv = document.getElementById('resume-div')
    let header = document.createElement('h1')
    header.setAttribute('id', 'headerId')
    header.setAttribute('class', 'header')
    header.textContent = headerName;
    resumeDiv.appendChild(header)
}

export function makeHeaders() {
    makeHeader('Contact Info', 'contact-header')
    makeHeader('Summary', 'summary-header')
    makeHeader('Technical Skills', 'tech-skills-header')
    makeHeader('Work History', 'work-header')
    makeHeader('Education', 'education-header')
    makeHeader('Links', 'links-header')
}

function addIcon(iconId, linkUrl, imageUrl) {
    let iconBarDiv = document.getElementById('icon-bar-div')
    let a = document.createElement('a')
    a.setAttribute('href', linkUrl)
    a.setAttribute('target', '_blank')
    let img = document.createElement('img')
    img.setAttribute('id', iconId)
    img.setAttribute('class', 'icon-image')
    img.setAttribute('src', imageUrl)
    img.setAttribute('alt', iconId)
    a.appendChild(img)
    iconBarDiv.appendChild(a)
}

export function makeIconsBar(){
    addIcon('mail-icon', 'mailto:info@justinlmartin.com', '../images/mail-200.png')
    addIcon('linkedin-icon', 'https://www.linkedin.com/in/justinleemartin', '../images/linked-in-200.png')
    addIcon('github-icon', 'https://github.com/jmartin432', '../images/github-120.png')
    addIcon('codepen-icon', 'https://codepen.io/jmartin432/', '../images/codepen-64.png')
    addIcon('landing-page-icon', 'https://justinlmartin.com', '../images/flower-logo-line-200.png')
}


