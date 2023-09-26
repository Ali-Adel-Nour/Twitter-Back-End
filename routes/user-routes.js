const express = require ('express');

const router = express.Router();

//Create user
router.post('/',(req,res)=>{
  res.status(501).json({error:'Not implemented'})
})

//list user

router.get('/',(req,res)=>{
  res.status(501).json({error:'Not implemented'})

})

//get one
router.get('/:id',(req,res)=>{
  const {id} = req.params;
  res.status(501).json({error:'Not implemented'})

})


router.put('/:id',(req,res)=>{
  const {id} = req.params;
  res.status(501).json({error:`Not implemented: ${id}`})
})


router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  res.status(501).json({error:`Not implemented: ${id}`})
})

module.exports= router