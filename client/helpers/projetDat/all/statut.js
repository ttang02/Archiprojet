Template.esp.helpers({
 'statut' : function(){
      var esp = Esp.findOne({
            _id: Session.get('id_esp')
        });
         if(!esp){
            return null;
        }
        var obj = esp.objectifs;
        var enj = esp.enjeux;
        var contexte = esp.contexte;
        var planning = esp.planning;
        var actP = esp.acteurProjet;
        var actU = esp.acteurUsager;
        
        var bobj = false, benj = false, bcontexte = false, bplanning = false, bactp = false, bactu = false;
        for (var i = 0; i < obj.length; i++){
            if(obj[i].name !== ""){
                bobj = true;
            }
            else{
                bobj = false;
            }
        }
        for (var i = 0; i < enj.length; i++){
            if(enj[i].name !== ""){
                benj = true;
            }
            else{
                benj = false;
            }
        }
        for (var i = 0; i < contexte.length; i++){
            if(contexte[i].name !== "" ){
                bcontexte = true;
            }
            else{
                bcontexte = false;
            }
        }
        for (var i = 0; i < planning.length; i++){
            if(planning[i].date !== "" || planning[i].commentaire !== ""){
                bplanning = true;
            }
            else{
                bplanning = false;
            }
        }
        
        for (var i = 0; i < actP.length; i++){
            if(actP[i].name !== "" || actP[i].name !== "" || actP[i].name !== "" ){
                bactp = true;
            }
            else{
                bactp = false;
            }
        }
        for(var i = 0 ; i < actU.length ; i++){
            if(actU[i].name !== ""){
                bactu = true;
            }
            else{
                bactu = false;
            }
        }
        if(bobj && benj && bactp && bactu && bcontexte && bplanning){
            return 1;
        }
        else if(bobj || benj || bactp || bactu || bcontexte || bplanning){
            return 2;
        }
        else{
            return 3;
        }
        
 } 
});