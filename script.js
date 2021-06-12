
//First parameters query; shows parameters and "calculates" them when user inputs all fields///
function showlist(){
        var oritt = document.getElementById("itt").value; 
        var orn1 = document.getElementById("n1").value; 
        var oat = document.getElementById("oat").value; 
        var alt = document.getElementById("alt").value;
        var nnumber = document.getElementById("nnumber").value;
                oritt= parseFloat(oritt);
                orn1= parseFloat(orn1);
        var n1yy = orn1.toFixed(2)
        if (oritt >= 200 && orn1 >= 40 && alt >= 500){
                 $('#inv_1').show();
                 $('#li_2').show(); 
                 $('#n09').show();
                 $('#orgn1').show();
                 $('#n10').show();
                 $('#orgitt').show();
                 $('#answer').show();
                 $('#inv_1').show();
                 $('#acft').show();
                 $('#eng_33').show();
                 $('#nr1').show();
                 $('#date').show();
                 $('#excel_btn').show();
                 $('#excel_logo').show();
                 $("#pointing").show;
                 remove_cookies();
                 original ();
                 calculator(); 
} else {
        hide_855();
        alert_01();
}




//Called from showlist when input requirements not fulfilled
function hide_855(){
                $('#inv_1').hide();
                $('#li_2').hide();
                $('#n09').hide();
                $('#orgn1').hide();
                $('#nr1').hide();
                $('#n10').hide();
                $('#orgitt').hide();
                $('#answer').hide();
                $('#inv_1').hide();
                $('#acft').hide();
                $('#eng_33').hide();
                $('#date').hide();
                $('#excel').hide();
                $('#excel_logo').hide();
                $('#pointing').hide();
                }       //alert function for else of show_list
                        function alert_01(){      
                        alert("Error: missing inputs")
                        }
}

//removed cookies when called upon (pre and post + action calculation )
 function remove_cookies() {
            var res = document.cookie;
            var multiple = res.split(";");
            for(var i = 0; i < multiple.length; i++) {
               var key = multiple[i].split("=");
               document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
            }
         }

                // hides assigned elements 
                   function hide_elements1() {
                        $('#inv_1').hide();
                        $('#li_2').hide();
                        $('#n09').hide();
                        $('#orgn1').hide();
                        $('#n10').hide();
                        $('#orgitt').hide();
                        $('#answer').hide();
                        $('#inv_1').hide();
                        $('#acft').hide();
                         $('#date').hide();
                         $('#excel_btn').hide();
                         $('#excel_logo').hide();
                          $('#pointing').hide();
   }


//Displays observed variables when parameters met, else reloads powercheck page
 function original () {
       var oritt = document.getElementById("itt").value; 
       var orn1 = document.getElementById("n1").value; 
       var oat = document.getElementById("oat").value; 
                oritt= parseFloat(oritt);
                orn1= parseFloat(orn1);
        var n1yy = orn1.toFixed(2)
        if (oritt >= 200 && orn1 >= 50){

                document.getElementById("orgitt").innerHTML = " ITT Observed   = " + oritt + "°C";  
                document.getElementById("orgn1").innerHTML = " N1 Observed   = " + n1yy + "%";

                }
                else {
                //window.location.replace("https://ll3powercheck.com/");
                alert("missing inputs")

}
}



//on-load hide date box
$(document).ready(function() {
   $('#date').hide();
});

// on-load hide excel button
$(document).ready(function() {
   $('#excel_btn').hide();
});

// on-load hide excel button
$(document).ready(function() {
   $('#excel_logo').hide();
});

$('#pointing').hide();
//on-click function "enter-key" assignment 
function checkEnterClick(oat){
   if(oat.keyCode == 13){
    showlist();
   } 

}
////////////////////////////////////////////////////////////////////////////////////////////////////////

//DATA PROCESS AND SAVE








////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Final parameter gate for calc1 ; else display alert
function calculator () {
      var ult = document.getElementById("tq").value;
      var itt = document.getElementById("itt").value;
      var ula = document.getElementById("alt").value;
      var tmp = document.getElementById("oat").value;
      var n1 = document.getElementById("n1").value;
      if (ult <= 80 && 200 <= itt <= 755 && n1 <= 100 && ula <= 4000 && tmp <= 35 & tmp >= -35){
        calc1();
      }else{
        y1442();
       }

}
//Calculator when all other requirements are met
function calc1 (){
var trq = document.getElementById("tq").value;

if (trq == 50 ) {
  tq_50();
} else {
  if (trq == 51) {
 tq_51();
}}

if (trq == 52 ) {
  tq_52();
} else {
  if (trq == 53) {
 tq_53();
}}

if (trq == 54 ) {
  tq_54();
} else {
  if (trq == 55) {
 tq_55();
}}

if (trq == 56 ) {
  tq_56();
} else {
  if (trq == 57) {
 tq_57();
}}

if (trq == 58 ) {
  tq_58();
} else {
  if (trq == 59) {
 tq_59();
}}

if (trq == 60 ) {
  tq_60();
} else {
  if (trq == 61) {
 tq_61();
}}

if (trq == 61 ) {
  tq_61();
} else {
  if (trq == 62) {
 tq_62();
}}

if (trq == 63 ) {
  tq_63();
} else {
  if (trq == 64) {
 tq_64();
}}

if (trq == 65 ) {
  tq_65();
} else {
  if (trq == 66) {
 tq_66();
}}

if (trq == 67 ) {
  tq_67();
} else {
  if (trq == 67) {
 tq_67();
}}

if (trq == 68 ) {
  tq_68();
} else {
  if (trq == 69) {
 tq_69();
}}

if (trq == 70 ) {
  tq_70();
} else {
  if (trq == 71) {
 tq_71();
}}

if (trq == 72 ) {
  tq_72();
} else {
  if (trq == 73) {
 tq_73();
}}

if (trq == 74 ) {
  tq_74();
} else {
  if (trq == 75) {
 tq_75();
}}

if (trq == 76 ) {
  tq_76();
} else {
  if (trq == 77) {
 tq_77();
 
}}

if (trq == 78 ) {
  tq_78();
} else {
  if (trq == 79) {
 tq_79();
}}

if (trq == 80 ) {
  tq_80();
} else {
  if (trq == 80) {
 tq_80();
}}

}



/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function tq_50 () {
  var ula = document.getElementById("alt").value;
  
  if (ula <= 600 && ula >= 0) {
  alt_0_600_50 ();
} else {
  if (ula <= 1200 && ula > 600) {
alt_600_1200_50 ();
}}

  if (ula <= 1800 && ula > 1200) {
   alt_1200_1800_50();
} else {
  if (ula <= 2400 && ula > 1800) {
 alt_1800_2400_50();
}}

  if (ula <= 3200 && ula > 2400) {
   alt_2400_3200_50();
} else {
  if (ula <= 4000 && ula > 3200) {
 alt_3200_4000_50();
}}}
    function alt_0_600_50 (){
                      var tr = document.getElementById("oat").value;
                        if (tr <= -16) {
                        temp_16neg ();
                        } else {
                        if (tr >= -15 && tr <= 16) {
                        temp_0();
                        }}  
                          if (tr >= 17) {
                            temp_16pos ();
                          }
                        
                        
                                                function temp_16neg (){
                                                      var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 + 2.0)
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".155")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .580)
                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(2)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(2)
                                                      var ittlimt5 = ittlimt.toFixed(0)
                                                      
                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ()
                                                      } else { 
                                                        ndisplay ();
                                                      }


                                                      function ndisplay () {
                                                      document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                      document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                      document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                      document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                      }var itt = document.getElementById("itt").value;
                                                document.cookie = "Itt result = "+ ittvv;
                                                document.cookie = "Itt original = "+ itt;
                                                document.cookie = "Itt limit = "+ ittlimt5;
                                                document.cookie = "N1 result = "+ n1tt1;
                                                document.cookie = "N1 original = "+ n11;
                                                document.cookie = "N1 limit = "+ n1tt99;
                                                      function cdisplay () {
                                                      document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                      }
                                                    }
                                                function temp_0 (){
                                                    var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 + 2.0)
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".135")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .280)
                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(2)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(2)
                                                      var ittlimt5 = ittlimt.toFixed(0)
                                                      
                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ()
                                                      } else { 
                                                        ndisplay ();
                                                      }


                                                      function ndisplay () {
                                                      document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                      document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                      document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                      document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                      }var itt = document.getElementById("itt").value;
                                                document.cookie = "Itt result = "+ ittvv;
                                                document.cookie = "Itt original = "+ itt;
                                                document.cookie = "Itt limit = "+ ittlimt5;
                                                document.cookie = "N1 result = "+ n1tt1;
                                                document.cookie = "N1 original = "+ n11;
                                                document.cookie = "N1 limit = "+ n1tt99;
                                                      function cdisplay () {
                                                      document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                       }
                                                                                        } 
                                              function temp_16pos (){
                                                      var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 - "3.0")
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".125")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .480)
                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(2)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(2)
                                                      var ittlimt5 = ittlimt.toFixed(0)
                                                      
                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ()
                                                      } else { 
                                                        ndisplay ();
                                                      }


                                                      function ndisplay () {
                                                      document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                      document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                      document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                      document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                      }var itt = document.getElementById("itt").value;
                                                document.cookie = "Itt result = "+ ittvv;
                                                document.cookie = "Itt original = "+ itt;
                                                document.cookie = "Itt limit = "+ ittlimt5;
                                                document.cookie = "N1 result = "+ n1tt1;
                                                document.cookie = "N1 original = "+ n11;
                                                document.cookie = "N1 limit = "+ n1tt99;
                                                      function cdisplay () {
                                                      document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                     }
                                                    }
               
      }



      
    function alt_600_1200_50 (){
                      var tr = document.getElementById("oat").value;
                        if (tr <= -16) {
                        temp_16neg ();
                        } else {
                        if (tr >= -15 && tr <= 16) {
                        temp_0();
                        }}  
                          if (tr >= 17) {
                            temp_16pos ();
                          }
                        
                        
                                                function temp_16neg (){
                                                      var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 + 2.0)
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".155")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .780)
                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(2)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(2)
                                                      var ittlimt5 = ittlimt.toFixed(0)
                                                      
                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ()
                                                      } else { 
                                                        ndisplay ();
                                                      }


                                                      function ndisplay () {
                                                var aircraft =  document.getElementById("nnumber").value;
                                                var oat =  document.getElementById("oat").value;
                                                var itt = document.getElementById("itt").value;
                                                var alt = document.getElementById("alt").value;
                                                var eng1 = document.getElementById("engine_1").value;
                                                var date1 = document.getElementById("date").value;
                                                document.cookie = "Engine Serial = "+ eng1;
                                                document.cookie = "Itt result = "+ ittvv;
                                                document.cookie = "Itt original = "+ itt;
                                                document.cookie = "Itt limit = "+ ittlimt5;
                                                document.cookie = "N1 result = "+ n1tt1;
                                                document.cookie = "N1 original = "+ n11;
                                                document.cookie = "N1 limit = "+ n1tt99;
                                                document.cookie = "OAT = "+ oat;
                                                document.cookie = "Altitude = "+ alt;
                                                document.cookie = "Aircraft = "+ aircraft;
                                                document
                                                document.getElementById("acft").innerHTML =  "Aircraft # "+ aircraft;
                                                document.getElementById("eng_33").innerHTML =  "Engine S/N "+ eng1;
                                                document.getElementById("date").innerHTML =  "Aircraft # "+ aircraft;
                                                document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                      }  
                                                function cdisplay () {
                                                $('#inv_1').hide();$('#li_2').hide(); $('#n09').hide();$('#orgn1').hide();$('#n10').hide();$('#orgitt').hide();$('#answer').hide();$('#inv_1').hide();$('#acft').hide();$('#eng_33').hide();  $('#date').hide();$('#excel').hide();document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                      }
                                                    }
                                                function temp_0 (){
                                                    var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 - "2.0")
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".135")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .280)
                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(2)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(2)
                                                      var ittlimt5 = ittlimt.toFixed(0)
                                                      
                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ()
                                                      } else { 
                                                        ndisplay ();
                                                      }


                                                function ndisplay () {
                                                var aircraft =  document.getElementById("nnumber").value;
                                                var oat =  document.getElementById("oat").value;
                                                var itt = document.getElementById("itt").value;
                                                var alt = document.getElementById("alt").value;
                                                var eng1 = document.getElementById("engine_1").value;
                                                document.cookie = "Engine Serial = "+ eng1;
                                                document.cookie = "Itt result = "+ ittvv;
                                                document.cookie = "Itt original = "+ itt;
                                                document.cookie = "Itt limit = "+ ittlimt5;
                                                document.cookie = "N1 result = "+ n1tt1;
                                                document.cookie = "N1 original = "+ n11;
                                                document.cookie = "N1 limit = "+ n1tt99;
                                                document.cookie = "OAT = "+ oat;
                                                document.cookie = "Altitude = "+ alt;
                                                document.cookie = "Aircraft = "+ aircraft;                            document.getElementById("acft").innerHTML =  "Aircraft # "+ aircraft;
                                                document.getElementById("eng_33").innerHTML =  "engine_serial"+ eng1;
                                                document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                      }  
                                                function cdisplay () {
                                                $('#inv_1').hide();$('#li_2').hide(); $('#n09').hide();$('#orgn1').hide();$('#n10').hide();$('#orgitt').hide();$('#answer').hide();$('#inv_1').hide();$('#acft').hide();$('#eng_33').hide();  $('#date').hide();$('#excel').hide();document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                      } }


                                              function temp_16pos (){
                                                      var ruh = document.getElementById("oat").value;
                                                    var ruh = document.getElementById("oat").value;
                                                    var ww = document.getElementById("tq").value;
                                                    var zz = (ww - "50")
                                                    var rY = (zz * "2.86")
                                                    var step1 = (rY + 578)
                                                    var ruh = document.getElementById("oat").value;
                                                    var step3 = (ruh * "3" )
                                                        ww = parseFloat(ww);
                                                        zz = parseFloat(zz);
                                                        step1 = parseFloat(step1);
                                                        step3 = parseFloat(step3);
                                                        rY = parseFloat(rY);
                                                        alt= parseFloat(alt);
                                                        ruh = parseFloat(ruh);
                                                      //Account for Altitude with Trio
                                                      var tot = document.getElementById("itt").value;
                                                      var alt1 = document.getElementById("alt").value;
                                                      var alt2 = alt1 / "1000"
                                                      var alt3 = alt2 * "1.80"
                                                      var alt4 = alt3 * "5.7"
                                                      var ittlimt = (alt4 + step3 + step1 - "3.0")
                                                    //round ITT  /////////////
                                                    var ittlimt1 = Math.round(ittlimt);
                                                    var ittanswer = ittlimt1 - tot
                                                                        
                                                      
                                                      ittlimt1 = parseFloat(ittlimt1);
                                                      alt1 = parseFloat(alt1);
                                                      alt2 = parseFloat(alt2);
                                                      alt3 = parseFloat(alt3);
                                                      alt4= parseFloat(alt4);
                                                      ittlimt = parseFloat(ittlimt);
                                                      ittanswer = parseFloat(ittanswer);


                                                      //N1 Calc (trq only****)
                                                      var sr = document.getElementById("tq").value;
                                                      var sr1 = (sr - "50")
                                                      var sr2 = (sr1 * "0.232")
                                                      var sr3 = (sr2 + 87.68)
                                                      
                                                      //N1 Calc (Alt Only****)
                                                      var lr = document.getElementById("alt").value;
                                                      var lr1 = (lr / "1000")
                                                      var lr2 = (lr1 * "1.0547")
                                                      var lr3 = (lr2 * ".58")
                                                      

                                                      //N1 Calc (Temp Only****)
                                                      var tr = document.getElementById("oat").value;
                                                      var tr1 = (tr * ".125")


                                                    //Final N1 Calc
                                                      var n11 = document.getElementById("n1").value;
                                                      var n1tt = (sr3 + lr3 + tr1 + .480)

                                                      var n12 = (n1tt - n11)
                                                            sr = parseFloat(sr);
                                                            sr1 = parseFloat(sr1);
                                                            sr2 = parseFloat(sr2);
                                                            sr3= parseFloat(sr3);
                                                            tr = parseFloat(tr);
                                                            tr1 = parseFloat(tr1);
                                                            n1tt = parseFloat(n1tt);
                                                            n11 - parseFloat(n11);
                                                            n12 - parseFloat(n12);

                                                      var n1tt1 = n12.toFixed(1)
                                                      var ittvv = ittanswer.toFixed(0)
                                                      var n1tt99 = n1tt.toFixed(1)
                                                      var ittlimt5 = ittlimt.toFixed(0)

                                                        if (n1tt1 <= 0.55 || ittvv <= 5) { 
                                                          cdisplay ();
                                                          
                                                      } else { 
                                                        ndisplay();
                                                      }
                        
                        
                        

                                                function ndisplay () {
                                                var aircraft =  document.getElementById("nnumber").value;
                                                var date =  document.getElementById("date1").value;
                                                var oat =  document.getElementById("oat").value;
                                                var itt = document.getElementById("itt").value;
                                                var alt = document.getElementById("alt").value;
                                                var eng1 = document.getElementById("engine_1").value;
                                                document.getElementById("acft").innerHTML =  "Aircraft # "+ aircraft;
                                                document.getElementById("eng_33").innerHTML =  "Engine S/N "+ eng1;
                                                document.getElementById("nr1").innerHTML = "N1 =   " + n1tt1 + "%";
                                                document.getElementById("answer").innerHTML = "ITT =   " + ittvv + "°C";
                                                document.getElementById("n10").innerHTML = "ITT upper limit =   " + ittlimt5 + "°C";
                                                document.getElementById("n09").innerHTML = "N1 upper limit =   " + n1tt99 + "%";
                                                document.getElementById("tq_11").innerHTML = "Torque =   " + ww + "%";
                                                
document.getElementById("date_77").innerHTML = date;                
document.getElementById("acft_77").innerHTML =  aircraft;
document.getElementById("eng_77").innerHTML =  eng1;
document.getElementById("n1_rslt_77").innerHTML = n1tt1;
document.getElementById("itt_rslt_77").innerHTML = ittvv;
document.getElementById("itt_limit_77").innerHTML = ittlimt5;
document.getElementById("n1_lmt_77").innerHTML = n1tt99;
document.getElementById("itt_obs_77").innerHTML = tot;
document.getElementById("n1_obs_77").innerHTML = n11;
document.getElementById("tq_77").innerHTML = tq;
                                                
                                                
                                                
                                                }



                                                function cdisplay () {
                                                $('#inv_1').hide();$('#li_2').hide(); $('#n09').hide();$('#orgn1').hide();$('#n10').hide();$('#orgitt').hide();$('#answer').hide();$('#inv_1').hide();$('#acft').hide();$('#eng_33').hide();  $('#date').hide();$('#excel').hide();document.getElementById("nr1").innerHTML = " ***Warning*** Verify on Power assurance chart";
                                                      }
                                                      
                                                      
                                                      }
                                                      
                                                      
                                                      
                                                      
                                                      }
                                                     

                                                      


                                                        

                                                    
               
       

      
                          


                                                      
                                                      
                         
    
    
    
                                        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function y1442 () {
        hide_855();
        document.getElementById("nr1").innerHTML = "N1 = XXX %    ****Warning****   Verify calculations using RFM Chart.";
      
   }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //function tq_50 () {}
      //function alt_0_600_50 (){}
      //function alt_600_1200_50 (){}
      //function alt_1200_1800_50(){}
      //function alt_1800_2400_50(){}
      //function alt_2400_3200_50(){}
      //function alt_3200_4000_50(){}
//<b> Aircraft  </b><select name="hero" id= "nnumber"style = "font-size:20px">
 // <option value="null">--Select--</option>
      //  <option value="N351LL" id ="N351LL">N351LL</option>
       //  <option value="N352LL"id ="N352LL">N352LL</option>
        //  <option value="N353LL"id ="N353LL">N353LL</option>
         //  <option value="N354LL"id ="N354LL">N354LL</option>
          //  <option value="N355LL"id ="N355LL">N355LL</option>
          //   <option value="N356LL"id ="N356LL">N356LL</option>
           //   <option value="N357LL"id ="N357LL">N357LL</option>
            //   <option value="N358L"id ="N358LL">N358LL</option>
             //   <option value="N359LL"id ="N359LL">N359LL</option>
             //   <option value="N360LL"id ="N360LL">N360LL</option>
 // </select>   <br><hr>



      /////








        

 
 




  