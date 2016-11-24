Template.inputDepen.events({
    'click .deleteDepen' : function(event){
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        if(crt.dependance.length > 1)
        Meteor.call('deleteDependance', this._id);
    }
});
/*
Template.inputHeberg.events({
    'click .deleteHeberg' : function(event){
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        if(crt.hebergement.length > 1)
        Meteor.call('deleteHebergement', this._id);
    }
});*/

Template.inputreg.events({
    'click .deleteReg' : function(event){
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        if(crt.reglementaire.length > 1)
        Meteor.call('deleteReglementaire', this._id);
    }
});

Template.inputsecu.events({
    'click .deleteSecu' : function(event){
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        if(crt.securite.length > 1)
        Meteor.call('deleteSecurite', this._id);
    }
});

Template.inputpdt.events({
    'click .deletePDT' : function(event){
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        if(crt.postedetravail.length > 1)
        Meteor.call('deletePdT', this._id);
    }
});