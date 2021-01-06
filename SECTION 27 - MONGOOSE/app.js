//require mongoose;
const mongoose = require('mongoose');

//connection to the database. url:port/database_name
mongoose.connect('mongodb://localhost:27017/peopleDB', { useNewUrlParser: true }, { useUnifiedTopology: true });

//checking connection.
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log("We are connected")
})

//insert data.

//Create a new Schema. Schema is a JSON object
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
})

//Create a new Schema. Schema is a JSON object
const peopleSchema = new mongoose.Schema({
    //Validation Data
    name: {
        type: String,
        required: [true, "Please check name"]
    },
    age: {
        type: Number,
        min: 18,
        max: 40

    },
    //Realtionship
    favouriteFruit: fruitSchema
})
// Create mongoose model. first, name of the collection. structure of the schema
const People = mongoose.model('People', peopleSchema)
const Fruit = mongoose.model('Fruit', fruitSchema)

//create a new object based on the mongoose.model
const fruit = new Fruit({
    name: 'banana',
    rating: 10
})

//create a new object based on the mongoose.model
const people = new People({
    name: "otávio",
    age: 19,
    favouriteFruit: fruit
})



fruit.save(function (err, fruit) {
    if (err) {
        console.log(err)
    } else {
        console.log(fruit.name)
    }
})
//saving at the databse
people.save(function (err, fruit) {
    if (err) return console.log(err)
    console.log(fruit.name)
})


//update Data
People.updateOne(
    { _id: "5ff5cbfab87d873e54a19e17" },
    { name: "Marcio gabriel" },
    function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Updated")
        }
    }
)

//delete Data
People.deleteOne(
    { name: "João" },
    function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Deleted")
        }
    }
)


// read data from the database. err, collection
People.find(function (err, peoples) {
    if (err) {
        console.log(err)
    } else {
        //closeing th e connection
        mongoose.connection.close()
        console.log(peoples)
    }

})