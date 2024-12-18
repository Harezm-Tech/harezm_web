export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Browser should use relative path
    return '';
  }
  
  if (process.env.VERCEL_URL) {
    // Reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Assume localhost
  return 'http://localhost:3000';
}

export const getApiUrl = () => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/api`;
}
