Template.esp.events({
   'click a' : function(){
       Session.set('id_dat', this._id);
       Session.set('id_enf', this.idEnf);
       Session.set('id_esp', this.idEsp);
       Session.set('id_cont', this.idCrt);
       Session.set('id_fonc', this.idFsd);
       
       
       var idEsp = Session.get('id_esp');
       var esp = Esp.findOne({_id : idEsp});
       //Objectif
        if(esp.objectifs.length < 1)
        Meteor.call('addObjectifEmpty', function(err, data) {
            Meteor.call('addObjToEsp', idEsp, data);
        });
        //Contexte
        if(esp.contexte.length < 1)
        Meteor.call('addContexteEmpty', function(err, data) {
            Meteor.call('addContexteToEsp', idEsp, data);
        });
        //Enjeux
        if(esp.enjeux.length < 1)
        Meteor.call('addEnjeuxEmpty', function(err, data) {
            Meteor.call('addEnjToEsp', idEsp, data);
        });
        //Planning
        if(esp.planning.length < 1)
        Meteor.call('addPlanningEmpty', function(err, data) {
            Meteor.call('addPlanningToEsp', idEsp, data);
        });
         //Acteur Projet
        if(esp.acteurProjet.length < 1)
        Meteor.call('addActeurProjetEmpty', function(err, data) {
            Meteor.call('addAPToEsp', idEsp, data);
        });
         //Acteur Projet
        if(esp.acteurUsager.length < 1)
        Meteor.call('addActeurUsagerEmpty', function(err, data) {
            Meteor.call('addAUToEsp', idEsp, data);
        });
   } 
});