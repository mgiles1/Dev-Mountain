let word;

export function setupWord(initWord, element) {
    word = initWord;
        element.innerHTML = '<div class="letter-box"></div>'.repeat(initWord.length)
    };

export function isLetterInWord(letter, word) {
    return word.includes(letter);
}

export function revealLetterInWord(letter, word) {
    const letterBoxes = document.querySelectorAll('.letter-box')
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter) {
            letterBoxes[i].textContent = letter
        }
    }
}

// export {setupWord, isLetterInWord, revealLetterInWord}