class Player {
    constructor(){}
    
    getCount(){
      var playerCountRef = dataBase.ref('playerCount');
      playerCountRef.on("value",function(data){
         playerCount = data.val();
      })
     
    }
   
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
   
    update(name){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
   }