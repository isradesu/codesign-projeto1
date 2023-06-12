import {projects} from './data.js';

var projectDetailsDiv = document.getElementById("project-details");
var urlParams = new URLSearchParams(window.location.search);
var projectId = urlParams.get("id");

// Encontrar o projeto correspondente pelo ID
var project = projects.find(function (project) {
    console.log(projectId);
    return project.id == projectId;
});

if (project) {
    document.getElementById("title").textContent = project['name'];

    var iframeElement = document.getElementById("iframe");
    var iframeContent = document.getElementById("player");
    var description = document.getElementById("description");
    var objective = document.getElementById("objective");
    var heldIn = document.getElementById("held-in");
    var participants = document.getElementById("participants");
    var acess = document.getElementById("acess");

    iframeElement.src = project['videoUrl'];
    acess.textContent = project['videoUrl'];
    acess.href = project['videoUrl'];
    description.textContent = project['description'];
    objective.textContent = project['objective'];
    heldIn.textContent = project['heldIn'];
    participants.textContent = project['partcipants'];

    iframeContent.appendChild(iframeElement);
    projetoDetailsDiv.appendChild(iframeContent);
    projetoDetailsDiv.appendChild(descriptionContent);
    descriptionContent.appendChild(description);
    projetoDetailsDiv.appendChild(playerContent);
    playerContent.appendChild(acess);
} else {
    projetoDetailsDiv.textContent = "Projeto não encontrado.";
}