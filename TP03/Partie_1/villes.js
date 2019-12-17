function trouverPays() {
   var villeUser = $("#ville").val();

   var france = ["Paris", "Marseille", "Lyon", "Grenoble"];
   var espagne = ["Grenade", "Madrid", "Barcelonne", "Seville"];
   var usa = ["New York", "San Francisco", "Washington DC", "Chicago"];
   var italie = ["Florence", "Rome", "Naples", "Milan"];

   var msg = "Bienvenue en "

   if (france.includes(villeUser)) {
      alert(msg+"France !");
   }else if (espagne.includes(villeUser)) {
      alert(msg+"Espagne !");
   }else if (usa.includes(villeUser)) {
      alert(msg+"USA !");
   }else if (italie.includes(villeUser)) {
      alert(msg+"Italie !");
   }else{
      alert(msg+"enfer, elle existe pas ta ville !");
   }

}
