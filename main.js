const addElementBtn = document.querySelector("button");
const display = document.querySelector("#display");

let iter = 0;

const elementType = ['p', 'div', 'article'];

function addElement() {
    const Element = document.createElement('p');
    Element.innerHTML = Nowy element ${elementType[iter]};
    Element.addEventListener('click', function(){
        //this.remove.color = '#00f';
        this.remove();
    });
    display.appendChild(Element);
    iter++;
    if (iter > 2) {
        iter = 0;
    }
}

addElementBtn.addEventListener('click', addElement);