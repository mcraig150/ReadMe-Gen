function generateMarkdown(data) {
  return`

![License](https://img.shields.io/github/license/${data.userName}/${data.repoName})

# ${data.title}




#### Description
${data.description}


#### Table of Content
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contribution](#Contribution)
- [Tests](#Tests)


#### Installation
${data.install}

#### Usage
${data.usage}

#### Licenses
${data.license}

#### Contribution
${data.cont}

#### Tests
${data.test}


##### Questions

For any comments or questions please contact me at: ${data.email}



`
}

module.exports = generateMarkdown;
