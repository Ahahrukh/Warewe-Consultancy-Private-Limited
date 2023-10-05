const express = require('express');
const connection = require('./config/connection');
const dataModel = require('./models/dataModel');
const cors = require('cors')

let app= express();

app.use(express.json());
app.use(cors());
app.get('/', function(req, res){
    res.send({message: "Hey thi is the get request and ypu are here"})
})

app.post('/data-post', async function(req, res){
     let data = req.body
     try {
        let newmodel = new dataModel({...data});
        await newmodel.save();
        return res.send({message: "the data is saved successfully"})
     } catch (error) {
        console.log(error)
     }

});

app.patch('/:dataId', async function(req, res){
    const product_id = req.params.dataId
    console.log(product_id)
    try {
        await dataModel.findOneAndUpdate({_id: product_id} , {...req.body})
        res.send({message: "product updated successfully"})
    } catch (error) {
        console.log(error)
        
    }
})

app.delete('/:dataId', async (req,res)=>{
    const product_id = req.params.dataId
    try {
         await dataModel.deleteOne({_id: product_id})
         res.send({message: "product deleted successfully"})
    } catch (error) {
        res.send({message: error.message})
    }
})

app.listen(4000 , async()=>{
    try {
        await connection
        console.log("connected to the database")
    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 4000")
})