function stgrade(percentage){


switch(true){
    case(percentage>85):
        console.log("Student has scored A grade");
        break;
    case(percentage>65 && percentage<=85):
        console.log("Student has scored B grade");
        break;
    case(percentage<65):
        console.log("Student has scored C grade");
        break;
}
}

stgrade(90)
stgrade(30)
