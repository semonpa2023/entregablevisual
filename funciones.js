
function menu() {
    let vecesEjecutadas = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    let opcion

    while (true) {
        let menuText = "Menu de opciones:\n"
        menuText += "1. Salario Empleados\n"
        menuText += "2. Numeros Pares\n"
        menuText += "3. Calculadora\n"
        menuText += "4. Informacion Personal\n"
        menuText += "5. Tablas de multiplicar\n"
        menuText += "6. Area Y Perimetro\n"
        menuText += "7. Finalizar"

        opcion = prompt(menuText)

        if (opcion === "7") {
            console.log("\nFinalizando programa...Hasta luego")
            console.log(`vecesEjecutadas: ${JSON.stringify(vecesEjecutadas)}`)
            break
        }

        vecesEjecutadas[opcion] += 1

        if (opcion === "1") {
            calcularSalario()
        } else if (opcion === "2") {
            mostrarNumerosPares()
        } else if (opcion === "3") {
            calculadora()
        } else if (opcion === "4") {
            var datos = pedirDatosPersona()
            mostrarDatosPersona(datos[0], datos[1], datos[2], datos[3])
        } else if (opcion === "5") {
            tablaMultiplicar()
        } else if (opcion === "6") {
            calcularAreaPerimetro()
        } else {
            console.log("Opcion invalida")
        }
    }
}


function calcularSalario() {
    var valorHora = Number(prompt("Ingrese el valor de la hora:"))
    var horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas:"))
    var salarioTotal = valorHora * horasTrabajadas
    console.log("El salario del empleado es: " + salarioTotal)
}


function mostrarNumerosPares() {
    var n = Number(prompt("Ingrese el valor de n:"))
    var m = Number(prompt("Ingrese el valor de m:"))
    console.log("Los numeros pares entre " + n + " y " + m + " son:")
    for (var i = n; i <= m; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}


function calculadora() {
    var opcion = Number(prompt("Seleccione una opcion:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division"))
    var num1 = Number(prompt("Ingrese el primer numero:"))
    var num2 = Number(prompt("Ingrese el segundo numero:"))
    var resultado
    switch (opcion) {
        case 1:
            resultado = num1 + num2
            console.log("Resultado de la suma: " + resultado)
            break
        case 2:
            resultado = num1 - num2
            console.log("Resultado de la resta: " + resultado)
            break
        case 3:
            resultado = num1 * num2
            console.log("Resultado de la multiplicacion: " + resultado)
            break
        case 4:
            if (num2 !== 0) {
                resultado = num1 / num2
                console.log("Resultado de la division: " + resultado)
            } else {
                console.log("No se puede dividir por cero.")
            }
            break
        default:
            console.log("Opcion no valida")
    }
}


function pedirDatosPersona() {
    var nombre = prompt("Ingrese su nombre:")
    var apellido = prompt("Ingrese su apellido:")
    var edad = Number(prompt("Ingrese su edad:"))
    var cargo = prompt("Ingrese su cargo:")
    return [nombre, apellido, edad, cargo]
}


function mostrarDatosPersona(nombre, apellido, edad, cargo) {
    console.log("Nombre: " + nombre + "\nApellido: " + apellido + "\nEdad: " + edad + "\nCargo: " + cargo)
}


function tablaMultiplicar() {
    var numero = Number(prompt("Ingrese el número para mostrar su tabla de multiplicar:"))
    console.log("Tabla de multiplicar del " + numero + ":")
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}


function calcularAreaPerimetro() {
    var opcion = Number(prompt("Seleccione una figura:\n1. Cuadrado\n2. Triángulo\n3. Rectángulo"))
    var base, altura, lado1, lado2, lado3, area, perimetro
    switch (opcion) {
        case 1:
            base = Number(prompt("Ingrese la base del cuadrado:"))
            area = base * base
            perimetro = 4 * base
            mostrarResultados("Cuadrado", area, perimetro)
            break
        case 2:
            base = Number(prompt("Ingrese la base del triángulo:"))
            altura = Number(prompt("Ingrese la altura del triángulo:"))
            lado1 = Number(prompt("Ingrese el lado 1 del triángulo:"))
            lado2 = Number(prompt("Ingrese el lado 2 del triángulo:"))
            lado3 = Number(prompt("Ingrese el lado 3 del triángulo:"))
            area = (base * altura) / 2
            perimetro = lado1 + lado2 + lado3
            mostrarResultados("Triángulo", area, perimetro)
            break
        case 3:
            base = Number(prompt("Ingrese la base del rectángulo:"))
            altura = Number(prompt("Ingrese la altura del rectángulo:"))
            area = base * altura
            perimetro = 2 * (base + altura)
            mostrarResultados("Rectángulo", area, perimetro)
            break
        default:
            console.log("Opción no válida")
    }
}


function mostrarResultados(figura, area, perimetro) {
    console.log("Resultados para " + figura + ":\nÁrea: " + area + "\nPerímetro: " + perimetro)
}


menu()
