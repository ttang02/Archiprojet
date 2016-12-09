Template.inputreg.events({
    'focus .reg': function(event) {
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        var reg = crt.reglementaire;
        if (this._id === reg[reg.length - 1]) {
            Meteor.call('addReglementaireEmpty', function(err, data) {
                Meteor.call('addReglementaireToCrt', idCrt, data);
            });
        }
    }
});

Template.inputsecu.events({
    'focus .secu': function(event) {
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        var secu = crt.securite;
        if (this._id === secu[secu.length - 1]) {
            Meteor.call('addSecuriteEmpty', function(err, data) {
                Meteor.call('addSecuriteToCrt', idCrt, data);
            });
        }
    }
});

Template.inputDepen.events({
    'focus .si': function(event) {
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        var dep = crt.dependance;
        if (this._id === dep[dep.length - 1]) {
            Meteor.call('addDependanceEmpty', function(err, data) {
                Meteor.call('addDependanceToCrt', idCrt, data);
            });
        }
    }
});

Template.inputpdt.events({
    'focus .nom': function(event) {
        var idCrt = Session.get('id_cont');
        var crt = Crt.findOne({
            _id: idCrt
        });
        var pdt = crt.postedetravail;
        if (this._id === pdt[pdt.length - 1]) {
            Meteor.call('addPdTEmpty', function(err, data) {
                Meteor.call('addPdTToCrt', idCrt, data);
            });
        }
    },

});

Template.addCRT.events({
    'click #addCrt': function() {
        event.preventDefault();
        var crt = Crt.findOne({
            _id: Session.get('id_cont')
        });
        if (!crt) {
            return null;
        }
        var reglementaire = crt.reglementaire;
        var securite = crt.securite;
        var dependance = crt.dependance;
        var volumetrie = crt.volumetrie;
        var hebergement = crt.hebergement;
        var postedetravail = crt.postedetravail;

        //Reglementaire 
        for (var i = 0; i < reglementaire.length; i++) {
            var id = reglementaire[i];
            var name = $('#' + id + '> .finput > [name="reg"]').val();
            if (name === "") {
                Meteor.call('deleteReglementaire', id);
            }
            else {
                Meteor.call('updateReglementaire', id, name);
            }
        }
        //Securite
        for (var i = 0; i < securite.length; i++) {
            var id = securite[i];
            var name = $('#' + id + '> .finput > [name="secu"]').val();
            if (name === "") {
                Meteor.call('deleteSecurite', id);
            }
            else {
                Meteor.call('updateSecurite', id, name);
            }
        }
        //Dependance
        for (var i = 0; i < dependance.length; i++) {
            var id = dependance[i];
            var si = $('#' + id + '> .finput > input[name="si"]').val();
            var consommateur = $('#' + id + '> .finput > input[name="consommateur"]').is(':checked') ? true : false;
            var fournisseur = $('#' + id + '> .finput > input[name="fournisseur"]').is(':checked') ? true : false;
            if (name === "") {
                Meteor.call('deleteDependance', id);
            }
            else {
                Meteor.call('updateDependance', id, si, consommateur, fournisseur);
            }
        }
        //Volumetrie
        //Vol Données

        var vol = Volumetrie.findOne({
            _id: volumetrie
        });
        if (vol) {
            var volD = VolDonnee.findOne({
                _id: vol.volDonnee
            });
            var volF = VolFichier.findOne({
                _id: vol.volFichier
            });
            var rV = RedVol.findOne({
                _id: vol.redVol
            });
            if (volD && volF && rV) {

                var d1 = Number($('#' + volD._id + '> .fc > .finput > input[name="d1"]').val());
                var d2 = Number($('#' + volD._id + '> .fc > .finput > input[name="d2"]').val());
                var d3 = Number($('#' + volD._id + '> .fc > .finput > input[name="d3"]').val());
                var d4 = Number($('#' + volD._id + '> .fc > .finput > input[name="d4"]').val());

                if (d1 !== 0 && d2 !== 0 && d3 !== 0 && d4 !== 0) {
                    Meteor.call('updateVolDonneEmpty', volD._id, d1, d2, d3, d4);
                }

                //Vol Fichiers
                var f1 = Number($('#' + volF._id + '> .fc > .finput > input[name="f1"]').val());
                var f2 = Number($('#' + volF._id + '> .fc > .finput > input[name="f2"]').val());
                var f3 = Number($('#' + volF._id + '> .fc > .finput > input[name="f3"]').val());
                var f4 = Number($('#' + volF._id + '> .fc > .finput > input[name="f4"]').val());
                var f5 = Number($('#' + volF._id + '> .fc > .finput > input[name="f5"]').val());

                if (f1 !== 0 && f2 !== 0 && f3 !== 0 && f4 !== 0 && f5 !== 0) {
                    Meteor.call('updateVolFichier', volF._id, f1, f2, f3, d1, d2);
                }
                //RedVol
                var c1 = $('#' + rV._id + '> .fc >.finput > input[name="c1"]').val();
                var c2 = $('#' + rV._id + '> .fc > .finput > input[name="c2"]').val();

                if ((c1 === "oui" || c1 === "non") && (c2 === "oui" || c2 === "non")) {
                    Meteor.call('updateRedVol', rV._id, c1, c2);
                }
            }
        }

        //Poste de travail 
        for (var i = 0; i < postedetravail.length; i++) {
            var id = postedetravail[i];
            var valueType = $(' #' + id + '> .finput > .select-wrapper > [name="selectPDT"]').val();
            var name = $('#' + id + '> .finput > input[name="nom"]').val();
            if (name === "") {
                Meteor.call('deletePdT', id);
            }
            else {
                Meteor.call('updatePdT', id, valueType, name);
            }
        }
        Router.go('home');
    },
    'click #addCrtPrev': function() {
        event.preventDefault();
        var crt = Crt.findOne({
            _id: Session.get('id_cont')
        });
        if (!crt) {
            return null;
        }
        var reglementaire = crt.reglementaire;
        var securite = crt.securite;
        var dependance = crt.dependance;
        var volumetrie = crt.volumetrie;
        var hebergement = crt.hebergement;
        var postedetravail = crt.postedetravail;

        //Reglementaire 
        for (var i = 0; i < reglementaire.length; i++) {
            var id = reglementaire[i];
            var name = $('#' + id + '> .finput > [name="reg"]').val();
            if (name === "") {
                Meteor.call('deleteReglementaire', id);
            }
            else {
                Meteor.call('updateReglementaire', id, name);
            }
        }
        //Securite
        for (var i = 0; i < securite.length; i++) {
            var id = securite[i];
            var name = $('#' + id + '> .finput > [name="secu"]').val();
            if (name === "") {
                Meteor.call('deleteSecurite', id);
            }
            else {
                Meteor.call('updateSecurite', id, name);
            }
        }
        //Dependance
        for (var i = 0; i < dependance.length; i++) {
            var id = dependance[i];
            var si = $('#' + id + '> .finput > input[name="si"]').val();
            var consommateur = $('#' + id + '> .finput > input[name="consommateur"]').is(':checked') ? true : false;
            var fournisseur = $('#' + id + '> .finput > input[name="fournisseur"]').is(':checked') ? true : false;
            if (name === "") {
                Meteor.call('deleteDependance', id);
            }
            else {
                Meteor.call('updateDependance', id, si, consommateur, fournisseur);
            }
        }
        //Volumetrie
        //Vol Données

        var vol = Volumetrie.findOne({
            _id: volumetrie
        });
        if (vol) {
            var volD = VolDonnee.findOne({
                _id: vol.volDonnee
            });
            var volF = VolFichier.findOne({
                _id: vol.volFichier
            });
            var rV = RedVol.findOne({
                _id: vol.redVol
            });
            if (volD && volF && rV) {

                var d1 = Number($('#' + volD._id + '> .fc > .finput > input[name="d1"]').val());
                var d2 = Number($('#' + volD._id + '> .fc > .finput > input[name="d2"]').val());
                var d3 = Number($('#' + volD._id + '> .fc > .finput > input[name="d3"]').val());
                var d4 = Number($('#' + volD._id + '> .fc > .finput > input[name="d4"]').val());

                if (d1 !== 0 && d2 !== 0 && d3 !== 0 && d4 !== 0) {
                    Meteor.call('updateVolDonneEmpty', volD._id, d1, d2, d3, d4);
                }

                //Vol Fichiers
                var f1 = Number($('#' + volF._id + '> .fc > .finput > input[name="f1"]').val());
                var f2 = Number($('#' + volF._id + '> .fc > .finput > input[name="f2"]').val());
                var f3 = Number($('#' + volF._id + '> .fc > .finput > input[name="f3"]').val());
                var f4 = Number($('#' + volF._id + '> .fc > .finput > input[name="f4"]').val());
                var f5 = Number($('#' + volF._id + '> .fc > .finput > input[name="f5"]').val());

                if (f1 !== 0 && f2 !== 0 && f3 !== 0 && f4 !== 0 && f5 !== 0) {
                    Meteor.call('updateVolFichier', volF._id, f1, f2, f3, d1, d2);
                }
                //RedVol
                var c1 = $('#' + rV._id + '> .fc >.finput > input[name="c1"]').val();
                var c2 = $('#' + rV._id + '> .fc > .finput > input[name="c2"]').val();

                if ((c1 === "oui" || c1 === "non") && (c2 === "oui" || c2 === "non")) {
                    Meteor.call('updateRedVol', rV._id, c1, c2);
                }
            }
        }

        //Poste de travail 
        for (var i = 0; i < postedetravail.length; i++) {
            var id = postedetravail[i];
            var valueType = $('#' + id + '> .finput > [name="selectPDT"]').val();
            var name = $('#' + id + '> .finput > input[name="nom"]').val();
            if (name === "") {
                Meteor.call('deletePdT', id);
            }
            else {
                Meteor.call('updatePdT', id, valueType, name);
            }
        }
        //FSD
        var idFsd = Session.get('id_fonc');
        var fsd = Fsd.findOne({
            _id: idFsd
        });
        //FoncMetier
        if (fsd.foncMetier.length < 1)
            Meteor.call('addFoncMetierEmpty', function(err, data) {
                Meteor.call('addFMToFsd', idFsd, data);
            });
        //DonnesMetier
        if (fsd.donnMetier.length < 1)
            Meteor.call('addDonnesMetierEmpty', function(err, data) {
                Meteor.call('addDMToFsd', idFsd, data);
            });
        //RefDonnnes
        if (fsd.refDonnees.length < 1)
            Meteor.call('addRefDonneesEmpty', function(err, data) {
                Meteor.call('addRDToFsd', idFsd, data);
            });
        //PJMetier
        if (fsd.pjMetier.length < 1)
            Meteor.call('addPjMetierEmpty', function(err, data) {
                Meteor.call('addPjToFsd', idFsd, data);
            });
        //Service Connexes
        if (fsd.serviceConnexe.length < 1)
            Meteor.call('addServiceConnexeEmpty', function(err, data) {
                Meteor.call('addServiceConnexeToFsd', idFsd, data);
            });
        Router.go('fonc');
    },
    'click #addCrtNext': function() {
        event.preventDefault();
        var crt = Crt.findOne({
            _id: Session.get('id_cont')
        });
        if (!crt) {
            return null;
        }
        var reglementaire = crt.reglementaire;
        var securite = crt.securite;
        var dependance = crt.dependance;
        var volumetrie = crt.volumetrie;
        var hebergement = crt.hebergement;
        var postedetravail = crt.postedetravail;

        //Reglementaire 
        for (var i = 0; i < reglementaire.length; i++) {
            var id = reglementaire[i];
            var name = $('#' + id + '> .finput > [name="reg"]').val();
            if (name === "") {
                Meteor.call('deleteReglementaire', id);
            }
            else {
                Meteor.call('updateReglementaire', id, name);
            }
        }
        //Securite
        for (var i = 0; i < securite.length; i++) {
            var id = securite[i];
            var name = $('#' + id + '> .finput > [name="secu"]').val();
            if (name === "") {
                Meteor.call('deleteSecurite', id);
            }
            else {
                Meteor.call('updateSecurite', id, name);
            }
        }
        //Dependance
        for (var i = 0; i < dependance.length; i++) {
            var id = dependance[i];
            var si = $('#' + id + '> .finput > input[name="si"]').val();
            var consommateur = $('#' + id + '> .finput > input[name="consommateur"]').is(':checked') ? true : false;
            var fournisseur = $('#' + id + '> .finput > input[name="fournisseur"]').is(':checked') ? true : false;
            if (name === "") {
                Meteor.call('deleteDependance', id);
            }
            else {
                Meteor.call('updateDependance', id, si, consommateur, fournisseur);
            }
        }
        //Volumetrie
        //Vol Données

        var vol = Volumetrie.findOne({
            _id: volumetrie
        });
        if (vol) {
            var volD = VolDonnee.findOne({
                _id: vol.volDonnee
            });
            var volF = VolFichier.findOne({
                _id: vol.volFichier
            });
            var rV = RedVol.findOne({
                _id: vol.redVol
            });
            if (volD && volF && rV) {

                var d1 = Number($('#' + volD._id + '> .fc > .finput > input[name="d1"]').val());
                var d2 = Number($('#' + volD._id + '> .fc > .finput > input[name="d2"]').val());
                var d3 = Number($('#' + volD._id + '> .fc > .finput > input[name="d3"]').val());
                var d4 = Number($('#' + volD._id + '> .fc > .finput > input[name="d4"]').val());

                if (d1 !== 0 && d2 !== 0 && d3 !== 0 && d4 !== 0) {
                    Meteor.call('updateVolDonneEmpty', volD._id, d1, d2, d3, d4);
                }

                //Vol Fichiers
                var f1 = Number($('#' + volF._id + '> .fc > .finput > input[name="f1"]').val());
                var f2 = Number($('#' + volF._id + '> .fc > .finput > input[name="f2"]').val());
                var f3 = Number($('#' + volF._id + '> .fc > .finput > input[name="f3"]').val());

                if (f1 !== 0 && f2 !== 0 && f3 !== 0 && f4 !== 0 && f5 !== 0) {
                    Meteor.call('updateVolFichier', volF._id, f1, f2, f3, d1, d2);
                }
                //RedVol
                var c1 = $('#' + rV._id + '> .fc >.finput > input[name="c1"]').val();
                var c2 = $('#' + rV._id + '> .fc > .finput > input[name="c2"]').val();

                if ((c1 === "oui" || c1 === "non") && (c2 === "oui" || c2 === "non")) {
                    Meteor.call('updateRedVol', rV._id, c1, c2);
                }
            }
        }

        //Poste de travail 
        for (var i = 0; i < postedetravail.length; i++) {
            var id = postedetravail[i];
            var valueType = $(' #' + id + '> .finput > .select-wrapper > [name="selectPDT"]').val();
            var name = $('#' + id + '> .finput > input[name="nom"]').val();
            if (name === "") {
                Meteor.call('deletePdT', id);
            }
            else {
                Meteor.call('updatePdT', id, valueType, name);
            }
        }
        //ENF
        var idEsp = Session.get('id_enf');
        var enf = Enf.findOne({
            _id: idEsp
        });

        var critExploi = CritExploi.findOne({
            _id: enf.critExploi
        });
        if (critExploi.batchAppl.length < 1) {
            Meteor.call('addBatchAppliEmpty', function(err, data) {
                Meteor.call('addBatchToCritExploi', critExploi._id, data);
            });
        }
        Router.go('enf');
    }
});
