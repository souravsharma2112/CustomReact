const mainContainer = document.getElementById("root");

const customReactAdd = (tagName , mainContainer) =>{
    let reactdom = document.createElement(tagName.type);
    reactdom.innerHTML = tagName.children
    reactdom.setAttribute('href', tagName.href);
    reactdom.setAttribute('target',tagName.target);
    mainContainer.appendChild(reactdom);
}

const reactElement = {
    type :"a",
    href : "https://www.google.com/",
    target : "_blank",
    children : "CLickMe"
}
customReactAdd(reactElement ,mainContainer)