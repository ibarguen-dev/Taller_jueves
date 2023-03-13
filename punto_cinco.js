let ventas, salarioBruto,deducciones,salarioNeto, comisión

function CalcularSalario(venta,salarioMensual) {
    comisión = venta * 1500000
    salarioBruto = salarioMensual + comisión
    deducciones = salarioBruto * 0.05
    salarioNeto = salarioBruto - deducciones
    return `si el salario Mensual tiene un valor de:${salarioMensual} las comisión es de un valor de:${comisión} y  las deducciones es de:${deducciones} y el salario Mensual tiene un valor de:${salarioNeto}`
}

console.log(CalcularSalario(12,3500000))