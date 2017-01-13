//ENF

Template.inputcritExploiBatch.events({
    'focus .batch': function(event) {
        var idEnf = Session.get('id_enf');
        var enf = Enf.findOne({
            _id: idEnf
        });
        var critExploi = CritExploi.findOne({
            _id: enf.critExploi
        });
        var batchAppl = critExploi.batchAppl;
        if (this._id === batchAppl[batchAppl.length - 1]) {
            Meteor.call('addBatchAppliEmpty', function(err, data) {
                Meteor.call('addBatchToCritExploi', critExploi._id, data);
            });
        }
    }
});
Template.inputcritPerf.events({
    'keypress .standard' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   },
   'keypress .charge' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   } 
});


Template.addENF.events({
    'click #addEnf': function() {
        event.preventDefault();
        var enf = Enf.findOne({
            _id: Session.get('id_enf')
        });
        if (!enf) {
            return null;
        }
        var critSecurite = enf.critSecurite;
        var critDispo = enf.critDispo;
        var critPerformance = enf.critPerformance;
        var critExploi = enf.critExploi;

        //critSecurite
        var cs = CritSecurite.findOne({
            _id: critSecurite
        });
        //REUSSITE
        if (cs) {
            for (var i = 0; i < cs.exigence.length; i++) {
                var description = $('#' + cs.exigence[i] + '> .fc > .finput > input[name="description"]').val();

                Meteor.call('updatecritSecuExigence', cs.exigence[i], description);
            }
            var etude = $('#' + cs._id + '> .fc > .finput > input[name="etude"]').val();
            Meteor.call('updateCritSecurit', cs._id, etude);
        }
        //crit Dispo
        var dispo = CritDispo.findOne({
            _id: critDispo
        });
        if (dispo) {
            //Periode
            for (i = 0; i < dispo.periode.length; i++) {
                var debut = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="debut"]').val();
                var fin = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="fin"]').val();
                var nbu = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="nbu"]').val();
                var cht = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="cht"]').val();

                Meteor.call('updatecritDispoPeriode', dispo.periode[i], debut, fin, nbu, fin);
            }
            //description
            var description = $('#' + dispo._id + '> .fc > .finput > input[name="description"]').val();
            Meteor.call('updatecritDispo', dispo._id, description);

            for (i = 0; i < dispo.appmetier.length; i++) {
                var standard = $('#' + dispo.appmetier[i] + '> .fc > .finput > input[name="standard"]').val();
                var haute = $('#' + dispo.appmetier[i] + '> .fc > .finput > input[name="haute"]').val();

                Meteor.call('updatecritDispoAppMetier', dispo.appmetier[i], standard, haute);
            }

        }
        //crit Perf
        for (i = 0; i < critPerformance.length; i++) {
            var standard = $('#' + critPerformance[i] + '> .fc > .finput > input[name="standard"]').val();
            var charge = $('#' + critPerformance[i] + '> .fc > .finput > input[name="charge"]').val();

            Meteor.call('updateCritPerformance', critPerformance[i], standard, charge);
        }
        //crit Exploit
        var exploi = CritExploi.findOne({
            _id: critExploi
        });
        if (exploi) {
            var impact = exploi.impact;
            var batchAppl = exploi.batchAppl;

            for (i = 0; i < batchAppl.length; i++) {
                var batchInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="batch"]').val();
                var plageInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="plage"]').val();
                var frequenceInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="frequence"]').val();
                var impactMetierInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="impactMetier"]').val();
                var impactChargeInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="impactCharge"]').val();

                if (batchInput === "" && plageInput === "" && frequenceInput === "" && impactMetierInput === "" && impactChargeInput === "") {
                    Meteor.call('updateBatchToCritExploi', exploi._id, batchAppl[i]);
                }
                else {
                    Meteor.call('updateBatchAppli', batchAppl[i], batchInput, plageInput, frequenceInput, impactMetierInput, impactChargeInput);
                }
            }
            for (i = 0; i < impact.length; i++) {
                var descriptionInput = $('#' + impact[i] + '> .fc > .finput > input[name="description"]').val();

                Meteor.call('updatecritExploiImpact', impact[i], descriptionInput);
            }
        }
        Router.go('home');
    },
    'click #addEnfPrev': function() {
        event.preventDefault();
        var enf = Enf.findOne({
            _id: Session.get('id_enf')
        });
        if (!enf) {
            return null;
        }
        var critSecurite = enf.critSecurite;
        var critDispo = enf.critDispo;
        var critPerformance = enf.critPerformance;
        var critExploi = enf.critExploi;

        //critSecurite
        var cs = CritSecurite.findOne({
            _id: critSecurite
        });
        //REUSSITE
        if (cs) {
            for (var i = 0; i < cs.exigence.length; i++) {
                var description = $('#' + cs.exigence[i] + '> .fc > .finput > input[name="description"]').val();

                Meteor.call('updatecritSecuExigence', cs.exigence[i], description);
            }
            var etude = $('#' + cs._id + '> .fc > .finput > input[name="etude"]').val();
            Meteor.call('updateCritSecurit', cs._id, etude);
        }
        //crit Dispo
        var dispo = CritDispo.findOne({
            _id: critDispo
        });
        if (dispo) {
            //Periode
            for (i = 0; i < dispo.periode.length; i++) {
                var debut = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="debut"]').val();
                var fin = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="fin"]').val();
                var nbu = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="nbu"]').val();
                var cht = $('#' + dispo.periode[i] + '> .fc > .finput > input[name="cht"]').val();

                Meteor.call('updatecritDispoPeriode', dispo.periode[i], debut, fin, nbu, fin);
            }
            //description
            var description = $('#' + dispo._id + '> .fc > .finput > input[name="description"]').val();
            Meteor.call('updatecritDispo', dispo._id, description);

            for (i = 0; i < dispo.appmetier.length; i++) {
                var standard = $('#' + dispo.appmetier[i] + '> .fc > .finput > input[name="standard"]').val();
                var haute = $('#' + dispo.appmetier[i] + '> .fc > .finput > input[name="haute"]').val();

                Meteor.call('updatecritDispoAppMetier', dispo.appmetier[i], standard, haute);
            }

        }
        //crit Perf
        for (i = 0; i < critPerformance.length; i++) {
            var standard = $('#' + critPerformance[i] + '> .fc > .finput > input[name="standard"]').val();
            var charge = $('#' + critPerformance[i] + '> .fc > .finput > input[name="charge"]').val();

            Meteor.call('updateCritPerformance', critPerformance[i], standard, charge);
        }
        //crit Exploit
        var exploi = CritExploi.findOne({
            _id: critExploi
        });
        if (exploi) {
            var impact = exploi.impact;
            var batchAppl = exploi.batchAppl;

            for (i = 0; i < batchAppl.length; i++) {
                var batchInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="batch"]').val();
                var plageInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="plage"]').val();
                var frequenceInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="frequence"]').val();
                var impactMetierInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="impactMetier"]').val();
                var impactChargeInput = $('#' + batchAppl[i] + '> .fc > .finput > input[name="impactCharge"]').val();

                if (batchInput === "" && plageInput === "" && frequenceInput === "" && impactMetierInput === "" && impactChargeInput === "") {
                    Meteor.call('updateBatchToCritExploi', exploi._id, batchAppl[i]);
                }
                else {
                    Meteor.call('updateBatchAppli', batchAppl[i], batchInput, plageInput, frequenceInput, impactMetierInput, impactChargeInput);
                }
            }
            for (i = 0; i < impact.length; i++) {
                var descriptionInput = $('#' + impact[i] + '> .fc > .finput > input[name="description"]').val();

                Meteor.call('updatecritExploiImpact', impact[i], descriptionInput);
            }
        }

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

        Router.go('crt');
    }


});
