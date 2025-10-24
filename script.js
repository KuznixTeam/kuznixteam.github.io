document.addEventListener("DOMContentLoaded", () => {
  // Set current year dynamically
  document.getElementById("year").textContent = new Date().getFullYear();

  // Calculate age
  const birthDate = new Date("2011-12-02");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  const ageElement = document.getElementById("age");
  if (ageElement) ageElement.textContent = age;

  // Calculate elapsed time since Oct 23, 2025
  const startDate = new Date("2025-10-23");
  const diffMs = today - startDate; // milliseconds difference

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor((today.getFullYear() - startDate.getFullYear()) * 12 + today.getMonth() - startDate.getMonth());
  const diffYears = today.getFullYear() - startDate.getFullYear() - (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate()) ? 1 : 0);

  const elapsedElement = document.getElementById("elapsed");
  if (elapsedElement) {
    elapsedElement.textContent = `${diffDays} days / ${diffWeeks} weeks / ${diffMonths} months / ${diffYears} years`;
  }
});

