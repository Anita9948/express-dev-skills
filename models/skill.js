const skills = [
  { id: 1234, skill: "JavaScript", leveofExpertise: "Junior" },
  { id: 1235, skill: "Database", leveofExpertise: "Junior" },
  { id: 1236, skill: "Framework - Express", leveofExpertise: "Junior" },
  { id: 1237, skill: "Debugging", leveofExpertise: "Junior" },
];

module.exports = {
  getAll,
  getOne,
  create
};
function getAll() {
  return skills;
}

function getOne(id) {
  console.log(id);
  return getAll().find((s) => s.id === id);
}

function create(skill) {
  skill.id = Date.now();
  skills.push(skill);
}
