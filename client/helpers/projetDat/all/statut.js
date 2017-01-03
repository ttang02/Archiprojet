Template.crt.helpers({
   'statut' : function(){
       var crt = Crt.findOne({_id : this.idCrt});
       if(!crt){
           return null;
       }
       var dependance = crt.dependance;
       var hebergement = crt.hebergement;
       var postedetravail = crt.postedetravail;
       var reglementaire = crt.reglementaire;
       var securite = crt.securite;
       var volumetrie = crt.volumetrie;
       
       if(reglementaire.length === 0 &&
        hebergement.length === 0 &&
        postedetravail.length === 0 &&
        dependance.length === 0 &&
        securite.length === 0){
            return 3;
        }
        else if(reglementaire.length > 0 &&
        hebergement.length > 0 &&
        postedetravail.length > 0 &&
        dependance.length > 0 &&
        securite.length > 0){
            return 1;
        }
        else{
            return 2;
        }
   } 
});

Template.fsd.helpers({
    'statut' : function(){
        var fsd = Fsd.findOne({_id : this.idFsd});
        if(!fsd){
            return null;
        }
        var foncMetier = fsd.foncMetier;
        var donnMetier = fsd.donnMetier;
        var pjMetier = fsd.pjMetier;
        var refDonnees = fsd.refDonnees;
        var serviceConnexe = fsd.serviceConnexe;
        
        if(foncMetier.length === 0 &&
        donnMetier.length === 0 &&
        pjMetier.length === 0 &&
        refDonnees === 0 && 
        serviceConnexe === 0){
            return 3;
        }
        else if(foncMetier.length > 0 &&
        donnMetier.length > 0 &&
        pjMetier.length > 0 &&
        refDonnees > 0 && 
        serviceConnexe > 0){
            return 1;
        }
        else{
            return 2;
        }
    }
});

Template.esp.helpers({
   'statut' : function(){
       var esp = Esp.findOne({_id : this.idEsp});
       if(!esp){
           return null;
       }
       var acteurProjet = esp.acteurProjet;
       var acteurUsager = esp.acteurUsager;
       var contexte = esp.contexte;
       var enjeux = esp.enjeux;
       var nomProjet = esp.nomProjet;
       var objectifs = esp.objectifs;
       var planning = esp.planning;
       
       if(acteurProjet.length === 0 &&
        acteurUsager.length === 0 &&
        contexte.length === 0 &&
        enjeux.length === 0 &&
        nomProjet === "" &&
        objectifs.length === 0 &&
        planning.length === 0){
            return 3;
        }
        else if(acteurProjet.length > 0 &&
        acteurUsager.length > 0 &&
        contexte.length > 0 &&
        enjeux.length > 0 &&
        nomProjet != "" &&
        objectifs.length > 0 &&
        planning.length > 0){
            return 1;
        }
        else{
            return 2;
        }
   } 
});

Template.enf.helpers({
   'statut' : function(){
       var enf = Enf.findOne({_id : this.idEnf});
       if(!enf){
           return null;
       }
       var critDispo = enf.critDispo;
       var critExploi = enf.critExploi;
       var critPerformance = enf.critPerformance;
       var critSecurite = enf.critSecurite;
       
       if(critPerformance.length === 0){
           return 3;
       }
       else if(critPerformance.length > 0){
           return 1;
       }
       else{
           return 2;
       }
   } 
});