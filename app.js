$(document).ready(function(){

    // $("table").innerWidth($(window).innerWidth);
    // $("table").innerHeight($(window).innerHeight);

    var a = 0, b = 0, operator;

    $(document).on('click','.key',function(){
        let current = $("#outputField").val();
        let input = $(this).attr("value");
        a = (current * 10) + +input;
console.log(a + " " + operator + " " + b);
        $("#outputField").val(a);
    });


    $(document).on('click','.operator',function(){
        $("#outputField").val(0);
        b = a;
        a = 0;
        operator = $(this).attr("value");
console.log(a + " " + operator + " " + b);
    });


    $(document).on('click','#equals',function(){
        calculate(a,b,operator);
    });

    
    $(document).on('click','#cancel',clear)


    function calculate(a, b, operator){
        let result = 0;
        if (a == 0){
            result = 0;
        }
        else{
            switch(operator){
                case "D":
                result = b/a;
                break;
                case "M":
                result = b*a;
                break;
                case "A":
                result = b+a;
                break;
                case "S":
                result = b-a;
                break;
            }
        }
        a=result;
        $("#outputField").attr("placeholder", result)
        $("#outputField").val(null)
        console.log(a + " " + operator + " " + b);
    }


    function clear(){
        a=0;
        b=0;
        $("#outputField").val(a);
    }
});