// let y = 3;

// switch(y){
//     default:
//     case 1:
//         console.log(1+1);
//         break
//     case 2:
//         console.log(2+2)
// }

let count = 0;
let x = 3;

while(count < 3){
    count = count + 1;
    let y = (1 + 2 * count) % 3;
    switch(y){
        default: 
        case 0: x = x -1;
        break;
        case 1: x = x + 5;
    }
}

console.log(x)