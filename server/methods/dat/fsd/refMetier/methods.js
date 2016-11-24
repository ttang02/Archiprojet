//Referentiels metiers

Meteor.methods({
    'addRefDonneesEmpty' : function(){
        console.log("The method 'addRefDonneesEmpty' has been called !");
        return RefDonnees.insert({name: "", mode:"", min : false, rie : false, ext : false, pub : false, createAt: new Date()});
    },
    'updateRD' : function(idDonMetier, name, mode, min, rie, ext, pub){
        console.log("The method 'updateRD' has been called !");
        console.log("\tid Donnees metier :" +idDonMetier);
        console.log("\tName : "+name);
        console.log("\tMode : "+mode);
        console.log("\tMin :" +min);
        console.log("\tRIE :"+rie);
        console.log("\tEXT :"+ext);
        console.log("\tPUB :"+pub);

        return RefDonnees.update({_id: idDonMetier }, {$set : {name : name, mode : mode , min : min, rie : rie, ext : ext, pub : pub}});

    },
    'deleteRD' : function(idRD){
       console.log("The method 'deleteRD' has been called !");
       console.log("\tid RD Metier : "+idRD);
       Fsd.find().forEach(function(fsd){
           Meteor.call('deleteRDToFsd', fsd._id, idRD);
       });
       return RefDonnees.remove({_id: idRD});
    },
     'deleteRDById' : function(idRD){
       console.log("The method 'deleteRDById' has been called !");
       console.log("\tid RD Metier : "+idRD);

       return RefDonnees.remove({_id: idRD});
    }
});
