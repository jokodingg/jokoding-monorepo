// Smooth scroll ke section dengan offset 80px supaya tidak ketutup navbar.
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
};
