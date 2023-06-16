function  Is_Palindrome(mot){
    if (mot.length<=1){
    return true;
}
    if(mot[0]===mot[mot.length-1]){
        return Is_Palindrome(mot.substring(1,mot.length-1));
    }
    return false;
}
console.log(Is_Palindrome("karak"));
console.log(Is_Palindrome("maroc"));