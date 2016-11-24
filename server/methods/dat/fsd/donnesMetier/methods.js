//Donnes Metier

Meteor.methods({
    'addDonnesMetierEmpty' : function(){
        console.log("The method 'addDonnesMetierEmpty' has been called !");

        return DonMetier.insert({ name : "", min : false, rie : false, ext : false, pub : false, createAt: new Date()});
    },
    'updateDM' : function(idDonMetier, name, min, rie, ext, pub){
        console.log("The method 'updateDM' has been called !");
        console.log("\tid Donnees Metier :" +idDonMetier);
        console.log("\tName : "+name);
        console.log("\tMin :" +min);
        console.log("\tRIE :"+rie);
        console.log("\tEXT :"+ext);
        console.log("\tPUB :"+pub);

        return DonMetier.update({_id: idDonMetier }, {$set : {name : name, min : min, rie : rie, ext : ext, pub : pub}});

    },

    'deleteDM' : function(idDonMetier){
       console.log("The method 'deleteDM' has been called !");
       console.log("\tid Donnees Metier : "+idDonMetier);
       Fsd.find().forEach(function(fsd){
           Meteor.call('deleteDMToFsd', fsd._id, idDonMetier);
       });
       return DonMetier.remove({_id: idDonMetier});
    },
     'deleteDMById' : function(idDonMetier){
       console.log("The method 'deleteDMById' has been called !");
       console.log("\tid Donnees Metier : "+idDonMetier);

       return DonMetier.remove({_id: idDonMetier});
    }
});
