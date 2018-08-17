$(document).ready(function () {
    //math
    $("#btnmath").click(function () {

        //First we need to get the user input
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        //next we need to perform the necessary calculations
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var average = sum / 5;

        //finally we need to ouput the results
        $("#sum").text("The sum is: " + sum);
        $("#product").text("The product is: " + product);
        $("#smallest").text("The smallest is: " + smallest);
        $("#largest").text("The largest is: " + largest);
        $("#average").text("The average is: " + average);
    });

    $("#mathcode").hide();
    $("#btnCodeMath").click(function () {
        $("#mathcode").toggle();
    });

    //factorial
    $("#btnFacto").click(function () {
        var factoNum = Number($("#factoNum").val());
        var answer;

        if (factoNum === 0 || factoNum === 1) {
            answer = 1;
        } else if (factoNum < 0) {
            answer = "Enter a number greater than or equal to zero."
        } else if (factoNum > 1) {
            for (i = factoNum - 1; i > 0; i--) {
                factoNum = factoNum * i;
                answer = factoNum;
            }
        }
        $("#result").text("Answer: " + answer);
    });

    $("#factocode").hide();
    $("#btnCodefacto").click(function () {
        $("#factocode").toggle();
    });


    //fizzbuzz
    $("#btnFizzbuzz").click(function () {
        var fizzNum = Number($("#fizzNum").val());
        var buzzNum = Number($("#buzzNum").val());
        var fizz;
        var buzz;

        for (var i = 1; i <= 100; i++) {
            fizz = i % fizzNum;
            buzz = i % buzzNum;
            //var numbers = [];

            if (fizz === 0 && buzz === 0) {
                $("#fizzbuzzResult").append("<span class='fizzbuzz'>FizzBuzz </span>");
                //numbers.push("FizzBuzz");
            }
            else {
                if (fizz === 0) {

                    $("#fizzbuzzResult").append("<span class='fizz'>Fizz </span>");
                    //numbers.push("Fizz");
                }
                else if (buzz === 0) {

                    $("#fizzbuzzResult").append("<span class='buzz'>Buzz </span>");
                    //numbers.push("Buzz");

                } else if (fizz !== 0 && buzz !== 0) {

                    $("#fizzbuzzResult").append("<span>" + i + ' ' + "</span>");
                    //numbers.push("i");
                }
            }
        }
        //var output = numbers.join(',');
        //$("#fizzbuzzResult").text(output);

        //$("#fizzbuzzResult").text(numbers.join(','));
    });

    $("#btnErase").click(function () {
        $("#fizzbuzzResult").html("");
    });

    $("#fizzbuzzcode").hide();
    $("#btnCodefizzbuzz").click(function () {
        $("#fizzbuzzcode").toggle();
    });

    //palinedrome
    $("#btnPalindrome").click(function () {
        var str = document.getElementById("inputPalindrome").value;
        var reverseStr;
        reverseStr = str.split('').reverse().join('');
        if (str == reverseStr) {
            $("#resultPalindrome").text(str + " is a palindrome.");
        } else if (str != reverseStr) {
            $("#resultPalindrome").text(str + " is not a palindrome.");
        }
    });

    $("#palincode").hide();
    $("#btnCodepalin").click(function () {
        $("#palincode").toggle();
    });
})
