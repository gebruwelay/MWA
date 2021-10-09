const mongoose = require('mongoose');
const jobs = mongoose.model('Job');
const ObjectId = require('mongodb').ObjectId;
//title, salary, location, description, experience, skills, postDate

const _geoSearch = (req,res)=>{
    let minDis = 0;
    let maxDis = 1000;
    
    if(!isNaN(req.query.maxDis))
    {
        maxDis = parseFloat(req.query.maxDis);
    }
    let query = {
        location: {
            $near :{
                $geometry:{
                    type:'Point',
                    coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]
                },
                $minDistance :minDis,
                $maxDistance :maxDis
            }
        }
    }// end of query

    jobs.find(query).exec((err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).json({"error":err.message});
            return;
        }
        res.status(200).json(result);

    });
}
const getAll = (req,res) => {
    let count= 5;
    let offset =0;
    
    if(req.query&&!isNaN(req.query.lng) && !isNaN(req.query.lat)){
        _geoSearch(req,res);
        return;
    }
    if(req.query && req.query.count && !isNaN(req.query.count))
    {
        count = parseInt(req.query.count);
    }

    if(req.query && req.query.offset && !isNaN(req.query.offset))
    {
        offset= parseInt(req.query.offset);
    }

    jobs.find({}).skip(offset).limit(count).exec((err, result)=>{
        if(err){
            res.status(500).json({"error":err.message});
        }
        res.status(200).json(result);
    });
};

const addOne = (req, res) => {
    let location = null;
   
    if(!isNaN(req.body.lng)&&!isNaN(req.body.lat))
    {
        location = {
            type: 'Point',
            coordinates : [48.777107239, 9.180768967]
        }
    }
    let skills = [];
    skills.push(req.body.skills);
    let data = {
        title: req.body.title,
        salary:req.body.salary,
        location: location,
        description: req.body.description,
        exprience: req.body.exprience,
        skills: skills,
        postDate: req.body.postDate
        
    }
    jobs.create(data,(err, result) => {
        if(err) {
            console.log(err.message);
            res.status(500).json({"error": err.message});
            return;
        }
        res.status(200).json(result);
    });
};

const getOne = (req, res) => {
    if(req.params && ObjectId.isValid(req.params.id)) {
        let id =  ObjectId(req.params.id);
        jobs.findById(id).exec((err, result) => {
            if(err) {
                res.status(500).json({"error": err.message});
                return;
            }
            res.status(200).json(result);
        });
    }
    else {
        res.status(404).json({"error":"invalid id"});
        return;
    }
};
//title, salary, location, description, experience, skills, postDate

const _updateOne = (req,res,data)=>{
    if(!isNaN(req.body.lng) &&  !isNaN(req.body.lat))
    {
        data.location = {
            type:'Point',
            coordinates:[parseFloat(req.body.lng), parseFloat(req.body.lat)]
        };
    }
    data.skills.find(item=>item==req.body.skills)?data.skills: data.skills.push(req.body.skills);
    
    data.title = req.body.title;
    data.salary = req.body.salary;
    data.description=req.body.description;
    data.exprience = req.body.exprience;
    data.postDate = req.body.postDate;

    data.save(data,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).json({"error":err.message});
            return;
        }

        res.status(200).json(result);

    })
}
const updateOne = (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        res.status(404).json({"error":"invalid id"});
        return;
    }
    let id = ObjectId(req.params.id);
    jobs.findById(id).exec((err,result) => {
        if(!result) {
            res.status(404).json({"error":"invalid id"});
        }
        if(err){
            res.status(500).json({"error":err.message});
        }

        _updateOne(req,res,result);
        
    });
};


const deleteOne = (req, res)=> {
    
    if(!ObjectId.isValid(req.params.id))
    {
        res.status(404).json({"error": "Invalid id"});
        return;
    }
    
    jobs.findByIdAndRemove(req.params.id).exec((err,result)=> {
        if(err)
        {
            res.status(err).json({"error":err.message})
            return;
        }
        res.status(200).json(result);
    });
}


module.exports ={
    addOne:addOne,
    getOne:getOne,
    getAll:getAll,
    updateOne:updateOne,
    deleteOne:deleteOne,
}