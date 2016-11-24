//CONTRAINTES
Template.crt.events({
    'click a': function() {
        Session.set('id_dat', this._id);
        Session.set('id_enf', this.idEnf);
        Session.set('id_esp', this.idEsp);
        Session.set('id_cont', this.idCrt);
        Session.set('id_fonc', this.idFsd);
        
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        //Reglementaire
        if (crt.reglementaire.length < 1)
            Meteor.call('addReglementaireEmpty', function(err, data) {
                Meteor.call('addReglementaireToCrt', idCrt, data);
            });
        //Securite
        if (crt.securite.length < 1)
            Meteor.call('addSecuriteEmpty', function(err, data) {
                Meteor.call('addSecuriteToCrt', idCrt, data);
            });
        //Dependance
        if (crt.dependance.length < 1)
            Meteor.call('addDependanceEmpty', function(err, data) {
                Meteor.call('addDependanceToCrt', idCrt, data);
        });
        //Poste de travail
        if (crt.postedetravail.length < 1)
            Meteor.call('addPdTEmpty', function(err, data) {
                Meteor.call('addPdTToCrt', idCrt, data);
        });
    }
});