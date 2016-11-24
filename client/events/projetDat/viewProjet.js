/*
Template.viewMoreProjet.events({
   'click a' : function(event){
        var idDat = this._id;
        var dat = Dat.findOne({_id : idDat});
        Session.set('id_dat' ,idDat);
        Session.set('id_esp' , dat.idEsp);
        Session.set('id_cont',dat.idCrt);
        Session.set('id_fonc',dat.idFsd);
	     Session.set('id_enf' ,dat.idEnf);
   } 
});
*/
Template.deleteProjet.events({
  'click .deleteProjet' : function(){
    Meteor.call('deleteDat',this._id);
  }
});
