export const validateSchema = (data) => {
  const errors = [];

  // Hero validation
  if (!data.hero) errors.push("Missing 'hero' section.");
  else if (!data.hero.name || !data.hero.title || !data.hero.short_description) {
    errors.push("'hero' section is missing required text fields.");
  }

  // About validation
  if (!data.about || !data.about.summary) errors.push("Missing 'about.summary'.");

  // Skills validation
  if (!data.skills || !Array.isArray(data.skills.categories)) {
    errors.push("Missing or invalid 'skills' section.");
  }

  // Projects & Labs validation
  if (!data.projects || !Array.isArray(data.projects.items)) {
    errors.push("Missing or invalid 'projects' items.");
  }
  if (!data.labs || !Array.isArray(data.labs.items)) {
    errors.push("Missing or invalid 'labs' items.");
  }

  // Experience validation
  if (!data.experience || !Array.isArray(data.experience)) {
    errors.push("Missing or invalid 'experience' section.");
  }

  // Certifications validation
  if (!data.certifications || !Array.isArray(data.certifications)) {
    errors.push("Missing or invalid 'certifications' section.");
  }

  // SOC Methodology validation
  if (!data.soc_methodology || !data.soc_methodology.title || !Array.isArray(data.soc_methodology.steps)) {
    errors.push("Missing or invalid 'soc_methodology' section.");
  }

  // Contact validation
  if (!data.contact || !data.contact.email) {
    errors.push("Missing or invalid 'contact.email'.");
  }

  if (errors.length > 0) {
    console.error("Portfolio Data Schema Validation Errors:", errors);
    return false;
  }
  
  return true;
};
