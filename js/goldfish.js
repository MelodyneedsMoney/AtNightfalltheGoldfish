
//$("#confess").show();

$("#lineG1").hide(); $("#lineG2").hide(); $("#lineG3").hide(); $("#lineG4").hide(); $("#lineG5").hide();
$("#lineG6").hide(); $("#lineG7").hide(); $("#lineG8").hide(); $("#lineG9").hide(); $("#lineG10").hide();
$("#lineG11").hide();$("#lineG12").hide();$("#lineG13").hide();

$("#back1").hide();

$("#confess").hover(show1);
function show1() {
$("#lineG1")
.delay(600)
.fadeIn(800);
$("#confess").hide();
}

$("#to").hover(show2);

function show2() {
$("#lineG2")
.delay(600)
.fadeIn(800);
$("#to").hide();
}

$("#me").hover(show3);
function show3() {
$("#lineG3")
.delay(600)
.fadeIn(800);
$("#me").hide();
}

$("#i").hover(show4);
function show4() {
$("#lineG4")
.delay(600)
.fadeIn(800);
$("#i").hide();
}

$("#breathe").hover(show5);
function show5() {
$("#lineG5")
.delay(600)
.fadeIn(800);
$("#breathe").hide();
}

$("#i2").hover(show6);
function show6() {
$("#lineG6")
.delay(600)
.fadeIn(800);
$("#i2").hide();
}

$("#die").hover(show7);
function show7() {

$("#die").hide();
}

$("#die2").hover(show8);
function show8() {
$("#lineG7")
.delay(600)
.fadeIn(800);
$("#die2").hide();
}

$("#blood").hover(show9);
function show9() {
$("#lineG8")
.delay(600)
.fadeIn(800);
$("#blood").hide();
}

$("#in").hover(show10);
function show10() {
$("#lineG9")
.delay(600)
.fadeIn(800);
$("#in").hide();
}

$("#water").hover(show11);
function show11() {

$("#lineG10")
.delay(600)
.fadeIn(800);
$("#water").hide();


}
$("#with").hover(show12);
function show12() {

$("#lineG11")
.delay(600)
.fadeIn(800);
$("#with").hide();

}

$("#everything").hover(show13);
function show13() {
$("#lineG12")
.delay(600)
.fadeIn(800);
$("#everything").hide();
}

$("#and").hover(show14);
function show14() {
$("#lineG13")
.delay(600)
.fadeIn(800);
$("#and").hide();
}

$("#nothing").hover(show15);

function show15() {
//let rand=Math.random();
$("#back1").show();


$("#nothing").hide();

if (cAngler&&cBoy&&cOwner&&cGoldfish&&cNeighbor){
    document.getElementById("back1").innerHTML="The End";
}
else if (cGoldfish)
document.getElementById("back1").innerHTML="Continue";

}


