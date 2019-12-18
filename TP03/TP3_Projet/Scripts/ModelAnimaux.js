class Animal {

   constructor(espece, description, habitat, cheminImage) {
      this.espece = espece;
      this.description = description;
      this.habitat = habitat;
      this.cheminImage = cheminImage;
   }

}

function getListeAnimaux(){
   let listeAnimaux = [];
   listeAnimaux.push(new
      Animal("Pangolin", "Il est toujours désolé", "Afrique et Asie du sud-est", "Images/pangolin.jpg"));
   listeAnimaux.push(new
      Animal("Kiwi", "Ceci n\'est pas un fruit", "Nouvelle-Zélande", "Images/kiwi.jpeg"));
   listeAnimaux.push(new
      Animal("Ornithorynque", "Monsieur patate de l'évolution", "Australie", "Images/ornithorynque.jpg"));
   listeAnimaux.push(new
      Animal("Quokka", "Il est content :)", "Australie", "Images/quokka.jpg"));

   return listeAnimaux;
}
