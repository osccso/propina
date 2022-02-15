var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var button=document.getElementById("button");
var cuenta=document.getElementById("totalCuenta");
var propina=document.getElementById("propina");
var pago=document.getElementById("totalPagar");
button.addEventListener("click",tipCalc);
text1.addEventListener("input",formatPrice);
text2.addEventListener("input",formatPercentage);
text2.addEventListener("keypress",cursorPercentage);


text1.value="$ ";
text2.value="%";
cuenta.innerHTML="$";
propina.innerHTML="$";
pago.innerHTML="$";

function cursorPercentage()
{
    text2.setSelectionRange(text2.value.length-1,text2.value.length-1);
}
function formatPrice()
{
    var numwt=text1.value.slice(2,text1.value.length);
    var numwot=numwt.replaceAll(",","");
    var len="";
    if (isNaN(numwot) || numwt==",")
    {
        text1.value="$ ";
        setTimeout(function(){ alert("Ingrese Numeros"); }, 100);
    }   
    else
    {
        if (numwot=="")
        {
            text1.value="$ ";
        }
        else
        {
            vnum=parseInt(numwot);
            str=vnum.toLocaleString();
            text1.value="$ "+str;
        }        
    }
}

function formatPercentage()
{
    var pnum=text2.value.slice(0,-1);
    if (isNaN(pnum))
    {
        text2.value="%";
        setTimeout(function(){ alert("Ingrese Numeros"); }, 100);    
    }
    else
    {
        text2.value=pnum+"%";
    }
}
function tipCalc()
{
    valorCuenta=parseInt(text1.value.slice(1,text1.value.length).replaceAll(",",""));
    pPropina=parseInt(text2.value.slice(0,-1));
    valorPropina=parseInt((pPropina/100)*valorCuenta);
    valorPagar=valorPropina+valorCuenta;
    cuenta.innerHTML="$ "+valorCuenta.toLocaleString();
    propina.innerHTML="$ "+valorPropina.toLocaleString() ;
    pago.innerHTML="$ "+valorPagar.toLocaleString();
}