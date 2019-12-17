function lancerJeu() {

   var win = false;
   var nombre = Math.round(Math.random()*10);
   var nbessais = 0;
   alert("Valeur générée"+nombre);

   while(!win && nbessais<3){
      let reponse = prompt("Entrer une valeur");

      if(reponse == nombre){
         win = true;
         alert("Bravo duku !");
      }else if (reponse<nombre) {
         alert("Trop petit");
      }else{
         alert("Trop grand");
      }
      nbessais++;
   }
   if (nbessais == 3) {
      alert("Trop tard infidel !");
   }
}
