class Food{
constructor(){
this.foodStcok = 0;
this.lastFed = null;


}
getFoodStock(){
database.ref("foodStock").on("value",(data)=>{
    this.foodStick = data.val();
    foodStock = this.foodStock;
})
updateFoodStock(foodStock){
database.ref("/").update({
    foodStock:foodStock
})
this.foodStock = foodStock;
}
deductFoodStcok(){
    if(this.foodStock>0){
        this.foodStcok = this.foodStock-1;
    }
}
lastFedTime(lastfed){
    database.ref("/").update({
        lastFed:lastFed
    })
    this.lastFed = lastFed;
}
display(){
    var x=50,y=200
    if(this.foodStock>0){
        for(var m=0;m<this.foodStock;m++){
            image(milk,x,y,50,50);
            x+=30
            if(x>=390){
                x = 50;
                y = y+50;
            }
        }
    }
}


}

