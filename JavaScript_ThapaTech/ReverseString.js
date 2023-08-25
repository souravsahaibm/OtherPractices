function reverseString() {
    var orgText = document.getElementById('inputText').value;
    var reverseText = "";
    // console.log(orgText);
    for (var i = orgText.length - 1; i >= 0; i--) {
        reverseText += orgText[i];
    }
    document.getElementById('ReverseText').value = reverseText;
}