Template.addNomProjet.helpers({
   'nomProjet' : function(){
       var id_esp = Session.get('id_esp');
       if(id_esp){
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            return esp;
       }
   }
});

Template.addObjectif.helpers({
   'objs' : function(){
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var objectifs = Objectifs.find().fetch();
            var objectifIn = [];
            var isIn = -1;

            for (var i = 0; i < objectifs.length; i++) {
                isIn = esp.objectifs.indexOf(objectifs[i]._id);
                if (isIn != -1) {
                    objectifIn.push(objectifs[i]);
                }
            }
            return objectifIn;
        }
   } 
});

Template.addContexte.helpers({
    'contextes' : function(){
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var contextes = Contexte.find().fetch();
            var contexteIn = [];
            var isIn = -1;

            for (var i = 0; i < contextes.length; i++) {
                isIn = esp.contexte.indexOf(contextes[i]._id);
                if (isIn != -1) {
                    contexteIn.push(contextes[i]);
                }
            }
            return contexteIn;
        }
   } 
});

Template.addEnjeux.helpers({
    'enjs': function() {
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var enjeux = Enjeux.find().fetch();
            var enjeuIn = [];
            var isIn = -1;

            for (var i = 0; i < enjeux.length; i++) {
                isIn = esp.enjeux.indexOf(enjeux[i]._id);
                if (isIn != -1) {
                    enjeuIn.push(enjeux[i]);
                }
            }
            return enjeuIn;
        }
    }
});

Template.addPlanning.helpers({
    'plannings': function() {
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var planning = Planning.find().fetch();
            var planningIn = [];
            var isIn = -1;

            for (var i = 0; i < planning.length; i++) {
                isIn = esp.planning.indexOf(planning[i]._id);
                if (isIn != -1) {
                    planningIn.push(planning[i]);
                }
            }
            return planningIn;
        }
    }
});

Template.addActeurProjet.helpers({
    'actprojs': function() {
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var au = ActeurProjet.find().fetch();
            var auIn = [];
            var isIn = -1;

            for (var i = 0; i < au.length; i++) {
                isIn = esp.acteurProjet.indexOf(au[i]._id);
                if (isIn != -1) {
                    auIn.push(au[i]);
                }
            }
            return auIn;
        }
    }
});
Template.addActeurUsager.helpers({
    'actusags': function() {
        var id_esp = Session.get('id_esp');
        if (id_esp) {
            var esp = Esp.findOne({
                _id: id_esp
            });
            if(!esp){
              return null;
            }
            var acteurUsager = ActeurUsager.find().fetch();
            var auIn = [];
            var isIn = -1;

            for (var i = 0; i < acteurUsager.length; i++) {
                isIn = esp.acteurUsager.indexOf(acteurUsager[i]._id);
                if (isIn != -1) {
                    auIn.push(acteurUsager[i]);
                }
            }
            return auIn;
        }
    }
});



Template.inputacteurproj.helpers({
  'typeActeurs' : function(){
    return TypeActeur.find();
  }
});

Template.optionActeur.helpers({
  'acteurProjet' : function(){
    var acteurP = Template.parentData(1);
    return ActeurProjet.findOne({_id: acteurP._id});
  }
});

