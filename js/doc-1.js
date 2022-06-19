let entrada = prompt("Por favor, ingrese su signo: \n tauro \n geminis \n aries \n leo \n virgo ");

while(entrada != "adios" ){
   switch (entrada) {
       case "tauro":
            alert("Durante esta jornada, sentirá una gran contradicción entre sus propios deseos y lo que tiene, no se ahogue en ellos. Crea en usted mismo y todo saldrá como esperaba.");
            break;
        case "geminis":
            alert("No desvíe por ninguna razón su visión, de lo contrario, no podrá cumplir con los objetivos que quiere alcanzar en su vida. Si se lo propone, conseguirá todo.");
            break;
        case "aries":
            alert("No desvíe por ninguna razón su visión, de lo contrario, no podrá cumplir con los objetivos que quiere alcanzar en su vida. Si se lo propone, conseguirá todo.");
            break;
        case "leo":
            alert("Deje de exponer tanto su vida privada a los demás, ya que las decisiones las deberá tomarla usted mismo. Hoy su inseguridad le afectará en todos los planos.");
            break;
        case "virgo":
            alert("Deje de exponer tanto su vida privada a los demás, ya que las decisiones las deberá tomarla usted mismo. Hoy su inseguridad le afectará en todos los planos.");
            break;
        default:
        alert("ingrese su signo, o escriba 'adios' ")
        break;
   }
   entrada = prompt("ingrese su signo, o escriba 'adios' ");
}
