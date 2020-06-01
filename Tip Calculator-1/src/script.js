function billAmount(){
    var a = document.getElementById('type1').value;

    if(a == ""){
        return "invalid";
    }
    parseFloat(a);

    if((a < 0 || a > 100000000) || a == ""){
        document.getElementById("type1").style.border = "solid 3px red";
        document.getElementById("checker").style.visibility="visible";
       
    }

    if(a >  0){
        document.getElementById("type1").style.border = "solid 1px black";
        document.getElementById("checker").style.visibility="hidden";
        
    }
    return parseFloat(a);
}



function tipPercentage(){
    var b = (document.getElementById('type2').value)/100;
    if(b == ""){
        return "invalid";
    }
    parseFloat(b);
    
    var c = b * 100;
    if(c >  0){
        document.getElementById("type2").style.border = "solid 1px black";
    }

    if((c < 0 || c > 100000000) || c == ""){
        document.getElementById("checker-1").style.visibility="visible";
    }
    if((c < 0 || c > 100000000) || c == null){
        document.getElementsById("type2").style.border = "solid 3px red";

    }
    if(c < 5){
        document.getElementById("squares").style.backgroundColor = "red";
        document.getElementById("squares").innerHTML = "BAD";
    }
    else if(c > 5 && c < 12){
        document.getElementById("squares").style.backgroundColor = "yellow";
        document.getElementById("squares").innerHTML = "OK";
    }
    else if(c > 12 && c < 20){
        document.getElementById("squares").style.backgroundColor = "greenyellow";
        document.getElementById("squares").innerHTML = "GOOD";
    }
    else if(c > 20){
        document.getElementById("squares").style.backgroundColor = "darkgreen";
        document.getElementById("squares").innerHTML = "GREAT";
    }
    return parseFloat(b);
}



function tipAmount(){
    var c = billAmount() * tipPercentage();
    if(c == ""){
        return "";
    }
    if(billAmount() == "invalid" || tipPercentage() == "invalid"){
        document.getElementById("type3").style.border = "solid 3px red";
        return "";
    }
    if(c < 0 || c == ""){
    document.getElementById("type3").style.border = "solid 3px red";
    document.getElementById("squares").style.backgroundColor = "red";
    document.getElementById("squares").innerHTML = "BAD";
    }
    if(c >  0){
        document.getElementById("type3").style.border = "solid 1px black";
    }
    document.getElementById('type3').value = Number((c).toFixed(1));
   
    return parseFloat(c);
}



function totalCost(){
    var cost = tipAmount();
    var d = billAmount();
    if(cost == "invalid" || d == "invalid"){
        return "";
    }
    
    var cost1 = parseFloat(cost + d);
    if(cost1 >  0){
        document.getElementById("type4").style.border = "solid 1px black";
    }
    document.getElementById('type4').value = Number((cost1).toFixed(1));;
    return parseFloat(cost1);
}



function noPeople(){
    var a = document.getElementById('type5').value;
    var b = document.getElementById('type5').innerHTML;
    if(a == ""){
        document.getElementById('type5').value = 1;
        return 1;
        
    }
    if(a > 0){
        document.getElementById("type5").style.border = "solid 1px black";
        document.getElementById("checker-1").style.visibility="hidden";
    }

    return parseInt(a);
}



function perPerson(){
    var a =  parseFloat(totalCost()/noPeople());

    if(a == ""){
        return "";
    }

    document.getElementById("type6").value = Number((a).toFixed(1));
}



function together(){

    var s = "";
    var a = billAmount();
    if(a == "invalid"){
        s = s + "Error: Please Enter a Number resembling Bill Amount \n\n";
        document.getElementById("type1").style.border = "solid 3px red";
        document.getElementById("checker").style.visibility="visible";
    }
    else if(a < 0){
        s = s + "Error: Please Enter a Positive Bill Amount \n\n";
    }
   
    var b = tipPercentage();
    if(b == "invalid"){
        s = s + "Error: Please Enter a Number Resembling Tip Percentage \n\n";
        document.getElementById("type2").style.border = "solid 3px red";
        document.getElementById("checker-1").style.visibility="visible";
    }
    else if(b < 0){
        s = s + "Error: Please Enter a Positive Tip Percentage(%) \n\n";
    }
    var c = parseFloat(tipAmount());
    if(a == "invalid"|| b == "invalid"){
        document.getElementById('type3').value = "N/A";
    }
    if(c < 0){
        document.getElementById("squares").style.backgroundColor = "red";
        document.getElementById("squares").innerHTML = "BAD";
    }
    var d = totalCost();
    if(a == "invalid"|| b == "invalid" || d < 0){
        document.getElementById('type4').value = "N/A";
        document.getElementById("type4").style.border = "solid 3px red";
       
    }
    var e = noPeople();
    if(e < 0){
        s = s + "Error: Please Enter a Positive Number of People \n\n";
       document.getElementById("type5").style.border = "solid 3px red";
       document.getElementById("checker-1").style.visibility="visible";
   }
 
   var f =  perPerson();
   if(a == "invalid"|| b == "invalid"){
    document.getElementById('type6').value = "N/A";
}

if(s != ""){
    alert(s);
}
}

