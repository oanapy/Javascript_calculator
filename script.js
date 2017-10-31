$(function() {
    var number = "";
    var result;
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
    });
    $("#operators > a").not("#equals").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text(operator);
    });
    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#equals").click(function(){
        if (operator === "+"){
            result = (parseInt(number, 10) + parseInt(newnumber,10));
        } else if (operator === "-"){
            result = (parseInt(newnumber, 10) - parseInt(number,10));
        } else if (operator === "/"){
            result = (parseInt(newnumber, 10) / parseInt(number,10));
        } else if (operator === "*"){
            result = (parseInt(newnumber, 10) * parseInt(number,10));
        }
        totaldiv.text(result);
    });
}); 