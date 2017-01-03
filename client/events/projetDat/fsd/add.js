//inputdm
Template.inputdm.events({
  'focus .dm': function(event) {
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    var donnMetier = fsd.donnMetier;
    if (this._id === donnMetier[donnMetier.length - 1]) {
      Meteor.call('addDonnesMetierEmpty', function(err, data) {
        Meteor.call('addDMToFsd', idFsd, data);
      });
    }
  }
});
//inputfm
Template.inputfm.events({
  'focus .fm': function(event) {
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    var foncMetier = fsd.foncMetier;
    if (this._id === foncMetier[foncMetier.length - 1]) {
      Meteor.call('addFoncMetierEmpty', function(err, data) {
        Meteor.call('addFMToFsd', idFsd, data);
      });
    }
  }
});
//inputPj
Template.inputpj.events({
  'focus .pj': function(event) {
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    var pjMetier = fsd.pjMetier;
    if (this._id === pjMetier[pjMetier.length - 1]) {
      Meteor.call('addPjMetierEmpty', function(err, data) {
        Meteor.call('addPjToFsd', idFsd, data);
      });
    }
  }
});
//inputrd
Template.inputrd.events({
  'focus .rd': function(event) {
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    var refDonnees = fsd.refDonnees;
    if (this._id === refDonnees[refDonnees.length - 1]) {
      Meteor.call('addRefDonneesEmpty', function(err, data) {
        Meteor.call('addRDToFsd', idFsd, data);
      });
    }
  }
});

//inputrd
Template.inputserviceconnexe.events({
  'focus .sc': function(event) {
    var idFsd = Session.get('id_fonc');
    var fsd = Fsd.findOne({
      _id: idFsd
    });
    var serviceConnexe = fsd.serviceConnexe;
    if (this._id === serviceConnexe[serviceConnexe.length - 1]) {
      Meteor.call('addServiceConnexeEmpty', function(err, data) {
        Meteor.call('addServiceConnexeToFsd', idFsd, data);
      });
    }
  }
});


Template.addFSD.events({
  'click #addFsd': function() {
    // Prevent default browser form submit
    event.preventDefault();
    var fsd = Fsd.findOne({
      _id: Session.get('id_fonc')
    });
    if (!fsd) {
      return null;
    }
    var foncMetier = fsd.foncMetier;
    var donnMetier = fsd.donnMetier;
    var pjMetier = fsd.pjMetier;
    var refDonnees = fsd.refDonnees;
    var serviceConnexe = fsd.serviceConnexe;

    //FoncMetier
    var name, min, ext, rie, pub, nombre;
    for (var i = 0; i < foncMetier.length; i++) {
      var idfmCase = foncMetier[i];
      name = $('#' + idfmCase + '> .finput > [name="fm"]').val();
      min = $('#' + idfmCase + '> .finput >  input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idfmCase + '> .finput >  input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idfmCase + '> .finput >  input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idfmCase + '> .finput >  input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteFM', idfmCase);
      }
      else {
        Meteor.call('updateFM', idfmCase, name, min, rie, ext, pub);
      }
    }
    //DM
    for (var i = 0; i < donnMetier.length; i++) {
      var idDmCase = donnMetier[i];
      name = $('#' + idDmCase + '> .finput > [name="dm"]').val();
      min = $('#' + idDmCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idDmCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idDmCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idDmCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteDM', idDmCase);
      }
      else {
        Meteor.call('updateDM', idDmCase, name, min, rie, ext, pub);
      }
    }
    //PJ 
    for (var i = 0; i < pjMetier.length; i++) {
      var idPjCase = pjMetier[i];
      name = $('#' + idPjCase + '> .finput > [name="pj"]').val();
      nombre = $('#' + idPjCase + '> .finput >input[name="nombre"]').val();
      min = $('#' + idPjCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idPjCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idPjCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idPjCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deletePJ', idPjCase);
      }
      else {
        Meteor.call('updatePJ', idPjCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < refDonnees.length; i++) {
      var idRDCase = refDonnees[i];
      name = $('#' + idRDCase + '> .finput > [name="rd"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="nombre"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteRD', idRDCase);
      }
      else {
        Meteor.call('updateRD', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < serviceConnexe.length; i++) {
      var idRDCase = serviceConnexe[i];
      name = $('#' + idRDCase + '> .finput > [name="sc"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="mode"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteServiceConnexe', idRDCase);
      }
      else {
        Meteor.call('updateServiceConnexe', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    Router.go("home");
  },
  //PREVIOUS ESP
  'click #addFsdPrev': function() {
    // Prevent default browser form submit
    event.preventDefault();
    var fsd = Fsd.findOne({
      _id: Session.get('id_fonc')
    });
    if (!fsd) {
      return null;
    }
    var foncMetier = fsd.foncMetier;
    var donnMetier = fsd.donnMetier;
    var pjMetier = fsd.pjMetier;
    var refDonnees = fsd.refDonnees;
    var serviceConnexe = fsd.serviceConnexe;

    //FoncMetier
    var name, min, ext, rie, pub, nombre;
    for (var i = 0; i < foncMetier.length; i++) {
      var idfmCase = foncMetier[i];
      name = $('#' + idfmCase + '> .finput > [name="fm"]').val();
      min = $('#' + idfmCase + '> .finput >  input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idfmCase + '> .finput >  input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idfmCase + '> .finput >  input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idfmCase + '> .finput >  input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteFM', idfmCase);
      }
      else {
        Meteor.call('updateFM', idfmCase, name, min, rie, ext, pub);
      }
    }
    //DM
    for (var i = 0; i < donnMetier.length; i++) {
      var idDmCase = donnMetier[i];
      name = $('#' + idDmCase + '> .finput > [name="dm"]').val();
      min = $('#' + idDmCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idDmCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idDmCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idDmCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteDM', idDmCase);
      }
      else {
        Meteor.call('updateDM', idDmCase, name, min, rie, ext, pub);
      }
    }
    //PJ 
    for (var i = 0; i < pjMetier.length; i++) {
      var idPjCase = pjMetier[i];
      name = $('#' + idPjCase + '> .finput > [name="pj"]').val();
      nombre = $('#' + idPjCase + '> .finput >input[name="nombre"]').val();
      min = $('#' + idPjCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idPjCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idPjCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idPjCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deletePJ', idPjCase);
      }
      else {
        Meteor.call('updatePJ', idPjCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < refDonnees.length; i++) {
      var idRDCase = refDonnees[i];
      name = $('#' + idRDCase + '> .finput > [name="rd"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="nombre"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteRD', idRDCase);
      }
      else {
        Meteor.call('updateRD', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < serviceConnexe.length; i++) {
      var idRDCase = serviceConnexe[i];
      name = $('#' + idRDCase + '> .finput > [name="sc"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="mode"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteServiceConnexe', idRDCase);
      }
      else {
        Meteor.call('updateServiceConnexe', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    //ESP
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    //Objectif
    if (esp.objectifs.length < 1)
      Meteor.call('addObjectifEmpty', function(err, data) {
        Meteor.call('addObjToEsp', idEsp, data);
      });
    //Contexte
    if (esp.contexte.length < 1)
      Meteor.call('addContexteEmpty', function(err, data) {
        Meteor.call('addContexteToEsp', idEsp, data);
      });
    //Enjeux
    if (esp.enjeux.length < 1)
      Meteor.call('addEnjeuxEmpty', function(err, data) {
        Meteor.call('addEnjToEsp', idEsp, data);
      });
    //Planning
    if (esp.planning.length < 1)
      Meteor.call('addPlanningEmpty', function(err, data) {
        Meteor.call('addPlanningToEsp', idEsp, data);
      });
    //Acteur Projet
    if (esp.acteurProjet.length < 1)
      Meteor.call('addActeurProjetEmpty', function(err, data) {
        Meteor.call('addAPToEsp', idEsp, data);
      });
    //Acteur Projet
    if (esp.acteurUsager.length < 1)
      Meteor.call('addActeurUsagerEmpty', function(err, data) {
        Meteor.call('addAUToEsp', idEsp, data);
      });

    Router.go("esp");
  },
  //NEXT CRT
  'click #addFsdNext': function() {
    // Prevent default browser form submit
    event.preventDefault();
    var fsd = Fsd.findOne({
      _id: Session.get('id_fonc')
    });
    if (!fsd) {
      return null;
    }
    var foncMetier = fsd.foncMetier;
    var donnMetier = fsd.donnMetier;
    var pjMetier = fsd.pjMetier;
    var refDonnees = fsd.refDonnees;
    var serviceConnexe = fsd.serviceConnexe;

    //FoncMetier
    var name, min, ext, rie, pub, nombre;
    for (var i = 0; i < foncMetier.length; i++) {
      var idfmCase = foncMetier[i];
      name = $('#' + idfmCase + '> .finput > [name="fm"]').val();
      min = $('#' + idfmCase + '> .finput >  input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idfmCase + '> .finput >  input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idfmCase + '> .finput >  input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idfmCase + '> .finput >  input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteFM', idfmCase);
      }
      else {
        Meteor.call('updateFM', idfmCase, name, min, rie, ext, pub);
      }
    }
    //DM
    for (var i = 0; i < donnMetier.length; i++) {
      var idDmCase = donnMetier[i];
      name = $('#' + idDmCase + '> .finput > [name="dm"]').val();
      min = $('#' + idDmCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idDmCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idDmCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idDmCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteDM', idDmCase);
      }
      else {
        Meteor.call('updateDM', idDmCase, name, min, rie, ext, pub);
      }
    }
    //PJ 
    for (var i = 0; i < pjMetier.length; i++) {
      var idPjCase = pjMetier[i];
      name = $('#' + idPjCase + '> .finput > [name="pj"]').val();
      nombre = $('#' + idPjCase + '> .finput >input[name="nombre"]').val();
      min = $('#' + idPjCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idPjCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idPjCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idPjCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deletePJ', idPjCase);
      }
      else {
        Meteor.call('updatePJ', idPjCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < refDonnees.length; i++) {
      var idRDCase = refDonnees[i];
      name = $('#' + idRDCase + '> .finput > [name="rd"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="nombre"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteRD', idRDCase);
      }
      else {
        Meteor.call('updateRD', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    //RD
    for (var i = 0; i < serviceConnexe.length; i++) {
      var idRDCase = serviceConnexe[i];
      name = $('#' + idRDCase + '> .finput > [name="sc"]').val();
      nombre = $('#' + idRDCase + '> .finput > input[name="mode"]').val();
      min = $('#' + idRDCase + '> .finput > input[name="min"]').is(':checked') ? true : false;
      rie = $('#' + idRDCase + '> .finput > input[name="rie"]').is(':checked') ? true : false;
      ext = $('#' + idRDCase + '> .finput > input[name="ext"]').is(':checked') ? true : false;
      pub = $('#' + idRDCase + '> .finput > input[name="pub"]').is(':checked') ? true : false;
      if (name === "") {
        Meteor.call('deleteServiceConnexe', idRDCase);
      }
      else {
        Meteor.call('updateServiceConnexe', idRDCase, name, nombre, min, rie, ext, pub);
      }
    }
    //CONTRAINTES
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
    Router.go("crt");
  }


});
