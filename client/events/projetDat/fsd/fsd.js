Template.fsd.events({
  'click a': function() {
    Session.set('id_dat', this._id);
    Session.set('id_enf', this.idEnf);
    Session.set('id_esp', this.idEsp);
    Session.set('id_cont', this.idCrt);
    Session.set('id_fonc', this.idFsd);
    
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    //FoncMetier
    if(fsd.foncMetier.length < 1)
    Meteor.call('addFoncMetierEmpty', function(err, data) {
      Meteor.call('addFMToFsd', idFsd, data);
    });
    //DonnesMetier
    if(fsd.donnMetier.length < 1)
    Meteor.call('addDonnesMetierEmpty', function(err, data) {
      Meteor.call('addDMToFsd', idFsd, data);
    });
    //RefDonnnes
    if(fsd.refDonnees.length < 1)
    Meteor.call('addRefDonneesEmpty', function(err, data) {
      Meteor.call('addRDToFsd', idFsd, data);
    });
    //PJMetier
    if(fsd.pjMetier.length < 1)
    Meteor.call('addPjMetierEmpty', function(err, data) {
      Meteor.call('addPjToFsd', idFsd, data);
    });
    //Service Connexes
    if(fsd.serviceConnexe.length < 1)
    Meteor.call('addServiceConnexeEmpty', function(err, data) {
      Meteor.call('addServiceConnexeToFsd', idFsd, data);
    });
  },
});