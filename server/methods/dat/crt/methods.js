//CONT
Meteor.methods({
    'addCrtEmpty' : function(){
        console.log("The method 'addCrtEmpty' has been called !");
        var volumetrie = Meteor.call('addVolumetrieEmpty');

        return Crt.insert({ reglementaire : [],
                             securite : [],
                             dependance : [],
                             volumetrie : volumetrie,
                             hebergement : [],
                             postedetravail : []
        });
    },
    // REGLEMENTAIRE
    'addReglementaireToCrt' : function(idCrt, idReglementaire){
        console.log("The method 'addReglementaireToCont' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Reglementaire : "+idReglementaire);

        var crt = Crt.findOne({ _id : idCrt});
        var crtReglementaire = crt.reglementaire;
        var i = crtReglementaire.indexOf(idReglementaire);

        if(i == -1){
            crtReglementaire.push(idReglementaire);
            Crt.update({ _id : idCrt}, {$set : { reglementaire : crtReglementaire}});
        }
    },
    'deleteReglementaireToCrt' : function(idCrt, idReglementaire){
        console.log("The method 'deleteReglementaireToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Reglementaire : "+idReglementaire);

        var crt = Crt.findOne({ _id : idCrt});
        var crtReglementaire = crt.reglementaire;
        var i = crtReglementaire.indexOf(idReglementaire);

        if(i != -1){
            Meteor.call('deleteReglementaireById', idReglementaire);
            crtReglementaire.splice(i,1);
            Crt.update({ _id : idCrt}, {$set : { reglementaire : crtReglementaire}});
        }
    },
    //Securite
    'addSecuriteToCrt' : function(idCrt, idSecurite){
        console.log("The method 'addSecuriteToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Securité : "+idSecurite);

        var crt = Crt.findOne({ _id : idCrt});
        var crtSecurite = crt.securite;
        var i = crtSecurite.indexOf(idSecurite);

        if(i == -1){
            crtSecurite.push(idSecurite);
            Crt.update({ _id : idCrt}, {$set : { securite : crtSecurite}});
        }
    },
    'deleteSecuriteToCrt' : function(idCrt, idSecurite){
        console.log("The method 'deleteSecuriteToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Securité : "+idSecurite);

        var crt = Crt.findOne({ _id : idCrt});
        var crtSecurite = crt.securite;
        var i = crtSecurite.indexOf(idSecurite);

        if(i != -1){
            Meteor.call('deleteSecuriteById', idSecurite);
            crtSecurite.splice(i,1);
            Crt.update({ _id : idCrt}, {$set : { securite : crtSecurite}});
        }
    },
    //Dependance
    'addDependanceToCrt' : function(idCrt, idDependance){
        console.log("The method 'addDependanceToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Dependance : "+idDependance);

        var crt = Crt.findOne({ _id : idCrt});
        var crtDependance = crt.dependance;
        var i = crtDependance.indexOf(idDependance);

        if(i == -1){
            crtDependance.push(idDependance);
            Crt.update({ _id : idCrt}, {$set : { dependance : crtDependance}});
        }
    },
     'deleteDependanceToCrt' : function(idCrt, idDependance){
        console.log("The method 'deleteDependanceToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Dependance : "+idDependance);

        var crt = Crt.findOne({ _id : idCrt});
        var crtDependance = crt.dependance;
        var i = crtDependance.indexOf(idDependance);

        if(i != -1){
            Meteor.call('deleteDependanceById', idDependance);
            crtDependance.splice(i, 1);
            Crt.update({ _id : idCrt}, {$set : { dependance : crtDependance}});
        }
    },
    //Hebergement
    'addHebergementToCrt' : function(idCrt, idHebergement){
        console.log("The method 'addHebergementToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Hebergement : "+idHebergement);

        var crt = Crt.findOne({ _id : idCrt});
        var crtHebergement = crt.hebergement;
        var i = crtHebergement.indexOf(idHebergement);

        if(i == -1){
            crtHebergement.push(idHebergement);
            Crt.update({ _id : idCrt}, {$set : { hebergement : crtHebergement}});
        }
    },
    'deleteHebergementToCrt' : function(idCrt, idHebergement){
        console.log("The method 'deleteHebergementToCrt' has been called !");
        console.log("Id Crt : "+idCrt);
        console.log("id Hebergement : "+idHebergement);

        var crt = Crt.findOne({ _id : idCrt});
        var crtHebergement = crt.hebergement;
        var i = crtHebergement.indexOf(idHebergement);

        if(i != -1){
            Meteor.call('deleteHebergementById', idHebergement);
            crtHebergement.splice(i,1);
            Crt.update({ _id : idCrt}, {$set : { hebergement : crtHebergement}});
        }
    },
    //Poste de travail
    'addPdTToCrt' : function(idCrt, idPdT){
        console.log("The method 'addPdTToCrt' has been called !");
        console.log("\tId Crt : "+idCrt);
        console.log("\tid Poste de travail : "+idPdT);

        var crt = Crt.findOne({ _id : idCrt});
        var postedetravail = crt.postedetravail;
        var i = postedetravail.indexOf(idPdT);

        if(i == -1){
            postedetravail.push(idPdT);
            Crt.update({ _id : idCrt}, {$set : { postedetravail : postedetravail}});
        }
    },
    'deletePdTToCrt' : function(idCrt, idPdT){
        console.log("The method 'deletePdTToCrt' has been called !");
        console.log("\tId Crt : "+idCrt);
        console.log("\tid Poste de travail : "+idPdT);

        var crt = Crt.findOne({ _id : idCrt});
        var postedetravail = crt.postedetravail;
        var i = postedetravail.indexOf(idPdT);

        if(i != -1){
            Meteor.call('deletePdTById', idPdT);
            postedetravail.splice(i,1);
            Crt.update({ _id : idCrt}, {$set : { postedetravail : postedetravail}});
        }
    },
    'deleteCrt': function(idCrt){
        console.log("The method 'deleteCrt' has been called !");
        console.log("ID contraintes : "+idCrt);

        var crt = Crt.findOne({ _id : idCrt});
        
        //Reglementaire
        for(var i = 0 ; i < crt.reglementaire.length ; i++){
            Meteor.call('deleteReglementaireToCrt', idCrt, crt.reglementaire[i]);
        }
        //Securite
        for(var i = 0 ; i < crt.securite.length ; i++){
            Meteor.call('deleteSecuriteToCrt', idCrt, crt.securite[i]);
        }
        //Dependance
        for(var i = 0 ; i < crt.dependance.length ; i++){
            Meteor.call('deleteDependanceToCrt', idCrt, crt.dependance[i]);
        }
        //Hebergement
        for(var i = 0 ; i < crt.hebergement.length ; i++){
            Meteor.call('deleteHebergementToCrt', idCrt, crt.hebergement[i]);
        }
        //Poste de travail
        for(var i = 0 ; i < crt.postedetravail.length ; i++){
            Meteor.call('deletePdTToCrt', idCrt, crt.postedetravail[i]);
        }
        //Volumetrie
        Meteor.call('deleteVolumetrie',crt.volumetrie);
        
        return Crt.remove({ _id : idCrt});
    }




})
