function launchbrowser(browsername)
{

if (browsername === "chrome")
    {
    console.log("displaying chrome browser")
}
else if (browsername === "edge")
    {
    console.log("displaying edge browser")
}
else {
    console.log("not supported browser")
}
}


function runtest(testtype)
{
switch(true){
    case(testtype === "smoke"):
        console.log("It is a smoke ")
        break;
    case(testtype ===  "sanity"):
        console.log("It is a sanity ")
        break;  
    case(testtype ===  "regression"):
        console.log("It is a regression ")
        break;
    
    default:
        console.log("default case")

}
}

launchbrowser("chrome")
launchbrowser("Firefox")
runtest("smoke")
runtest("palindrome")