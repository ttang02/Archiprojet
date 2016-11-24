//Acteur projet
Meteor.methods({
     'addActeurProjetEmpty' : function(){
       console.log("The method 'addActeurProjetEmpty' has been called !");

       return ActeurProjet.insert({nom : "", fonction : "", entite :"", typeActeur : "", createAt: new Date()});
     },
     'updateActeurProjet' : function(idAP, nom, fonction, entite, typeActeur){
       console.log("The method 'updateActeurProjet' has been called !");
       console.log("\tid ActeurProjet : "+idAP);
       console.log("\t\tnom : "+nom);
       console.log("\tfonction :"+fonction);
       console.log("\tentite : "+entite);
       console.log("\tID typeActeur : "+typeActeur);

       return ActeurProjet.update({ _id : idAP},{$set : {nom : nom, fonction : fonction, entite : entite, typeActeur : typeActeur}});
     },
     'deleteActeurProjet' : function(idAP){
       console.log("The method 'deleteActeurProjet' has been called !");
       console.log("\tid ActeurProjet : "+idAP);
       Esp.find().forEach(function(esp){
         Meteor.call('deleteAPToEsp', esp._id, idAP)
       });
       return ActeurProjet.remove({_id : idAP});
     },
     'deleteActeurProjetById' : function(idAP){
       console.log("The method 'deleteActeurProjetById' has been called !");
       console.log("\tid ActeurProjet : "+idAP);

       return ActeurProjet.remove({_id : idAP});
     }
});
