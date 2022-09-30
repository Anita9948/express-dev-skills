const Skill = require("../models/skill");

module.exports = {
  index,
  new: newSkill,
  show,
  create,
};

function index(req, res) {
  let skills = Skill.getAll();
  res.render("skills/index", { title: "My Skills", skills });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "My Skills" });
}

function show(req, res) {
  console.log(req.params.id);
  let skill = Skill.getOne(parseInt(req.params.id));
  console.log(skill);
  res.render("skills/show", { title: "Showing Skill", skill });
}

function create(req, res) {
  console.log(req.body)
  // Skill.push(skill);
  res.redirect("/skills/new");
}
