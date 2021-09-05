const input = prompt('Please enter a string: ');

function palindrome (input) {

    const result = input.replace(/[^0-9a-zа-яё]/gi, '').toLowerCase();
    
    if (result.split('').join('') === result.split('').reverse().join('')) {
        alert ('This is a palindrome');
    }
    else {
        alert ('This is not a palindrome');
    }
}

palindrome(input);