const createJob = async (req, res) => {
  res.send("CreateJob");
};
const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};
const updateJob = async (req, res) => {
  res.send("updateJob");
};
const showStats = async (req, res) => {
  res.send("showStats");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

export { createJob, getAllJobs, updateJob, showStats, deleteJob };
