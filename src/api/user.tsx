import db from './db/db.json'

export const fetchJobs = async () => {
  try {
    const response = { data: db.jobs};
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};
export const fetchJobDetails = async (jobId: any) => {
  try {
    const foundJob = db.jobs.filter(job => job.id === jobId);
    const response = foundJob.length > 0  ? { data: foundJob[0] } : { data : null };
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchCompanies = async () => {
  try {
    const response = { data: db.companies};
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};