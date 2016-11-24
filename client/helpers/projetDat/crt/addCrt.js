Template.addReglementaire.helpers({
    'reglementaires': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var reglementaire = Reglementaire.find().fetch();
            var rgIn = [];
            var isIn = -1;

            for (var i = 0; i < reglementaire.length; i++) {
                isIn = crt.reglementaire.indexOf(reglementaire[i]._id);
                if (isIn != -1) {
                    rgIn.push(reglementaire[i]);
                }
            }
            return rgIn;
        }
    }
});

Template.addSecurite.helpers({
    'secus': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var securite = Securite.find().fetch();
            var secuIn = [];
            var isIn = -1;

            for (var i = 0; i < securite.length; i++) {
                isIn = crt.securite.indexOf(securite[i]._id);
                if (isIn != -1) {
                    secuIn.push(securite[i]);
                }
            }
            return secuIn;
        }
    }
});

Template.addDependance.helpers({
    'depens': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var dependance = Dependance.find().fetch();
            var depIn = [];
            var isIn = -1;

            for (var i = 0; i < dependance.length; i++) {
                isIn = crt.dependance.indexOf(dependance[i]._id);
                if (isIn != -1) {
                    depIn.push(dependance[i]);
                }
            }
            return depIn;
        }
    }
});
//VOLUMETRIE DONNEE, FICHIER ET REDUCTION VOLUME
Template.addVolumetrie.helpers({
    'volds': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var idvolumetrie = crt.volumetrie;
            var volumetrie = Volumetrie.findOne({
                _id: idvolumetrie
            });
            return VolDonnee.findOne({
                _id: volumetrie.volDonnee
            });
        }
    },
    'volfs': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var idvolumetrie = crt.volumetrie;
            var volumetrie = Volumetrie.findOne({
                _id: idvolumetrie
            });
            return VolFichier.findOne({
                _id: volumetrie.volFichier
            });
        }
    },
    'redvs': function() {
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }
            var idvolumetrie = crt.volumetrie;
            var volumetrie = Volumetrie.findOne({
                _id: idvolumetrie
            });
            return RedVol.findOne({
                _id: volumetrie.redVol
            });
        }
    }
});

Template.addPostedeTravail.helpers({
   'pdts' : function(){
        var idCrt = Session.get('id_cont');
        if (idCrt) {
            var crt = Crt.findOne({
                _id: idCrt
            });
            if (!crt) {
                return null;
            }   
            var pdt = PostTravail.find().fetch();
            var depIn = [];
            var isIn = -1;

            for (var i = 0; i < pdt.length; i++) {
                isIn = crt.postedetravail.indexOf(pdt[i]._id);
                if (isIn != -1) {
                    depIn.push(pdt[i]);
                }
            }
            return depIn;
        } 
   }
});

Template.inputpdt.helpers({
  'typepdt' : function(){
    return TypePostdTravail.find();
  }
});

Template.optionpdt.helpers({
  'postedetravail' : function(){
    var pdt = Template.parentData(1);
    return PostTravail.findOne({_id: pdt._id});
  }
});
