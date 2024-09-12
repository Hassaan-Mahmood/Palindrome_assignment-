
var txt = prompt("please enter a word!");
var length = txt.length;
var msg = "is a Palindrome";
for (var i = 0; i < length / 2; i++) {
    if (txt[i] != txt[length - 1 - i]){
        msg = "is not a Palindrome";
    } 
}
document.write(`${txt} ${msg}`);