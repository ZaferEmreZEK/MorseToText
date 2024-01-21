/*bu kod parçası girilen mors alfabesiyle yazılmış metni normal metine çevirir;
girilen metin normal metin ise mors alfabesine çevirir.
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(){
    char normal[43] = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","Nokta","Virgül","Soru İşareti"};
    char mors[43] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.",".-.-.-","--..--","..--.."];
    char *metin;
    metin = (char*)malloc(100*sizeof(char));
    printf("metin giriniz:");
    scanf("%s",metin);
    int i,j;
    int uzunluk = strlen(metin);
    for(i=0;i<uzunluk;i++){
        for(j=0;j<30;j++){
            if(metin[i] == normal[j]){
                printf("%s",mors[j]);
            }
            else if(metin[i] == mors[j]){
                printf("%s",normal[j]);
            }
        }
    }

    /*bu kısımda girilen metin analiz edilir.
    */
    




}