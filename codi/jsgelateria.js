function triargelat(){
    var gustos = document.getElementById("gust").value;
    var tipus = document.getElementById("tipus").value;
    var boles = document.getElementById("mida").value;
    var toppings = document.getElementById("toppings").value;


    if ((gustos == 'nogust') && (tipus !== 'norecipient') && (boles !== 'nomida') && (toppings !== 'notopping')){
        window.alert("NO OBLIDIS ESCOLLIR EL GUST")
    }
    if ((gustos !== 'nogust') && (tipus == 'norecipient')){
        window.alert("VOLS EL GELAT EN TARRINA O CUCURUCHO?")
    }
    if ((gustos !== 'nogust') && (tipus !== 'norecipient') && (boles == 'nomida')){
        window.alert("QUINA MIDA DE GELAT DESITGES?")
    }
    if ((gustos !== 'nogust') && (tipus !== 'norecipient') && (boles !== 'nomida') && (toppings == 'notopping')){
        window.alert("VOLDRAS TOPPINGS?")
    }
    if (tipus == 'tarrina'){
        switch(gustos){
            case 'maduixa':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamx1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamx2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamx3.png'/>";
                            }
                        break;
                    }
                }
            break;
            case 'coco':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinaco1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinaco2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinaco3.png'/>";
                            }
                        break;
                    }
                }
            break;
            case 'mango':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamg1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamg2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/tarrinamg3.png'/>";
                            }
                        break;
                    }
                }
            break;
        }
    }
    if (tipus == 'cucurucho'){
        switch(gustos){
            case 'maduixa':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomx1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomx2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MADUIXA TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomx3.png'/>";
                            }
                        break;
                    }
                }
            break;
            case 'coco':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conoco1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conoco2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("COCO TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("COCO TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("COCO TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conoco3.png'/>";
                            }
                        break;
                    }
                }
            break;
            case 'mango':
                if(boles !== 'nomida'){
                    switch(boles){
                        case'petit':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 1BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 1BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 1BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomg1.png'/>";
                            }
                        break;
                        case 'mitja':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 2BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 2BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 2BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomg2.png'/>";
                            }
                        break;
                        case 'gran':
                            if (toppings !== 'notopping'){
                                switch(toppings){
                                    case 'xocolataliquida':
                                        window.alert("MANGO TARRINA 3BOLA TOP:XOCO");
                                    break;
                                    case 'avellanes':
                                        window.alert("MANGO TARRINA 3BOLA TOP:AVELLANA");
                                    break;
                                    case 'nous':
                                        window.alert("MANGO TARRINA 3BOLA TOP:NOUS");
                                    break;
                                }
                            }
                            else{
                                imggelat.innerHTML = "<img src='../gelateria/conomg3.png'/>";
                            }
                        break;
                    }
                }
            break;
        }
    }
}