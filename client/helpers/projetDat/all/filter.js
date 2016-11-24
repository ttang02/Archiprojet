Template.viewProjet.helpers({
  'projets' : function(){
        var filterP = Session.get('filterProjet');
        if(!filterP){
        var dats = Dat.find();
        }
        else{
        var dats = Dat.find({ name : {$regex : "^"+filterP}});
        }
        return dats;
    }
});
