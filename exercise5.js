var message = "Hello people!";
var bool1 = true;
//console.log(CountSentence(message));
//console.log(NoSpaceCount(message));
console.log(CountSentenceModified(message, bool1));
function CountSentence(sent) {
    var count = sent.length;
    return count;
}
function NoSpaceCount(sent) {
    var count = sent.replace(" ", "").length;
    return count;
}
function CountSentenceModified(sent, space) {
    var count = 0;
    if (space == false) {
        count = sent.replace(" ", "").length;
    }
    else {
        count = sent.length;
    }
    return count;
}
