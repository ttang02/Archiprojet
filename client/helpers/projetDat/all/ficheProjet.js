Template.ficheProjet.helpers({
    'projets': function() {
        return Dat.find();
    }
});

Template.ficheDetail.helpers({
    'nameP': function() {
        return Dat.findOne({
            _id: Session.get('id_projet')
        });
    }
});

Template.ficheEsp.helpers({
    'nomprojet': function() {
        return Dat.findOne({
            _id: Session.get('id_projet')
        });
    },
    'ficheObjectifs': function() {
        var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
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
    },

    'ficheContexte': function() {
        var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
            return null;
        }
        var contexte = Contexte.find().fetch();
        var contexteIn = [];
        var isIn = -1;

        for (var i = 0; i < contexte.length; i++) {
            isIn = esp.contexte.indexOf(contexte[i]._id);
            if (isIn != -1) {
                contexteIn.push(contexte[i]);
            }
        }
        return contexteIn;
    },
    'ficheEnjeux': function() {
        var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
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
    },
    'fichePlanning': function() {
        var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
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
    },
    'ficheacteurprojet': function() {
        var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
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
    },
    'typeacteur' : function(id){
        var typeacteur = TypeActeur.findOne({_id : id});
        if(typeacteur)
        return typeacteur.name;
    }
});
