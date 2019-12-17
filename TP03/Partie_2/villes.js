
var france = ["Paris", "Marseille", "Lyon", "Grenoble"];
var espagne = ["Grenade", "Madrid", "Barcelonne", "Seville"];
var usa = ["New York", "San Francisco", "Washington DC", "Chicago"];
var italie = ["Florence", "Rome", "Naples", "Milan"];

$(function() {
   $('#buttonAdd').on('click',ajouterSuggestion);
});

function ajouterSuggestion(){
   let suggestion = $("#ville").val();

   if(confirm("Ajouter la ville à la liste de suggestion ?") && !getPays(suggestion)){
      let li = document.createElement('li');
      li.innerHTML = suggestion;
      $("li").last().append(li);
   }
}

function trouverPays() {
   let villeUser = $("#ville").val();
   let pays = getPays(villeUser);

   if (pays) {
      afficherMessage(villeUser);
      genererListe($('#suggestions'), pays, villeUser);
   }else{
      $('#messageBienvenue').html("Bienvenue en enfer, elle existe pas ta ville !");
      $('#suggestions').html("");
      $('#buttonAdd').hide(0);
   }
}

function getPays(ville){
   if (france.includes(ville)) {
      return france;
   }else if (espagne.includes(ville)) {
      return espagne;
   }else if (usa.includes(ville)) {
      return usa;
   }else if (italie.includes(ville)) {
      return italie;
   }else{
      return null;
   }
}

function genererListe(element, listeVille, villeUser){

   element.html("");
   $('#buttonAdd').show(0);

   $.each(listeVille, function (index, v) {
      if(v != villeUser){
         let li = document.createElement('li');
         li.innerHTML = v; //Ne fonctionne pas avec .html() de jquery
         element.append(li);
      }
   });
}

function afficherMessage(Ville){
   let msg = "Bienvenue en ";
   let msgfin = "</br> Visitez aussi : ";

   $('#messageBienvenue').html(msg+Ville+" !"+msgfin);
}
