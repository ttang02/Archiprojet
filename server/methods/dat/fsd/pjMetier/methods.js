//Pieces jointes Metier

Meteor.methods({
    'addPjMetierEmpty' : function(){
        console.log("The method 'addPjMetierEmpty' has been called !");
        return PjMetier.insert({name: "", nombre: 0, min : false, rie : false, ext : false, pub : false, createAt: new Date()});
    },
    'updatePJ' : function(idPjMetier, name, nombre , min, rie, ext, pub){
        console.log("The method 'updatePJ' has been called !");
        console.log("\tid PJ metier : "+idPjMetier);
        console.log("\tName : "+name);
        console.log("\tNombre : "+nombre);
        console.log("\tMin :" +min);
        console.log("\tRIE :"+rie);
        console.log("\tEXT :"+ext);
        console.log("\tPUB :"+pub);

        return PjMetier.update({_id: idPjMetier }, {$set : {name : name, nombre : Number(nombre), min : min, rie : rie, ext : ext, pub : pub}});

    },
    'deletePJ' : function(idPjMetier){
       console.log("The method 'deletePJ' has been called !");
       console.log("\tid Pieces Jointe Metier : "+idPjMetier);
       Fsd.find().forEach(function(fsd){
           Meteor.call('deletePjToFsd', fsd._id, idPjMetier);
       });
       return PjMetier.remove({_id: idPjMetier});
    },
     'deletePJById' : function(idPjMetier){
       console.log("The method 'deletePJById' has been called !");
       console.log("\tid Pieces Jointes Metier : "+idPjMetier);

       return PjMetier.remove({_id: idPjMetier});
    }
})
