export const isUserAuthenticated = () => {
  const key = localStorage.getItem('timestamp');
  if (!key) return false;
  return Date.now() < Number(new Date(key));
};
