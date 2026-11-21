function CountNumberOfWord(text){
    let count = 0;
    let inWord = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !inWord) {
            count++;          // a new word starts
            inWord = true;
        } else if (text[i] === ' ') {
            inWord = false;
        }
    }
    return count;
}
console.log(CountNumberOfWord("hello world"));
console.log(CountNumberOfWord("this is the best day"));
console.log(CountNumberOfWord("a bb ccc ddddddd e"));