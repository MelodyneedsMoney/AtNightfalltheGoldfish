

    $("#lineB1").hide(); $("#lineB2").hide(); $("#lineB3").hide(); $("#lineB4").hide(); $("#lineB5").hide();
    $("#lineB6").hide(); $("#lineB7").hide(); $("#lineB8").hide(); $("#lineB9").hide(); $("#lineB10").hide();
    $("#lineB11").hide(); $("#lineB12").hide(); $("#lineB13").hide();$("#lineB14").hide();

    $("#backB").hide();

    $("#y2").hover(hide);
    function hide(){
        $("#y2").hide();
    }

    $("#y1").hover(show1);
    function show1() {
    $("#lineB1")
    .delay(600)
    .fadeIn(800);
    $("#y1").hide();
    }

    $("#y3").hover(show2);
    function show2() {
    $("#lineB2")
    .delay(600)
    .fadeIn(800);
    $("#y3").hide();
    }

    $("#y4").hover(show3);
    $("#y5").hover(hide1);
    function hide1(){
        $("#y5").hide();
    }
    function show3() {
    $("#lineB3")
    .delay(600)
    .fadeIn(800);
    $("#y4").hide();
    }

    $("#y6").hover(show4);
    function show4() {
    $("#lineB4")
    .delay(600)
    .fadeIn(800);
    $("#y6").hide();
    }

    $("#y7").hover(show5);
    function show5() {
    $("#lineB5")
    .delay(600)
    .fadeIn(800);
    $("#y7").hide();
    }

    $("#y8").hover(show6);
    function show6() {
    $("#lineB6")
    .delay(600)
    .fadeIn(800);
    $("#lineB14")
    .delay(600)
    .fadeIn(800);
    $("#y8").hide();
    }

    $("#y9").hover(show7);
    function show7() {
    $("#lineB7")
    .delay(600)
    .fadeIn(800);
    $("#y9").hide();
    }

    $("#y10").hover(show8);
    $("#y11").hover(hide2);
    function hide2(){
        $("#y11").hide();
    }
    function show8() {
    $("#lineB8")
    .delay(600)
    .fadeIn(800);
    $("#y10").hide();
    }

    $("#y12").hover(show9);
    function show9() {
    $("#lineB9")
    .delay(600)
    .fadeIn(800);
    $("#y12").hide();
    }

    $("#y13").hover(show10);
    function show10() {
    $("#lineB10")
    .delay(600)
    .fadeIn(800);
    $("#y13").hide();
    }

    $("#y14").hover(show11);
    function show11() {
    $("#lineB11")
    .delay(600)
    .fadeIn(800);
    $("#y14").hide();

    }

    $("#y15").hover(show12);

    function show12() {

        $("#lineB12")
        .delay(600)
        .fadeIn(800);
        $("#lineB13")
        .delay(600)
        .fadeIn(800);

        $("#y15").hide();


    $("#backB").show();

    if (cAngler&&cBoy&&cOwner&&cGoldfish&&cNeighbor){
        document.getElementById("backB").innerHTML="The End";
    }
    else if (cBoy)
    document.getElementById("backB").innerHTML="Continue";

    }
