import axios from 'axios';

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};
export const fetchJobDetails = async (jobId: any) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${jobId}`);
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/companies`);
    return { response, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};