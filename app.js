let result = document.querySelector('.cal__result');

const valueButton = (e) => {
    result.value += e.textContent;
}

const equals = () => {
    let answer = result.value;
    if (answer) {
        result.value = eval(answer);
    }
}