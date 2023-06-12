const mongoose = require('mongoose');
/*const mongoURI='mongodb+srv://gofood:gofood6@cluster0.ntfogrn.mongodb.net/gofoodmern?retryWrites=true&w=majority'*/
const mongoURI='mongodb://gofood:gofood6@ac-km8xp4p-shard-00-00.ntfogrn.mongodb.net:27017,ac-km8xp4p-shard-00-01.ntfogrn.mongodb.net:27017,ac-km8xp4p-shard-00-02.ntfogrn.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-hcjr5a-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err)console.log("----ERROR----",err)
        else{
        console.log("connected");
        const fetched_data= await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){

                const foodCategory=await mongoose.connection.db.collection("foodCategory");
                  foodCategory.find({}).toArray(function (err,catData){

                    if(err)console.log(err);
                else 
                {
                    global.food_items=data; 
                    global.foodCategory=catData;
                }
                  })
                // if(err)console.log(err);
                // else 
                // {
                //     global.food_items=data;
                //    console.log(global.food_items)
                // }  
            })
        }
    });
}

module.exports=mongoDB;
