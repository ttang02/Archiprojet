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
    },
    'ficheacteurusager' : function(){
         var esp = Esp.findOne({
            _id: this.idEsp
        });
        if (!esp) {
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
    },
  
});

Template.ficheFsd.helpers({

  'fichefms' : function(){
    var fsd = Fsd.findOne({
        _id: this.idFsd
    });
    if (!fsd) {
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
  },
    'fmetier' : function(bo){
        if(bo == true){
            return "O";
        }
        else{
            return "X";
        }
    },
    'fichedms': function(){
        var fsd = Fsd.findOne({
        _id: this.idFsd
        });
        if (!fsd) {
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
    },
    'fichepjs' : function(){
        var fsd = Fsd.findOne({
        _id: this.idFsd
        });
        if (!fsd) {
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
    },
    'ficherefs' : function(){
        var fsd = Fsd.findOne({
        _id: this.idFsd
        });
        if (!fsd) {
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
    },
    'fichescs' : function(){
        var fsd = Fsd.findOne({
        _id: this.idFsd
        });
        if (!fsd) {
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
    },
});

Template.ficheCrt.helpers({
    'ficheregl' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'fichesec' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'fichedepend' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'boconfour' : function(bo){
        if(bo === true){
            return "O";
        }
        else{
            return "X";
        }
    },
    'fichevold' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'fichevolf' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'ficheredv' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    'redVolbool' : function(bo){
        if(bo === true){
            return "OUI";
        }
        else{
            return "NON";
        }
    },
    
    'fichepdt' : function(){
        var crt = Crt.findOne({
        _id: this.idCrt
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
    },
    
    'typepdt' : function(id){
        var typepdt = TypePostdTravail.findOne({_id : id});
        if(typepdt)
        return TypePostdTravail.name;
    },
    
});