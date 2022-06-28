if(100 ==='100'){
    console.log('This is equal');
} else{
    console.log('Nope!')
}


let height = 100;
//if you dont have more than 4 conditons
if(height < 60){
    console.log('Maybe next year')
} else if(height>=60 && height <100){ //complex conditions
    console.log('you can ride the ride')
}else{
    console.log('You may not fit comfortably')
}

let finalGrade =60;

switch (finalGrade) {
    case 60:
        console.log('Keep studying')
        break;
    case 90:
        console.log('Great Job!')
        break;

    default:
        console.log('You did not get a 60 or a 90')
        break;
}


