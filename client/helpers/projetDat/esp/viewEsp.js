Template.viewESP.helpers({
    
});

Template.viewObjectif.helpers({
   'espObjectifs' : function(){
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

Template.viewContexte.helpers({
   'espContexte' : function(){
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

Template.viewEnjeux.helpers({
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