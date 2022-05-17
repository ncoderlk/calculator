
const btn=document.querySelectorAll('button[id="btn"]');
//input value
function txtap(str) {
    var dis = document.getElementById("txt");
    dis.value += str;
}
//Answer
function outext() {

    var dis = document.getElementById("txt");
    var opt = dis.value;
    var result = eval(opt);
    dis.value = result;
    document.getElementById('trt').innerHTML=opt
}
function btnclear(){
    var dis = document.getElementById("txt");
    var opt = dis.value;
    var result = eval(opt.slice(0,-1));
    dis.value = result;
}
function btnaclear(){
    location.reload();
}
//Process
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        bclickh(this);
    });
}
 function bclickh(btn) {
   
    var value = btn.value;                    
    switch (value) {
        case "=":
            outext();
            break;
        case "C":
            btnclear();
            break;
            case "AC":
            btnaclear();
            break;
        default:
            txtap(value);
            break;
    }
}

function re(){
    location.reload();
}
