const person={
    header:"Calculator",
    helpertext:"First Enter The Math You Want To Slove In the Box Then Click On Equals Buttons",
    madeby:"This Was Created By ncodeerlk",
}
document.getElementById('name').innerHTML=("<center>" + person.header +"</center>");
//Onclick Buttons To One Const
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
