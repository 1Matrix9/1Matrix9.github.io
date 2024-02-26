var projectsDiv = document.getElementById("projects");
for (let i = 0; i < PROJECTS.length; i++) {
  var currentproject = PROJECTS[i];

  // div
  var projectDiv = document.createElement("div");
  var divStyle = document.createAttribute("style");
  divStyle.value = "display:inLine-block; width: 300px; margin: 10px;";
  projectDiv.setAttributeNode(divStyle);

  // h3
  var title = document.createElement("h3");
  var titleNode = document.createTextNode(currentproject.title);
  title.appendChild(titleNode);

  // img
  var image = document.createElement("img");
  var source = document.createAttribute("src");
  source.value = "./images/" + currentproject.img;
  image.setAttributeNode(source);
  var imgStyle = document.createAttribute("style");
  imgStyle.value = "width: 180px; height: 100px;";
  image.setAttributeNode(imgStyle);

  //p
  var p = document.createElement("p");
  var pNode = document.createTextNode(currentproject.description);
  p.appendChild(pNode);

  projectDiv.appendChild(title);
  projectDiv.appendChild(image);
  projectDiv.appendChild(p);

  projectsDiv.appendChild(projectDiv);
}
