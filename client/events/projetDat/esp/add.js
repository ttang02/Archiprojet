//inputObj
//Event pour ajouter un input lorsqu'on clique sur le dernier input
Template.inputobj.events({
    'focus .obj': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var objectifs = esp.objectifs;
        if (this._id === objectifs[objectifs.length - 1]) {
            Meteor.call('addObjectifEmpty', function(err, data) {
                Meteor.call('addObjToEsp', idEsp, data);
            });
        }
    }
});
//inputContexte
//Event pour ajouter un input lorsqu'on clique sur le dernier input
Template.inputcontexte.events({
    'focus .contexte': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var contexte = esp.contexte;
        if (this._id === contexte[contexte.length - 1]) {
            Meteor.call('addContexteEmpty', function(err, data) {
                Meteor.call('addContexteToEsp', idEsp, data);
            });
        }
    }
});

//inputenj
//Event pour ajouter un input lorsqu'on clique sur le dernier input
Template.inputenj.events({
    'focus .enjeux': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var enjeux = esp.enjeux;
        if (this._id === enjeux[enjeux.length - 1]) {
            Meteor.call('addEnjeuxEmpty', function(err, data) {
                Meteor.call('addEnjToEsp', idEsp, data);
            });
        }
    }
});
//inputplanning
//Event pour ajouter un input lorsqu'on clique sur le dernier input
Template.inputplanning.events({
    'focus .commentaire': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var planning = esp.planning;
        if (this._id === planning[planning.length - 1]) {
            Meteor.call('addPlanningEmpty', function(err, data) {
                Meteor.call('addPlanningToEsp', idEsp, data);
            });
        }
    }
});
//inputacteurproj
//Event pour ajouter un input lorsqu'on clique sur le dernier input

Template.inputacteurproj.events({
    'focus .entite': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var acteurProjet = esp.acteurProjet;
        if (this._id === acteurProjet[acteurProjet.length - 1]) {
            Meteor.call('addActeurProjetEmpty', function(err, data) {
                Meteor.call('addAPToEsp', idEsp, data);
            });
        }
    },
   /* 'change select' : function(){
        var esp = Esp.findOne({
            _id: Session.get('id_esp')
        });
        if (!esp) {
            return null;
        }
         var actP = esp.acteurProjet;
        for (var i = 0; i < actP.length; i++) {
            var idActPCase = actP[i];
            console.log(idActPCase);
            var valueType = $(' #' + idActPCase + '> .finput > .select-wrapper > [name="selectAP"]').val();
            console.log(valueType);
        }
    }*/
});
/*************************************************************************************************************/

Template.inputusag.events({
    'focus .acteurUsager': function(event) {
        var idEsp = Session.get('id_esp');
        var esp = Esp.findOne({
            _id: idEsp
        });
        var acteurUsager = esp.acteurUsager;
        if (this._id === acteurUsager[acteurUsager.length - 1]) {
            Meteor.call('addActeurUsagerEmpty', function(err, data) {
                Meteor.call('addAUToEsp', idEsp, data);
            });
        }
    },
    //keypress interdire la saisie des ascii
   'keypress .min' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   },
    'keypress .rie' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   },
    'keypress .pub' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   },
    'keypress .ext' : function(event){
		if((event.charCode < 48 || event.charCode > 57)) return false;
   }
});


Template.addESP.events({
    "click #addEsp": function(event) {
        // Prevent default browser form submit
        event.preventDefault();
        var esp = Esp.findOne({
            _id: Session.get('id_esp')
        });
        if (!esp) {
            return null;
        }

        var obj = esp.objectifs;
        var enj = esp.enjeux;
        var contexte = esp.contexte;
        var planning = esp.planning;
        var actP = esp.acteurProjet;
        var actU = esp.acteurUsager;

        var nomProjetInput = $('.nomprojetitem > .finput > input[name="nomProjet"]').val();
        if (nomProjetInput !== "") {
            Meteor.call('addNomProjetToEsp', esp._id, nomProjetInput);
        }

        //OBJECTIF
        for (var i = 0; i < obj.length; i++) {
            var idObjCase = obj[i];
            //afficher valeur de la case

            var valueInput = $('#' + idObjCase + '> .finput > [name="obj"]').val();
            if (("" === valueInput)) {
                Meteor.call('deleteObjectif', idObjCase);
            }
            else {
                Meteor.call('updateObjectif', idObjCase, valueInput);
            }
        }
        //ENJEUX
        for (var i = 0; i < enj.length; i++) {
            var idEnjCase = enj[i];
            var valueEnjInput = $('#' + idEnjCase + '> .finput > [name="enj"]').val();
            if (("" === valueEnjInput)) {
                Meteor.call('deleteEnjeux', idEnjCase);
            }
            else {
                Meteor.call('updateEnjeux', idEnjCase, valueEnjInput);
            }
        }
        //Contexte
        for (var i = 0; i < contexte.length; i++) {
            var idContexteCase = contexte[i];
            var valueContexteInput = $('#' + idContexteCase + '> .finput > [name="contexte"]').val();
            if (("" === valueContexteInput)) {
                Meteor.call('deleteContexte', idContexteCase);
            }
            else {
                Meteor.call('updateContexte', idContexteCase, valueContexteInput);
            }
        }
        //Planning projet
        for (var i = 0; i < planning.length; i++) {
            var idPlanningCase = planning[i];
            var version = $('#' + idPlanningCase + '> .finput > input[name="version"]').val();
            var date = $('#' + idPlanningCase + '> .finput > input[name="date"]').val();
            var commentaire = $('#' + idPlanningCase + '> .finput > input[name="commentaire"]').val();
            
            console.log(date);
            
            
            if (("" === version) && date === "" && commentaire === "") {
                Meteor.call('deletePlanning', idPlanningCase);
            }
            else {
                Meteor.call('updatePlanning', idPlanningCase, version, date, commentaire);
            }
        }
        //Acteur Projet
        for (var i = 0; i < actP.length; i++) {
            var idActPCase = actP[i];
            var valueType = $(' #' + idActPCase + '> .finput > .select-wrapper > [name="selectAP"]').val();
            var nom = $('#' + idActPCase + '> .finput > input[name="nom"]').val();
            var fonction = $('#' + idActPCase + '> .finput > input[name="fonction"]').val();
            var entite = $('#' + idActPCase + '> .finput > input[name="entite"]').val();
            if (("" === nom) && fonction === "" && entite === "" ) {
                Meteor.call('deleteActeurProjet', idActPCase);
            }
            else {
                Meteor.call('updateActeurProjet', idActPCase, nom, fonction, entite, valueType);
            }
        }
        //Acteur Usager
        for (var i = 0; i < actU.length; i++) {
            var idActUCase = actU[i];
            var acteur = $('#' + idActUCase + '> .finput > [name="acteur"]').val();
            var min = $('#' + idActUCase + '> .finput > input[name="min"]').val();
            var rie = $('#' + idActUCase + '> .finput > input[name="rie"]').val();
            var ext = $('#' + idActUCase + '> .finput > input[name="ext"]').val();
            var pub = $('#' + idActUCase + '> .finput > input[name="pub"]').val();
            if (("" === acteur)) {
                Meteor.call('deleteActeurUsager', idActUCase);
            }
            Meteor.call('updateActeurUsager', idActUCase, acteur, min, rie, ext, pub);
        }
        Router.go("home");
    },
    "click #addEspNext": function(event) {
        // Prevent default browser form submit
        event.preventDefault();
        var esp = Esp.findOne({
            _id: Session.get('id_esp')
        });
        if (!esp) {
            return null;
        }

        var obj = esp.objectifs;
        var enj = esp.enjeux;
        var contexte = esp.contexte;
        var planning = esp.planning;
        var actP = esp.acteurProjet;
        var actU = esp.acteurUsager;

        var nomProjetInput = $('.nomprojetitem > .finput > input[name="nomProjet"]').val();
        if (nomProjetInput !== "") {
            Meteor.call('addNomProjetToEsp', esp._id, nomProjetInput);
        }

        //OBJECTIF
        for (var i = 0; i < obj.length; i++) {
            var idObjCase = obj[i];
            //afficher valeur de la case

            var valueInput = $('#' + idObjCase + '> .finput > [name="obj"]').val();
            if (("" === valueInput)) {
                Meteor.call('deleteObjectif', idObjCase);
            }
            else {
                Meteor.call('updateObjectif', idObjCase, valueInput);
            }
        }
        //ENJEUX
        for (var i = 0; i < enj.length; i++) {
            var idEnjCase = enj[i];
            var valueEnjInput = $('#' + idEnjCase + '> .finput > [name="enj"]').val();
            if (("" === valueEnjInput)) {
                Meteor.call('deleteEnjeux', idEnjCase);
            }
            else {
                Meteor.call('updateEnjeux', idEnjCase, valueEnjInput);
            }
        }
        //Contexte
        for (var i = 0; i < contexte.length; i++) {
            var idContexteCase = contexte[i];
            var valueContexteInput = $('#' + idContexteCase + '> .finput > [name="contexte"]').val();
            if (("" === valueContexteInput)) {
                Meteor.call('deleteContexte', idContexteCase);
            }
            else {
                Meteor.call('updateContexte', idContexteCase, valueContexteInput);
            }
        }
        //Planning projet
        for (var i = 0; i < planning.length; i++) {
            var idPlanningCase = planning[i];
            var version = $('#' + idPlanningCase + '> .finput > input[name="version"]').val();
            var date = $('#' + idPlanningCase + '> .finput > input[name="date"]').val();
            var commentaire = $('#' + idPlanningCase + '> .finput > input[name="commentaire"]').val();

            if (("" === version) && date === "" && commentaire === "") {
                Meteor.call('deletePlanning', idPlanningCase);
            }
            else {
                Meteor.call('updatePlanning', idPlanningCase, version, date, commentaire);
            }
        }
        //Acteur Projet
        for (var i = 0; i < actP.length; i++) {
            var idActPCase = actP[i];
            var valueType = $(' #' + idActPCase + '> .finput > .select-wrapper > [name="selectAP"]').val();
            var nom = $('#' + idActPCase + '> .finput > input[name="nom"]').val();
            var fonction = $('#' + idActPCase + '> .finput > input[name="fonction"]').val();
            var entite = $('#' + idActPCase + '> .finput > input[name="entite"]').val();
            if (("" === nom) && fonction === "" && entite === "") {
                Meteor.call('deleteActeurProjet', idActPCase);
            }
            else {
                Meteor.call('updateActeurProjet', idActPCase, nom, fonction, entite, valueType);
            }
        }
        //Acteur Usager
        for (var i = 0; i < actU.length; i++) {
            var idActUCase = actU[i];
            var acteur = $('#' + idActUCase + '> .finput > [name="acteur"]').val();
            console.log(acteur);
            var min = $('#' + idActUCase + '> .finput > input[name="min"]').val();
            var rie = $('#' + idActUCase + '> .finput > input[name="rie"]').val();
            var ext = $('#' + idActUCase + '> .finput > input[name="ext"]').val();
            var pub = $('#' + idActUCase + '> .finput > input[name="pub"]').val();
            if (("" === acteur)) {
                Meteor.call('deleteActeurUsager', idActUCase);
            }
            Meteor.call('updateActeurUsager', idActUCase, acteur, min, rie, ext, pub);
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
        Router.go("fonc");
    }
});
