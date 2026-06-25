function palindrome(str)
 {

    let charc =str.split("")
     let rev = "";
for(i =charc.length-1; i>=0; i--)
    {
    
 rev = rev + charc[i]
}
console.log(rev)

if (str === rev)
    {
    console.log("palindrome is true")
}
else{
    console.log("not an palindrome ")
}
}

palindrome("madam")
palindrome("hello")

