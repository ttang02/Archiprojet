Template.inputobj.events({
  'click .deleteObj': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.objectifs.length > 1) {
      Meteor.call('deleteObjectif', this._id);
    }
  }
});

Template.inputcontexte.events({
  'click .deleteContexte': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.contexte.length > 1) {
      Meteor.call('deleteContexte', this._id);
    }
  }
});

Template.inputenj.events({
  'click .deleteEnj': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.enjeux.length > 1) {
      Meteor.call('deleteEnjeux', this._id);
    }
  }
});

Template.inputplanning.events({
  'click .deletePlanning': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.planning.length > 1) {
      Meteor.call('deletePlanning', this._id);
    }
  }
});

Template.inputacteurproj.events({
  'click .deleteActProjet': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.acteurProjet.length > 1) {
      Meteor.call('deleteActeurProjet', this._id);
    }
  }
});

Template.inputusag.events({
  'click .deleteActU': function(event) {
    var idEsp = Session.get('id_esp');
    var esp = Esp.findOne({
      _id: idEsp
    });
    if (esp.acteurUsager.length > 1) {
      Meteor.call('deleteActeurUsager', this._id);
    }
  }
});
