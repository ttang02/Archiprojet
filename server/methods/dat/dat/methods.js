Meteor.methods({
    'addDat' : function(datname, userId){
        console.log("The method 'addDat' has been called !");
        console.log("Name Dat : "+datname);

        var idEsp = Meteor.call('addEspEmpty');
        var idCrt = Meteor.call('addCrtEmpty');
        var idFsd = Meteor.call('addFsdEmpty');
        var idEnf = Meteor.call('addEnfEmpty');

        var dat = Dat.insert({
            name : datname,
            idEsp : idEsp,
            idFsd : idFsd,
            idCrt : idCrt,
            idEnf : idEnf,
            userId : userId
        });
        Meteor.call('addDatToUser',dat, userId);
    },
    'deleteDat' : function(idDat){
        console.log("The method 'deleteDat' has been called !");
        console.log("Id DAT : "+idDat);
        var dat = Dat.findOne({_id : idDat});
        // A completer pour supprimer un ESP, un projet, un fonc, une contrainte et exigences non fonctionnelles
        Meteor.call('deleteEsp', dat.idEsp);
        Meteor.call('deleteCrt', dat.idCrt);
        Meteor.call('deleteEnf', dat.idEnf);
        Meteor.call('deleteFsd', dat.idFsd);

        return Dat.remove({ _id : idDat});
    },


});
