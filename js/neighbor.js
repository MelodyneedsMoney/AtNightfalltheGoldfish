
    $("#lineN1").hide(); $("#lineN2").hide(); $("#lineN3").hide(); $("#lineN4").hide(); $("#lineN5").hide();
    $("#lineN6").hide(); $("#lineN7").hide(); $("#lineN8").hide(); $("#lineN9").hide(); $("#lineN10").hide();
    $("#lineN11").hide(); $("#lineN12").hide(); $("#lineN13").hide(); $("#lineN14").hide(); $("#lineN15").hide();
    $("#lineN16").hide();$("#lineN17").hide();$("#lineN18").hide();

    $("#backN").hide();

    $("#your").hover(show1);

    function show1() {
    $("#lineN1")
    .delay(600)
    .fadeIn(800);
    $("#your").hide();
    }

    $("#rose").hover(show2);

    function show2() {
    $("#lineN2")
    .delay(600)
    .fadeIn(800);
    $("#rose").hide();
    }

    $("#you_n").hover(show3);
    function show3() {
    $("#lineN3")
    .delay(600)
    .fadeIn(800);
    $("#you_n").hide();
    }

    $("#held").hover(show4);
    function show4() {
    $("#lineN4")
    .delay(600)
    .fadeIn(800);
    $("#held").hide();
    }

    $("#my_n").hover(show5);
    function show5() {
    $("#lineN5")
    .delay(600)
    .fadeIn(800);
    $("#my_n").hide();
    }

    $("#hand").hover(show6);
    function show6() {
    $("#lineN6")
    .delay(600)
    .fadeIn(800);
    $("#lineN18")
    .delay(600)
    .fadeIn(800);
    $("#hand").hide();
    }

    $("#i2_n").hover(show7);
    function show7() {
    $("#lineN7")
    .delay(600)
    .fadeIn(800);
    $("#i2_n").hide();
    }

    $("#knew").hover(show8);
    function show8() {
    $("#lineN8")
    .delay(600)
    .fadeIn(800);
    $("#knew").hide();
    }

    $("#i3_n").hover(show9);
    function show9() {
    $("#lineN9")
    .delay(600)
    .fadeIn(800);
    $("#i3_n").hide();
    }

    $("#droke").hover(show10);
    function show10() {
    $("#lineN10")
    .delay(600)
    .fadeIn(800);
    $("#droke").hide();
    }

    $("#loved").hover(show11);
    function show11() {
    $("#lineN12")
    .delay(600)
    .fadeIn(800);
    $("#loved").hide();
    }

    $("#i4_n").hover(show12);
    function show12() {
    $("#lineN11")
    .delay(600)
    .fadeIn(800);
    $("#i4_n").hide();
    }

    $("#nobody").hover(show13);
    function show13() {
    $("#lineN13")
    .delay(600)
    .fadeIn(800);
    $("#nobody").hide();
    }

    $("#buried").hover(show14);
    function show14() {
    $("#lineN14")
    .delay(600)
    .fadeIn(800);
    $("#buried").hide();
    }

    $("#my2_n").hover(show15);
    function show15() {
    $("#lineN15")
    .delay(600)
    .fadeIn(800);
    $("#my2_n").hide();
    }

    $("#lonesome").hover(show16);
    function show16() {
    $("#lineN16")
    .delay(600)
    .fadeIn(800);
    $("#lonesome").hide();
    }

    $("#past_n").hover(show17);
    function show17() {
    $("#lineN17")
    .delay(600)
    .fadeIn(800);
    $("#past_n").hide();

  //  let rand=Math.random();
    $("#backN").delay(1500).fadeIn(100);

    if (cAngler&&cBoy&&cOwner&&cGoldfish&&cNeighbor){
      document.getElementById("backN").innerHTML="The End";
  }
  else if (cNeighbor)
  document.getElementById("backN").innerHTML="Continue";

    }