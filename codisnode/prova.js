var express = require('express') //connectar la llibreria Express i es guarda en la variable espress. Es una llibreria obligatoria, sempre es necessita
var app = express() //Variable principal a la que se li crea una instancia de la llibreria express. Respresenta el servidor
var mysql = require('mysql')
var cors = require('cors')
app.use(cors());
app.get("/",(req,res)=>{//s'han de definir una o varies rutes, req = request per recollir les dades, res = resultat de la crida, dades que ha recollit
    //operativa i resposta, per exemple connectar una base de dades i fer un select per recollir les dades
    res.send("MyServer") //Aqui es connectara amb una base de dades en JSON
});
//ENTRE ELS DOS APPs VA SEMPRE EL MYSQL
app.get("/customers",(req,res)=>{
    var con = mysql.createConnection({//4 parametres per connectar amb el servidor de la base de dades
        host:'217.61.130.155',
        user:'admin_test',
        password:'facilfacil',
        database:'admin_test'
    });
    con.connect(function(err){//connectar-se(poder fer crides) a la base de dades
        //Recollir si hi ha algun error
        if(err) throw err;
        con.query("SELECT * FROM customers",function(err,result,fields){//fer consultes SELECT, WHERE, ORDER....
            if(err) throw err;
            //res.send(JSON.stringify(result))
            res.json(result);
            con.end();//Tancar la connexió, és molt important tancar-la sempre
        });
    });
});
app.get("/employees",(req,res)=>{
    var con = mysql.createConnection({
        host:'217.61.130.155',
        user:'admin_test',
        password:'facilfacil',
        database:'admin_test'
    });
    con.connect(function(err){
        if (err) throw err;
        con.query("SELECT * FROM employees", function(err,result,fields){
            if (err) throw err;
            res.json(result);
            con.end();
        });
    });
});
app.listen(3000,() =>{//port, no volem opcions de servidor
    //no és obligatori posar-hi res
    console.log("Carrot cake")
}); 