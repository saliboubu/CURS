function triargelat(){
    var gelats = [
        /*GELAT D'UNA BOLA*/
        [['../gelateria/tarrinamx1.png','../gelateria/conomx1.png','../gelateria/maduixa.png'],
         ['../gelateria/tarrinaco1.png','../gelateria/conoco1.png','../gelateria/coco.png'],
         ['../gelateria/tarrinamg1.png','../gelateria/conomg1.png','../gelateria/mango.png']
        ],
        /*GELAT DE DUES BOLES*/
        [['../gelateria/tarrinamx2.png','../gelateria/conomx2.png','../gelateria/maduixa.png'],
         ['../gelateria/tarrinaco2.png','../gelateria/conoco2.png','../gelateria/coco.png'],
         ['../gelateria/tarrinamg2.png','../gelateria/conomg2.png','../gelateria/mango.png']
        ],
        /*GELAT DE TRES BOLES*/
        [['../gelateria/tarrinamx3.png','../gelateria/conomx3.png','../gelateria/maduixa.png'],
         ['../gelateria/tarrinaco3.png','../gelateria/conoco3.png','../gelateria/coco.png'],
         ['../gelateria/tarrinamg3.png','../gelateria/conomg3.png','../gelateria/mango.png']
        ]];
    var gust = document.getElementById("gust").value;
    var tipus = document.getElementById("tipus").value;
    var boles = document.getElementById("boles").value;
    var topping = document.getElementById("toppings").value;
    if ((gust !== 'nogust') && (tipus !== 'notipus') && (boles !== 'noboles')){
        imggelat.innerHTML = "<img src='"+gelats[boles][gust][tipus]+"'>"
    }
    else if((gust !=='nogust') && (tipus == 'notipus')){
        alert("Voldras el gelat en tarrina, cucurutxo o en pack especial?")
    }
    else if((gust == 'nogust') && (tipus !== 'notipus')){
        alert("No oblidis escollir de quin gust vols el gelat!;)")
    }
    else{
        alert("Benvingut, pots començant escollint el gust del gelat")
    }
}
