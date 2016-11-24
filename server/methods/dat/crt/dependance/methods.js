//Dependance
Meteor.methods({
    'addDependanceEmpty' : function(){
        console.log("The method 'addDependanceEmpty' has been called!");
        return Dependance.insert({si : "", consommateur : false, fournisseur : false, createAt: new Date()});
    },
    'updateDependance' : function(idDependance, si, consommateur, fournisseur){
        console.log("The method 'updateDependance' has been called!");
        console.log("Objectif ID : "+idDependance);
        console.log("\tSI :" +si);
        console.log("\tconsommateur :" +consommateur);
        console.log("\tfournisseur :" +fournisseur);

        return Dependance.update({_id : idDependance}, {$set: {si : si, consommateur : consommateur, fournisseur: fournisseur}});
    },
    'deleteDependance' : function(idDependance){
        console.log("The method 'deleteDependance' has been called!");
        console.log("\tObjectif ID : "+idDependance);

        Crt.find().forEach(function(cont){
            Meteor.call('deleteDependanceToCrt', cont._id, idDependance);
        });
       return Dependance.remove(idDependance);
    },
    'deleteDependanceById' : function(idDependance){
        console.log("The method 'deleteDependanceById' has been called!");
        console.log("\tObjectif ID : "+idDependance);

        return Dependance.remove(idDependance);
    }
});
