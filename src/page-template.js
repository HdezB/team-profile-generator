
const createTeam = team => {
  const teamArr = []

  const createManager = managerInfo => {
    let manager = `
        <div class="three columns card" style="margin-left: 8rem; margin-bottom: 5rem;">
          <h4>${managerInfo.name}</h4>
          <h4>${managerInfo.getRole()}</h4>
          <div>
            <ul class="members-list">
              <div class="alert">
                <li>ID: ${managerInfo.id}</li>
                <li><a href="mailto:${managerInfo.email}">Email</a></li>
                <li>Office Number: ${managerInfo.officeNumber}</li>
              </div>
            </ul>
          </div>
        </div>
        `
    teamArr.push(manager);
  }

  const createEngineer = engineerInfo => {
    console.log(engineerInfo);
    let engineers = `
        <div class="three columns card" style="margin-left: 8rem; margin-bottom: 5rem;">
          <h4>${engineerInfo.name}</h4>
          <h4>${engineerInfo.getRole()}</h4>
          <div>
            <ul class="members-list">
              <div class="alert">
                <li>ID: ${engineerInfo.id}</li>
                <li><a href="mailto:${engineerInfo.email}">Email</a></li>
                <li>GitHub: <a href="https://github.com/${engineerInfo.gitUsername}" target="_blank" rel="noopener noreferrer">${engineerInfo.gitUsername}</a></li>
              </div>
            </ul>
          </div>
        </div>
    `
    teamArr.push(engineers);

  }
  const createIntern = internInfo => {
    let interns = `
    <div class="three columns card" style="margin-left: 8rem; margin-bottom: 5rem;">
    <h4>${internInfo.name}</h4>
    <h4>${internInfo.getRole()}</h4>
    <div>
      <ul class="members-list">
        <div class="alert">
          <li>ID: ${internInfo.id}</li>
          <li><a href="mailto:${internInfo.email}">Email</a></li>
          <li>School: ${internInfo.school}</li>
        </div>
      </ul>
    </div>
  </div>
    `
    teamArr.push(interns)
  }

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() == "Manager") {
      createManager(team[i]);
    }
    else if (team[i].getRole() == "Engineer") {
      createEngineer(team[i]);
    }
    else if (team[i].getRole() == "Intern") {
      createIntern(team[i])
    }
  }

  return teamArr.join('');
}



module.exports = templatePage => {
  return `
    <!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <div class="row">
        <div class="twelve columns u-text-center alert alert-danger">
          <h1>MY TEAM</h1>
        </div>
    </header>
  </div>
  <div class="row">
  ${createTeam(templatePage)}
  </div>
  </body>

    `
}