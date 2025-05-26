const express=require("express")

const router=express.Router()
const Word=require("../models/Word")

router.get("/",async(req,res)=>
{
    const words=await Word.find();
    res.json(words);
})

router.get('/:query', async (req, res) => {
  const regex = new RegExp(req.params.query, 'i');
  const result = await Word.find({ word: regex });
  res.json(result);
});

router.post('/', async (req, res) => {
  const { word, definition, imageUrl, videoUrl } = req.body;
  const newWord = new Word({ word, definition, imageUrl, videoUrl });
  await newWord.save();
  res.status(201).json(newWord);
});

module.exports = router;