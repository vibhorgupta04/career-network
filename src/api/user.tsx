import db from './db/db.json'

interface Filters {
  remote: boolean, //job_is_remote
  freshers: boolean, // job_required_experience.no_experience_required
  experienced: boolean, // job_required_experience.no_experience_required
  fulltime: boolean, // job_employment_type,
  contractor: boolean, // job_employment_type
}

export const fetchJobs = async (filters: Filters) => {
  try {
    let jobs = db.jobs;
    // Apply filters
    if (filters.remote) {
      jobs = jobs.filter((job) => job.job_is_remote);
    }
    if (filters.freshers) {
      jobs = jobs.filter(
        (job) => job.job_required_experience.no_experience_required
      );
    }
    if (filters.experienced) {
      jobs = jobs.filter(
        (job) => !job.job_required_experience.no_experience_required
      );
    }
    if (filters.fulltime) {
      jobs = jobs.filter((job) => job.job_employment_type === 'FULLTIME');
    }
    if (filters.contractor) {
      jobs = jobs.filter((job) => job.job_employment_type === 'CONTRACTOR');
    }

    return { response: { data: jobs }, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchJobsByKeyword = async (keyword: string, filters: Filters) => {
  try {
    // Filter jobs by keyword
    const keywordLowerCase = keyword.toLowerCase();
    let filteredJobs = db.jobs.filter(
      (job) =>
        job.job_title.toLowerCase().includes(keywordLowerCase) ||
        job.job_description.toLowerCase().includes(keywordLowerCase) ||
        job?.job_highlights?.Qualifications?.some((qualification) =>
          qualification.toLowerCase().includes(keywordLowerCase)
        ) ||
        job.employer_name.toLowerCase().includes(keywordLowerCase)
    );

    // Apply filters
    if (filters.remote) {
      filteredJobs = filteredJobs.filter((job) => job.job_is_remote);
    }
    if (filters.freshers) {
      filteredJobs = filteredJobs.filter(
        (job) => job.job_required_experience.no_experience_required
      );
    }
    if (filters.experienced) {
      filteredJobs = filteredJobs.filter(
        (job) => !job.job_required_experience.no_experience_required
      );
    }
    if (filters.fulltime) {
      filteredJobs = filteredJobs.filter(
        (job) => job.job_employment_type === 'FULLTIME'
      );
    }
    if (filters.contractor) {
      filteredJobs = filteredJobs.filter(
        (job) => job.job_employment_type === 'CONTRACTOR'
      );
    }
    return { response: { data: filteredJobs }, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchJobDetails = async (jobId: any) => {
  try {
    const foundJob = db.jobs.filter(job => job.id === jobId);
    const response = foundJob.length > 0 ? { data: foundJob[0] } : { data: null };
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchCompanies = async () => {
  try {
    const response = { data: db.companies };
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};