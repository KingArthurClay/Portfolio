function loadProjects(projectFile) {
    var projectJSON = JSON.parse(projectFile);
    var projectList = document.getElementById("projectsList");

    for (var o = 0; o < projectJSON.projects.length; o++) {
        var projectListElement = document.createElement("DIV");
        projectListElement.classList.add("projectsListElement");

        var h2 = document.createElement("H2");
        h2.textContent = projectJSON.projects[o].name;
        h2.classList.add("projectName");

        var a = document.createElement("A");
        a.textContent = "Project Page";
        a.classList.add("projectLink");
        a.setAttribute("href", projectJSON.projects[o].link);
        a.setAttribute("target", "_blank");

        var img = document.createElement("IMG");
        img.classList.add("projectImg");
        img.setAttribute("src", projectJSON.projects[o].img);

        var p = document.createElement("p");
        p.classList.add("projectText");
        p.textContent = projectJSON.projects[o].text;

        projectListElement.appendChild(h2);
        projectListElement.appendChild(a);
        projectListElement.appendChild(img);
        projectListElement.appendChild(p);

        projectList.appendChild(projectListElement);
        projectList.appendChild(document.createElement("HR"));
    }
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "projectPage.json", true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(loadProjects);
}
