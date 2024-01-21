function upperCase(char){
    listeKucuk = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z']
    listeBuyuk = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (var i = 0; i < listeKucuk.length; i++) {
        if(char == listeKucuk[i]){
            return listeBuyuk[i];
        }
    }
    return char;
}

function morseToChar(morse){
    listeMors = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..' , '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '.-.-.-', '--..--', '..--..', '/']
    listeText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '.', ',', '?', ' ']
    for (var i = 0; i < listeMors.length; i++) {
        if(morse == listeMors[i]){
            return listeText[i];
        }
    }
}

function MorsToText(){
    var morse = document.getElementById("morsKodu").value;
    var text = "";
    var morseArray = morse.split("/");
    for (var i = 0; i < morseArray.length; i++) {
        text += morseToChar(morseArray[i]);
    }
    document.getElementById("text").innerHTML = text;
}

function charToMorse(char){
    listeMors = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..' , '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '.-.-.-', '--..--', '..--..', '/']
    listeText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '.', ',', '?', ' ']

    for (var i = 0; i < listeText.length; i++) {
        if(upperCase(char) == (listeText[i])){
            console.log(char);
            console.log(listeMors[i]);
            return listeMors[i];
        }
    }
}

function TextToMors(){
    var text = document.getElementById("morsKodu").value;
    var morse = "";
    var textArray = text.split("");
    console.log(textArray);
    for (var i = 0; i < textArray.length; i++) {
        morse += charToMorse(textArray[i]) + " ";
    }
    document.getElementById("text").innerHTML = morse;
}