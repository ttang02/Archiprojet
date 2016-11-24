Template.filterProjet.events({
   'input #filter' : function(event){
       Session.set('filterProjet',event.target.value);
   } 
});