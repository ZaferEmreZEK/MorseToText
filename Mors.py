def StringControl(String,count):
    AlphabetMors = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..' , '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '.-.-.-', '--..--', '..--..', '/']
    AlfhabetText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '.', ',', '?', ' ']
    sayac = 0
    if (count == 1):#eğer count 1 ise mors'tan text'e çeviriyoruz
        for sign in AlphabetMors:
            sayac = sayac + 1
            if(String == sign):
                return AlfhabetText[sayac-1]
    if (count == 0): # eğer count 0 ise text'ten Mors'a çeviriyoruz
        for sign in AlfhabetText:
            sayac = sayac + 1
            if(String == sign):
                return AlphabetMors[sayac-1]
    else:
        return None


def TextToMors(text):
    text = list(text)
    mors = ""
    sum = ""
    for i in text:
        mors = StringControl(i,0)
        sum =sum + mors + " "
    print(sum)

    return sum

def MorsToText(mors):
    mors = mors.split(" ")
    text = ""
    sum = ""
    for i in mors:
        text = StringControl(i,1)
        if text == None:
            continue
        sum =sum + text
    print(sum)
    return sum


if __name__ == "__main__":
    text = input().upper()

    Mors = TextToMors(text)
    text = MorsToText(Mors)

