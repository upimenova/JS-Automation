const sentence = prompt('Please enter a sentence or set of sentences: ');
const number = prompt('Please enter a number: ');
const replacement = prompt('Please enter a letter or word: ');

function change (sentence, number, replacement) {
    const result = []
    let wordWithReplacement = ''
    const arrayOfWords = sentence.split(' ');
    debugger

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].replace(/[^0-9a-zа-яё]/gi, '').length >= number) {
            if (number >= 2) {
                wordWithReplacement = arrayOfWords[i].substr(0, number-1) + replacement + arrayOfWords[i].substr(number);
            }
            else if (number == 1) {
                wordWithReplacement = replacement + arrayOfWords[i].substr(1);
            }
            result.push(wordWithReplacement);
        }
        else {
            result.push(arrayOfWords[i]);
        }
    }
    alert (result.join(' '));
}

change(sentence, number, replacement);
    