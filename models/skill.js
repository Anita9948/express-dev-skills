const skills = [
  { id: 01234, skill: "JavaScript", leveofExpertise: "Junior" },
  { id: 01235, skill: "Database", leveofExpertise: "Junior" },
  { id: 01236, skill: "Framework - Express", leveofExpertise: "Junior" },
  { id: 01237, skill: "Debugging", leveofExpertise: "Junior" },
];

module.exports = {
  getAll,
  getOne
};
function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((s) => s.id === id);
}
