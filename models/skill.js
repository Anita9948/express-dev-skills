const skills = [
  { id: 1234, skill: "JavaScript", leveofExpertise: "Junior" },
  { id: 1235, skill: "Database", leveofExpertise: "Junior" },
  { id: 1236, skill: "Framework - Express", leveofExpertise: "Junior" },
  { id: 1237, skill: "Debugging", leveofExpertise: "Junior" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteSkill,
};
function getAll() {
  return skills;
}

function getOne(id) {
  return getAll().find((s) => s.id === id);
}

function create(skill) {
  skill.id = Date.now();
  skills.push(skill);
  return skill;
}

function deleteSkill(id) {
  let iD = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === iD);
  skills.splice(idx, 1);
}
