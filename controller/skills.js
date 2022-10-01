const Skill = require("../models/skill");

module.exports = {
  index,
  new: newSkill,
  show,
  create,
  delete: deleteSkill,
};

function index(req, res) {
  let skills = Skill.getAll();
  res.render("skills/index", { title: "My Skills", skills });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "My Skills" });
}

function show(req, res) {
  let skill = Skill.getOne(parseInt(req.params.id));
  res.render("skills/show", { title: "Showing Skill", skill });
}

function create(req, res) {
  let skill = Skill.create(req.body);
  res.redirect(`/skills/${skill.id}`);
}

function deleteSkill(req, res) {
  Skill.deleteSkill(req.params.id);
  res.redirect("/skills");
}
