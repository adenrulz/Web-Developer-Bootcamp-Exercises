const button = document.querySelector('button');
button.addEventListener('click', () => {

    const newColor = createRandColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').innerText = newColor;

})

const createRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b})`
}