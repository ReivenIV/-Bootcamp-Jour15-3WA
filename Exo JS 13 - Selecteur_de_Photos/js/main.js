
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickListItem() {


        /*
        * Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable this représente
        * l'objet DOM qui a déclenché l'évènement.
        *
        * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
        *
        *
        * On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
        */
     
        //console.log(this)//le mot clé this va cibler l'élément qui a provoqué le déclenchement de l'évenement
     this.classList.toggle("selected")
     
        // Recherche de toutes les balises <li> sélectionnées (classe selected).
     let selected = document.querySelectorAll(".selected")
        //console.log(selected)
     
        /*
        * document.querySelectorAll() renvoie un tableau avec autant d'objets DOM manipulables en
        * JavaScript que de balises trouvées.
        *
        * selectedPhotos possède donc une propriété length représentant toutes les photos
        * sélectionnées.
        *
        * Mise à jour du nombre total de photos sélectionnées.
        */
     total.innerHTML = selected.length
}

        /*************************************************************************************************/
        /* ************************************** CODE PRINCIPAL *************************************** */
        /*************************************************************************************************/
        // Recherche de toutes les balises <li> (les photos) et de la balise <em> (nombre total).
const photos = document.querySelectorAll('.photo-list li');
const total  = document.querySelector('#total em');

        // Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>. (boucle for qqui crée de events)
for(let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", (e))
}







        // Explication sur - this - avec un autre example. 
let button = document.querySelectorAll(".maDiv button")

function bidon(){   
    if(this.style.backgroundColor === "red"){
        this.style.backgroundColor = "green"
    }else{
        this.style.backgroundColor = "red"
    }    
}
for(let j = 0; j < button.length; j++){
    button[j].addEventListener("click", bidon)
}

