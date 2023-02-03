


let message: string = "Hello people!";
let bool1: boolean = true;
//console.log(CountSentence(message));
//console.log(NoSpaceCount(message));
console.log(CountSentenceModified(message, bool1));

function CountSentence(sent: string) {
    let count: number = sent.length;

    return count;
}

function NoSpaceCount(sent: string) {
    let count: number = sent.replace(" ", "").length;

    return count;
}

function CountSentenceModified(sent: string, space?: boolean) {
    let count: number = 0;
    if(space == false)
    {
        count = sent.replace(" ", "").length;
    }
    else{
        count = sent.length;
    }

    return count;
}



