function sumar() {
    

var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;

var sumar = parseInt(num1) + parseInt(num2);
document.getElementById('resultado').value = sumar;

}
function restar() {
    

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    var restar = parseInt(num1) - parseInt(num2);
    document.getElementById('resultado').value = restar;
    
    }
    function multiplicacion() {
    

        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        
        var multiplicacion = parseInt(num1) * parseInt(num2);
        document.getElementById('resultado').value = multiplicacion;
        
        }
        function divicion() {
    

            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;
            
            var divicion = parseInt(num1) / parseInt(num2);
            document.getElementById('resultado').value = divicion;
            
            }