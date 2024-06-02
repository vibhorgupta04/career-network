import db from './db/db.json'

export const fetchJobs = async () => {
  try {
    const response = { data: db.jobs};
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchJobsByKeyword = async (keyword: string) => {
  try {
    const filteredJobs = db.jobs.filter(job =>
      job.job_title.toLowerCase().includes(keyword.toLowerCase()) || 
      job.job_description.toLowerCase().includes(keyword.toLowerCase()) ||
      job?.job_highlights?.Qualifications?.[0]?.toLowerCase().includes(keyword.toLowerCase()) || 
      job.job_title.toLowerCase().includes(keyword.toLowerCase()) || 
      job.employer_name.toLowerCase().includes(keyword.toLowerCase()) 
  );    
    return { response: { data: filteredJobs}, error: false };
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