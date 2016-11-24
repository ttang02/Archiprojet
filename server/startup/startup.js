Meteor.startup(function(){
   if(Roles.find().count() === 0) {
        Roles.insert({displayName : 'attente'});
        Roles.insert({displayName : 'contributeur'});
        Roles.insert({displayName : 'admin'});
   }
   if(TypeActeur.find().count() === 0){
       TypeActeur.insert({name : 'MITECH'});
       TypeActeur.insert({name : 'MIPIL'});
       TypeActeur.insert({name : 'MOA'});
       TypeActeur.insert({name : 'AMOA'});
       TypeActeur.insert({name : 'MOE'});
       TypeActeur.insert({name : 'AMOE'});
       TypeActeur.insert({name : 'PRESTA'});
       TypeActeur.insert({name : 'INTEG'});
   }
   if(Meteor.users.find().count() === 0){
        var data = {
		            username : "dsimitech",
		            password : "Mitech2016!",
		            profile : {
		                firstname : "",
		                lastname : "",
		                email : "",
		                role : "admin",
		                dats : []
		            }
		};
	    Accounts.createUser(data);
   }
   if(TypePostdTravail.find().count() === 0){
       TypePostdTravail.insert({name : 'Bureautique'});
       TypePostdTravail.insert({name : 'Navigateur'});
       TypePostdTravail.insert({name : 'Périphérique'});
       TypePostdTravail.insert({name : 'Système exploitation'});
       TypePostdTravail.insert({name : 'Autre'});
   }
   if(TypecritExigence.find().count() === 0){
       TypecritExigence.insert({name : 'Exigence intégrité'});
       TypecritExigence.insert({name : 'Exigence confidentialité'});
       TypecritExigence.insert({name : 'Exigence preuve'});
       TypecritExigence.insert({name : 'Exigence traçabilité'});
   }
   if(CritTypePerfPeriode.find().count() === 0){
       CritTypePerfPeriode.insert({name : 'Standard'});
       CritTypePerfPeriode.insert({name : 'Critique'});
       CritTypePerfPeriode.insert({name : 'Charge'});
       
   }
   if(CritTypeAppMetier.find().count() === 0){
       CritTypeAppMetier.insert({name :"Plage Services intogérance"});
       CritTypeAppMetier.insert({name :"Perte de Données Maximale Admissible"});
       CritTypeAppMetier.insert({name :"Durée Maximale d'interruption Admissible"});
   }
   if(CritTypeTempsReponse.find().count() === 0){
       CritTypeTempsReponse.insert({name : "Affichage page d'accueil"});
       CritTypeTempsReponse.insert({name : "Affichage page simple"});
       CritTypeTempsReponse.insert({name : "Affichage page complexe"});
       CritTypeTempsReponse.insert({name : "Traitement requête simple"});
       CritTypeTempsReponse.insert({name : "Traitement requête complexe"});
   }
   if(TypecritImpact.find().count() === 0){
       TypecritImpact.insert({name : "Impact Métier"});
       TypecritImpact.insert({name : "Impact Charge"});
   }
   
    
});