Template.enf.events({
   'click a' : function(){
      Session.set('id_dat', this._id);
      Session.set('id_enf', this.idEnf);
      Session.set('id_esp', this.idEsp);
      Session.set('id_cont', this.idCrt);
      Session.set('id_fonc', this.idFsd);
      
       var idEsp = Session.get('id_enf');
       var enf = Enf.findOne({_id : idEsp});
       
       var critExploi = CritExploi.findOne({
                _id : enf.critExploi
       });
       if(critExploi.batchAppl.length < 1){
           Meteor.call('addBatchAppliEmpty', function(err, data) {
            Meteor.call('addBatchToCritExploi', critExploi._id, data);
        });
       }
   } 
});

