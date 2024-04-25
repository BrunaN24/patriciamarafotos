/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        #calculator {
            width: 300px;
            margin: 50px auto;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
        }

        input[type="text"] {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 16px;
        }

        input[type="button"] {
            width: 50px;
            height: 50px;
            margin: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div id="calculator">
        <input type="text" id="display" readonly>
        <br>
        <input type="button" value="AC" onclick="clearAll()">
        <input type="button" value="C" onclick="clearLast()">
        <input type="button" value="+/-" onclick="changeSign()">
        <input type="button" value="%" onclick="percentage()">
        <br>
        <input type="button" value="7" onclick="appendToDisplay('7')">
        <input type="button" value="8" onclick="appendToDisplay('8')">
        <input type="button" value="9" onclick="appendToDisplay('9')">
        <input type="button" value="/" onclick="appendToDisplay('/')">
        <br>
        <input type="button" value="4" onclick="appendToDisplay('4')">
        <input type="button" value="5" onclick="appendToDisplay('5')">
        <input type="button" value="6" onclick="appendToDisplay('6')">
        <input type="button" value="*" onclick="appendToDisplay('*')">
        <br>
        <input type="button" value="1" onclick="appendToDisplay('1')">
        <input type="button" value="2" onclick="appendToDisplay('2')">
        <input type="button" value="3" onclick="appendToDisplay('3')">
        <input type="button" value="-" onclick="appendToDisplay('-')">
        <br>
        <input type="button" value="0" onclick="appendToDisplay('0')">
        <input type="button" value="." onclick="appendToDisplay('.')">
        <input type="button" value="=" onclick="calculate()">
        <input type="button" value="+" onclick="appendToDisplay('+')">
        <br>
        <input type="button" value="X^Y" onclick="power()">
        <input type="button" value="√" onclick="squareRoot()">
    </div>

    <script>
        let display = document.getElementById('display');

        function clearAll() {
            display.value = '';
        }

        function clearLast() {
            display.value = display.value.slice(0, -1);
        }

        function changeSign() {
            display.value = -parseFloat(display.value);
        }

        function percentage() {
            display.value = parseFloat(display.value) / 100;
        }

        function appendToDisplay(value) {
            display.value += value;
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        function power() {
            display.value = Math.pow(parseFloat(display.value), parseFloat(prompt('Enter the exponent (Y):')));
        }

        function squareRoot() {
            display.value = Math.sqrt(parseFloat(display.value));
        }
    </script>
</body>
</html>