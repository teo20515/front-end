function toTableRow(animal){
   let tr = document.createElement('tr');

   let bouton = document.createElement('button');
   $(bouton).attr('type',"button").attr('name',"button").html("supprimer");
   bouton.onclick = function(){
      $(this).parent().parent().remove();
   }

   let nom = document.createElement('p');
   $(nom).html(animal.espece);

   let image = document.createElement('img')
   $(image).attr('src',animal.cheminImage).attr('alt',animal.espece);

   let tdNom = document.createElement('td');
   $(tdNom).append(nom).append(image);

   let tdDescription = document.createElement('td');
   $(tdDescription).html(animal.description);

   let tdHabitat = document.createElement('td');
   $(tdHabitat).html(animal.habitat);

   let tdBouton = document.createElement('td');
   $(tdBouton).append(bouton);


   $(tr).append(tdNom).append(tdDescription).append(tdHabitat).append(tdBouton);

   return tr;
}

function afficherAnimal(table, animal){
   table.append(toTableRow(animal));
}

function afficherAnimaux(table){
   let listeAnimaux = getListeAnimaux();
   console.log(listeAnimaux);
   for (var i = 0; i < listeAnimaux.length; i++) {
      afficherAnimal(table, listeAnimaux[i]);
   }
}

function addRow(){
   let nom = $('#espece').val();
   let description = $('#description').val();
   let habitat = $('#habitat').val();
   let lienImage = $('#lienImage').val();

   afficherAnimal($('#tableAnimaux'), new Animal(nom, description, habitat, lienImage));
}
