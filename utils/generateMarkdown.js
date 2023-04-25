// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const url = `https://img.shields.io/github/license/${questions.username}/${questions.title}`;
  if (questions.choices === 'Yes') {
    return url;
  };
  if (questions.choices === 'No') {
    emptyUrl = '';
    return emptyUrl;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (questions.choices === 'Yes') {
    return 'place holder';
  };
  if (questions.choices === 'No') {
    emptyUrl = '';
    return emptyUrl;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (questions.choices === 'Yes') {
    return 'place holder';
  };
  if (questions.choices === 'No') {
    emptyUrl = '';
    return emptyUrl;
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// export {renderLicenseBadge, renderLicenseLink, renderLicenseSection,};

module.exports = generateMarkdown;
