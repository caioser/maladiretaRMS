let main = "";
let text1 = "<div class=\"serial\">";
let text2 = "/2020</div>";
let i = 1;
let zeros = "";

for ( i; i <= 1; i++) {
    switch (i.toString().length) {
        case 1:
            zeros = "0000";
            break;
        case 2:
            zeros = "000";
            break;
        case 3:
            zeros = "00";
            break;
        case 4:
            zeros = "0";
            break;
        default:
            zeros = "";
            break;
    }
    
    main += text1+zeros+i+text2;
    
    console.log(i.toString().length);
    console.log(i);
}

document.getElementById("demo").innerHTML = main;