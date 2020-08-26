function triargelat(){
    var tipus = document.getElementById("tipus").value;
    var gustos = document.getElementById("gust").value;
    if (((gustos == 'maduixa') || (gustos == 'coco') || (gustos == 'mango')) && (tipus == 'norecipient')){
        window.alert("ARA ESCULL CUCURUCHO O TARRINA") 
    }
    if(tipus == 'tarrina'){
        switch(gustos){
            case 'maduixa':
                window.alert("MADUIXA+TARRINA");
            break;
            case 'coco':
                window.alert("COCO+TARRINA");
            break;
            case 'mango':
                window.alert("MANGO+TARRINA");
            break;
        }
    }
    if(tipus == 'cucurucho'){
        switch(gustos){
            case 'maduixa':
            window.alert("MADUIXA+CUCURUCHO");
        break;
        case 'coco':
            window.alert("COCO+CUCURUCHO");
        break;
        case 'mango':
            window.alert("MANGO+CUCURUCHO");
        break;  
        }
    }
}