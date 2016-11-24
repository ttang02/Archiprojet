Template.inputfm.events({
    'click .deleteFm': function(event) {
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id : idFsd
        });
        if (fsd.foncMetier.length > 1) {
            Meteor.call('deleteFM', this._id);
        }
    }
});

Template.inputdm.events({
    'click .deleteDm': function(event) {
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id : idFsd
        });
        if (fsd.donnMetier.length > 1) {
        Meteor.call('deleteDM', this._id);
        }
    }
});
Template.inputpj.events({
    'click .deletePj': function(event) {
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id : idFsd
        });
        if (fsd.pjMetier.length > 1) {
        Meteor.call('deletePJ', this._id);
        }
    }
});
Template.inputrd.events({
    'click .deleteRd': function(event) {
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id : idFsd
        });
        if (fsd.refDonnees.length > 1) {
        Meteor.call('deleteRD', this._id);
        }
    }
});

Template.inputserviceconnexe.events({
    'click .deleteSc': function(event) {
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id : idFsd
        });
        if (fsd.serviceConnexe.length > 1) {
        Meteor.call('deleteServiceConnexe', this._id);
        }
    }
});