const carta = `Danita...

Ay... no sabes cuánto me costó hacer esto jajaja.

Llevo dos días tratando de aprender programación y, aunque seguramente no quedó perfecto, lo hice con muchísimo cariño porque pensé en ti durante cada momento.

Últimamente han sido días muy pesados para los dos, pero hoy no quiero hablar de mí.

Solo quiero decirte algo que jamás ha cambiado...

Te amo.

Te amo como no tienes una idea.

Todos los días sigo imaginando el momento en que te vea caminar hacia mí con ese vestido blanco que alguna vez soñé contigo.

No quiero justificar los errores que cometí.

Sé que fallé.
Sé que muchas veces no vi el valor de todo lo que hacías por mí.
Y eso me duele más de lo que puedo explicar.

Pero entendí que una disculpa no vale mucho si no viene acompañada de un cambio.

Por eso quiero demostrarte con hechos que estoy esforzándome por ser un mejor hombre.

No solo por nosotros...

También por mí.
Y porque nunca quiero volver a lastimar a alguien que amo, y mucho menos a ti.

Me ha costado.

Hay días donde lloro.
Hay días donde me siento derrotado.

Pero sigo aquí.

Porque si Dios me da la oportunidad de cambiar, quiero aprovecharla.

No escribo esta carta para presionarte ni para pedirte que vuelvas.

La escribo porque quería darte una pequeña muestra de todo aquello que durante mucho tiempo me pediste.

Quizá hoy estés resentida.

Quizá ya no quieras recibir aquello que antes anhelabas.

Y lo entiendo.

Pero si en el fondo de tu corazón aún existe una pequeña parte que sigue creyendo en nosotros...

Quiero que sepas que aquí sigo.

Aprendiendo.

Madurando.

Y esforzándome.

Te amo, mi niña hermosa.

Mi princesa cachetitos. ❤️

Aún recuerdo el primer día que te vi.

Lo nervioso que estaba.

Lo bonita que te me hiciste.

Recuerdo nuestras risas.

Recuerdo los hot cakes quemados jajaja.

Recuerdo tantos momentos que siguen haciéndome sonreír.

Gracias por todo lo que vivimos.

Y gracias por haber cambiado mi vida.

Si algún día nuestros caminos vuelven a encontrarse...

Prometo recibirte siendo una mejor versión de mí.

Y si no sucede...

Solo le pediré a Dios que te haga inmensamente feliz.

Porque te lo mereces.

Con todo mi amor...

Iván ❤️`;
function abrirCarta(){

  document.getElementById("inicio").style.display="none";

  document.getElementById("papel").style.display="flex";

  const texto=document.getElementById("texto");

  texto.innerHTML="";

  let i=0;

  function escribir(){

    if(i<carta.length){

      texto.innerHTML+=carta.charAt(i).replace(/\n/g,"<br>");

      i++;

      setTimeout(escribir,35);

    }

  }

  escribir();

}
