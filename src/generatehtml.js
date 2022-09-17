function buildmanagercard (manager) {
    return `
    <div class = "card" style="width: 18rem;">
    <div class = "card-header" style = "color: green">
    <h2 class = "card-title">${manager.getname()}</h2>
    <p> id: ${manager.getid()}</p>
    </div>
    </div>
    `

}

function buildengineercard (engineer) {
    return `
    ${
        engineer.getname ()
    }`
}

function buildinterncard (intern) {
    return `
    ${
        intern.getname ()
    }`
}
function insertCards (team) {
    const html = []
    html.push (team.filter (employee => employee.getrole () === "manager").map (manager => buildmanagercard(manager)))
    html.push (team.filter (employee => employee.getrole () === "engineer").map (engineer => buildengineercard(engineer)))
    html.push (team.filter (employee => employee.getrole () === "intern").map (intern => buildinterncard(intern)))
    return html.join ("")
}


function buildFrame (team) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    ${insertCards (team)}
</body>
</html>
    `
}

module.exports = buildFrame;