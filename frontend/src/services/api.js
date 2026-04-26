import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    return Promise.reject(new Error(Array.isArray(message) ? message.join(', ') : message));
  }
);

export const portfolioApi = {
  getAll: () => api.get('/portfolio'),
  getAbout: () => api.get('/portfolio/about'),
  getSkills: () => api.get('/portfolio/skills'),
  getExperience: () => api.get('/portfolio/experience'),
  getProjects: () => api.get('/portfolio/projects'),
  getEducation: () => api.get('/portfolio/education'),
  getCertifications: () => api.get('/portfolio/certifications'),
};

export const contactApi = {
  sendMessage: (data) => api.post('/contact', data),
};

export default api;
