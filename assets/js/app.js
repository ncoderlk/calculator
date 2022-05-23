document.addEventListener("DOMContentLoaded", () => {
const btn=document.querySelectorAll('button[id="btn"]');
//input value
function txtap(str) {
    var dis = document.getElementById("txt");
    dis.value += str;
}
//Proces Of Answer
function outext() {

    var dis = document.getElementById("txt");
    var opt = dis.value;
    var result = eval(opt);
    dis.value = result;
    document.getElementById('trt').innerHTML=opt
}
//---------Erase Btn
function btnclear(){
   
    var dis = document.getElementById("txt");
    var opt = dis.value;
    var res="";
    if(opt==""){
       
        dis.value=res
    }
    else if(opt==null){
        
        dis.value=res
    }
    else if(opt==undefined){
       
        dis.value=res
    }
    else if(opt=="undefined"){
        dis.value=res
    }
    else{
        var result = eval(opt.slice(0,-1));
        dis.value = result;
        
    }
   
}
//------All Clear Button
function btnaclear(){

    location.reload();
    var dis=document.getElementById('txt');
    return dis.value="";
}
//--------------Process
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
})
