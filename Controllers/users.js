const User= require('../Modals/users');

exports.getUsers= async (req,res)=>{
    try {
      const users = await User.find().sort({ date: -1 });
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};
exports.getUsersById= async (req,res)=>{
    try {
        console.log(req.body._id);
      const users = await User.findById(req.body._id);
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};
exports.addUser= async (req,res)=>{
    try {
        //const users = await User.find({_id:req.body.id}).fetch();
        console.log(req.body);
        var user= new User(req.body);
        await user.save();
        ///res.send(user);
        res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};
exports.updateUser= async (req,res)=>{
    try {
        console.log(req.body);
        var user= await User.findOneAndUpdate({ _id: req.body._id },{$set:req.body},{new:true});
        console.log('user',user);
        res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};
exports.updateStatus= async (req,res)=>{
    try {
        console.log(req.body);
        var user= await User.findOne({_id:req.body._id})
        var user1= await User.findOneAndUpdate({ _id: req.body._id },{$set:{isactive:!user.isactive}},{new:true});
        res.json(user1);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};
exports.deleteUser= async (req,res)=>{
  try {
     var user1=await User.remove({_id:req.body._id});
      res.json(user1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};