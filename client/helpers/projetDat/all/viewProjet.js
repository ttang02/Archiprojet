Template.moreprojet.helpers({
   'projet' : function(){
       var idDat = Session.get('id_dat');
       var projet = Dat.findOne({_id : idDat});
       return projet;
   }
});
