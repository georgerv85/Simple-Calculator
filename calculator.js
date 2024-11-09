class Calculator{
    number1 = Number(document.getElementById("Number1").value);
    number2 = Number(document.getElementById("Number2").value);

    Check = document.getElementById("Check").value == "1";

    Sum(){
        var total = this.number1 + this.number2
        var checkType = this.Check
    
        this.Type(total,checkType); //καλώ την μέθοδο type και δίνω σαν ορίσματα total και checkType. 
    }

    Subtract(){
        var total = this.number1 - this.number2
        var checkType = this.Check
    
        this.Type(total,checkType); //καλώ την μέθοδο type και δίνω σαν ορίσματα total και checkType. 
    }

    Multiply(){
        var total = this.number1 * this.number2
        var checkType = this.Check
    
        this.Type(total,checkType); //καλώ την μέθοδο type και δίνω σαν ορίσματα total και checkType. 
    }

    Devide(){
        var total = this.number1 / this.number2
        var checkType = this.Check
    
        this.Type(total,checkType); //καλώ την μέθοδο type και δίνω σαν ορίσματα total και checkType. 
    }

    Reset(){
        document.getElementById("Number1").value = " ";
        document.getElementById("Number2").value = " ";
        document.getElementById("Check").value = " ";
        document.getElementById("result").innerHTML = "Result";
        
    }


    Type(total, checkType){
        if(checkType == "1"){
            var type = total == parseInt(total) ? "Integer " : "Real ";
            alert(type + total);
            document.getElementById("result").innerHTML = "Total: " + type + " " + total;
        }else{
            alert(total);
            document.getElementById("result").innerHTML = "Total: " + total;
        }
    }

}

jQuery(document).ready(

    function(){

        $("#resultContainer").hide()

        $("#resetButton").click(
            function(){
                $("#sum").hide().show(1000, "swing");
                $("#sub").hide().show(1000, "swing");
                $("#multi").hide().show(1000, "swing");
                $("#dev").hide().show(1000, "swing");
            }
        )

        $("#sum").click(
            function(){
                $("#resultContainer").show();
                $("#result").hide().show(500, "swing");
            }
        )

        $("#sub").click(
            function(){
                $("#resultContainer").show();
                $("#result").hide().show(500, "swing");
            }
        )

        $("#multi").click(
            function(){
                $("#resultContainer").show();
                $("#result").hide().show(500, "swing");
            }
        )

        $("#dev").click(
            function(){
                $("#resultContainer").show();
                $("#result").hide().show(500, "swing");
            }
        )

        $("#resetButton").click(
            function(){
                $("#resultContainer").hide();
            }
        )

    }

)