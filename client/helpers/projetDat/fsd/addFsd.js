Template.addDonMetier.helpers({
    'dms': function() {
        var id_fsd = Session.get('id_fonc');
        if (id_fsd) {
            var fsd = Fsd.findOne({
                _id: id_fsd
            });
            if(!fsd){
              return null;
            }
            var donnMetier = DonMetier.find().fetch();
            var dmIn = [];
            var isIn = -1;

            for (var i = 0; i < donnMetier.length; i++) {
                isIn = fsd.donnMetier.indexOf(donnMetier[i]._id);
                if (isIn != -1) {
                    dmIn.push(donnMetier[i]);
                }
            }
            return dmIn;
        }
    }
});
Template.addFoncMetier.helpers({
    'fms': function() {
        var id_fsd = Session.get('id_fonc');
        if (id_fsd) {
            var fsd = Fsd.findOne({
                _id: id_fsd
            });
            if(!fsd){
              return null;
            }
            var foncMetier = FoncMetier.find().fetch();
            var fmIn = [];
            var isIn = -1;

            for (var i = 0; i < foncMetier.length; i++) {
                isIn = fsd.foncMetier.indexOf(foncMetier[i]._id);
                if (isIn != -1) {
                    fmIn.push(foncMetier[i]);
                }
            }
            return fmIn;
        }
    }
});

Template.addPjMetier.helpers({
    'pjs': function() {
        var id_fsd = Session.get('id_fonc');
        if (id_fsd) {
            var fsd = Fsd.findOne({
                _id: id_fsd
            });
            if(!fsd){
              return null;
            }
            var pjMetier = PjMetier.find().fetch();
            var pjIn = [];
            var isIn = -1;

            for (var i = 0; i < pjMetier.length; i++) {
                isIn = fsd.pjMetier.indexOf(pjMetier[i]._id);
                if (isIn != -1) {
                    pjIn.push(pjMetier[i]);
                }
            }
            return pjIn;
        }
    }
});

Template.addRefDonnees.helpers({
    'rds': function() {
        var id_fsd = Session.get('id_fonc');
        if (id_fsd) {
            var fsd = Fsd.findOne({
                _id: id_fsd
            });
            if(!fsd){
              return null;
            }
            var refDonnees = RefDonnees.find().fetch();
            var rdIn = [];
            var isIn = -1;

            for (var i = 0; i < refDonnees.length; i++) {
                isIn = fsd.refDonnees.indexOf(refDonnees[i]._id);
                if (isIn != -1) {
                    rdIn.push(refDonnees[i]);
                }
            }
            return rdIn;
        }
    }
});

Template.addServiceConnexe.helpers({
    'servicesconnexes': function() {
        var id_fsd = Session.get('id_fonc');
        if (id_fsd) {
            var fsd = Fsd.findOne({
                _id: id_fsd
            });
            if(!fsd){
              return null;
            }
            var serviceConnexe = ServiceConnexe.find().fetch();
            var scIn = [];
            var isIn = -1;

            for (var i = 0; i < serviceConnexe.length; i++) {
                isIn = fsd.serviceConnexe.indexOf(serviceConnexe[i]._id);
                if (isIn != -1) {
                    scIn.push(serviceConnexe[i]);
                }
            }
            return scIn;
        }
    }
});

