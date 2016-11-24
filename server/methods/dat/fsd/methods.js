//FSD
Meteor.methods({
    'addFsdEmpty' : function(){
         console.log("The method 'addEspEmpty' has been called !");

         return Fsd.insert({ foncMetier : [],
                             donnMetier : [],
                             pjMetier : [],
                             refDonnees : [],
                             serviceConnexe : []
         });
    },
    // FONCTIONNALITES METIER
    'addFMToFsd' : function(idFsd, idFM){
        console.log("The method 'addFMToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id FM : "+idFM);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsdFoncMetier = fm.foncMetier;
        var i = fsdFoncMetier.indexOf(idFM);

        if(i == -1){
            fsdFoncMetier.push(idFM);
            Fsd.update({ _id : idFsd}, {$set : {foncMetier : fsdFoncMetier}});
        }
    },
     'deleteFMToFsd' : function(idFsd, idFM){
        console.log("The method 'addFMToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id FM : "+idFM);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsdFoncMetier = fm.foncMetier;
        var i = fsdFoncMetier.indexOf(idFM);

        if(i != -1){
            Meteor.call('deleteFMById', idFM);
            fsdFoncMetier.splice(i,1);
            Fsd.update({ _id : idFsd}, {$set : {foncMetier : fsdFoncMetier}});
        }
    },
    // DONNEES METIER
    'addDMToFsd' : function(idFsd, idDM){
        console.log("The method 'addDMToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id DM : "+idDM);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsdDonnMetier = fm.donnMetier;
        var i = fsdDonnMetier.indexOf(idDM);

        if(i == -1){
            fsdDonnMetier.push(idDM);
            Fsd.update({ _id : idFsd}, {$set : {donnMetier : fsdDonnMetier}});
        }
    },
     'deleteDMToFsd' : function(idFsd, idDM){
        console.log("The method 'deleteDMToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id DM : "+idDM);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsdDonnMetier = fm.donnMetier;
        var i = fsdDonnMetier.indexOf(idDM);

        if(i != -1){
            Meteor.call('deleteDMById', idDM);
            fsdDonnMetier.splice(i,1);
            Fsd.update({ _id : idFsd}, {$set : {donnMetier : fsdDonnMetier}});
        }
    },
    //Pieces jointes Metier
     'addPjToFsd' : function(idFsd, idPj){
        console.log("The method 'addPjToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id PJ : "+idPj);

        var fm = Fsd.findOne({ _id : idFsd});
        var fspjMetier = fm.pjMetier;
        var i = fspjMetier.indexOf(idPj);

        if(i == -1){
            fspjMetier.push(idPj);
            Fsd.update({ _id : idFsd}, {$set : {pjMetier : fspjMetier}});
        }
    },
    'deletePjToFsd' : function(idFsd, idPj){
        console.log("The method 'deletePjToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id PJ : "+idPj);

        var fm = Fsd.findOne({ _id : idFsd});
        var fspjMetier = fm.pjMetier;
        var i = fspjMetier.indexOf(idPj);

        if(i != -1){
            Meteor.call('deletePJById', idPj);
            fspjMetier.splice(i,1);
            Fsd.update({ _id : idFsd}, {$set : {pjMetier : fspjMetier}});
        }
    },
    //Referentiels donnees
     'addRDToFsd' : function(idFsd, idRD){
        console.log("The method 'addRDToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id RD : "+idRD);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsrefDonnees = fm.refDonnees;
        var i = fsrefDonnees.indexOf(idRD);

        if(i == -1){
            fsrefDonnees.push(idRD);
            Fsd.update({ _id : idFsd}, {$set : {refDonnees : fsrefDonnees}});
        }
    },
     'deleteRDToFsd' : function(idFsd, idRD){
        console.log("The method 'deleteRDToFsd' has been called !");
        console.log("id FSD : "+idFsd);
        console.log("id RD : "+idRD);

        var fm = Fsd.findOne({ _id : idFsd});
        var fsrefDonnees = fm.refDonnees;
        var i = fsrefDonnees.indexOf(idRD);

        if(i != -1){
            Meteor.call('deleteRDById', idRD);
            fsrefDonnees.splice(i,1);
            Fsd.update({ _id : idFsd}, {$set : {refDonnees : fsrefDonnees}});
        }
    },
/******************************************************************************/
/******************************Service Connexe ********************************/
 'addServiceConnexeToFsd' : function(idFsd, idServiceConnexe){
    console.log("The method 'addServiceConnexeToFsd' has been called !");
    console.log("\tid FSD : "+idFsd);
    console.log("\tid Service Connexes : "+idServiceConnexe);

    var fm = Fsd.findOne({ _id : idFsd});
    var fsdServiceConnexe = fm.serviceConnexe;
    var i = fsdServiceConnexe.indexOf(idServiceConnexe);

    if(i == -1){
        fsdServiceConnexe.push(idServiceConnexe);
        Fsd.update({ _id : idFsd}, {$set : {serviceConnexe : fsdServiceConnexe}});
    }
},
 'deleteServiceConnexeToFsd' : function(idFsd, idServiceConnexe){
   console.log("The method 'deleteServiceConnexeToFsd' has been called !");
   console.log("\tid FSD : "+idFsd);
   console.log("\tid Service Connexes : "+idServiceConnexe);

   var fm = Fsd.findOne({ _id : idFsd});
   var fsdServiceConnexe = fm.serviceConnexe;
   var i = fsdServiceConnexe.indexOf(idServiceConnexe);

   if(i != -1){
       Meteor.call('deleteServiceConnexeById', idServiceConnexe);
       fsdServiceConnexe.splice(i,1);
       Fsd.update({ _id : idFsd}, {$set : {serviceConnexe : fsdServiceConnexe}});
   }
},
/*****************************************************************************/

    'deleteFsd' : function(idFsd){
        console.log("The method 'deleteFsd' has been called !");
        console.log("ID ESP : "+idFsd);

        var fsd = Fsd.findOne({_id : idFsd});
        //Fonctionnalités métier
        for(var i = 0 ; i < fsd.foncMetier.length ; i++){
            Meteor.call('deleteFMToFsd', idFsd, fsd.foncMetier[i]);
        }
        //données Metier
        for(i = 0 ; i < fsd.donnMetier.length ; i++){
            Meteor.call('deleteDMToFsd', idFsd, fsd.donnMetier[i]);
        }
        //pieces jointes
        for(i = 0 ; i < fsd.pjMetier.length ; i++){
            Meteor.call('deletePjToFsd', idFsd, fsd.pjMetier[i]);
        }
        //Referenetiels données
        for(i = 0 ; i < fsd.refDonnees.length ; i++){
            Meteor.call('deleteRDToFsd', idFsd, fsd.refDonnees[i]);
        }
        //service Connexe
        for(i = 0 ; i < fsd.serviceConnexe.length ; i++){
            Meteor.call('deleteServiceConnexeToFsd', idFsd, fsd.serviceConnexe[i]);
        }
        return Fsd.remove({_id : idFsd});
    }
});
