const Skill = require('../models/skill')

module.exports = {
  index,
  new: newSkill,
  show
};

function index(req, res) {
  res.render("skills/index", {
    title: "My Skills",
  });
}

function newSkill(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
}
function show(req,res) {
  let skill= Skill.getOne(parseInt(req.params.id))
  res.render('skills/show',{title: "Showing Skill", skill})
}