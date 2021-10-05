var bancoCliente = "nacion";
var bancoDestino = "credicoop";
var cuentaCliente = "yeyo";
var cuentaDestino = "juan";
var saldoCliente = 3000000;
var hora = 16;
var saldo = 1000;

if((saldoCliente > saldo)&&(9<hora && hora<12 || 15<hora && hora<20)&&(bancoCliente == "nacion" && cuentaCliente =="yeyo")&&(bancoDestino =="credicoop"&& cuentaDestino =="juan")&&(bancoCliente == bancoDestino)){
  saldoCliente= saldoCliente - saldo;
  console.log("se cobro 0 USD de costo de transaccion")
  console.log("saldo restante: " + saldoCliente);
} else {
  saldoCliente = saldoCliente - saldo - 100;
  console.log("se cobro 100 USD de costo de transaccion")
  console.log("saldo restante: " + saldoCliente);
}
