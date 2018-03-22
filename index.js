// Initialize Firebase
var config = {
  apiKey: "AIzaSyAX2i55Kks2V5buUaSjQYP06Bg4uUAAEhk",
  authDomain: "portfolio-3c2ab.firebaseapp.com",
  databaseURL: "https://portfolio-3c2ab.firebaseio.com",
  projectId: "portfolio-3c2ab",
  storageBucket: "",
  messagingSenderId: "1041767277780"
};
firebase.initializeApp(config);

var projectsEndpoint = firebase.database().ref('projects/');

var projects = []
// projects.push({
//     name: "project3"
//   });

projectsEndpoint.on('value', function(snap) {
  snap.forEach(function(item){
    var projName = item.val().name;
    var projDescription = item.val().description;
    projects.push(projName);
    createGridItem(projName, projDescription);
  });
});

function createGridItem(projName, projDescription) {
  var grid = document.getElementById("grid");
  var gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  var title = document.createElement("h4");
  title.innerHTML = projName;
  var description = document.createElement("p");
  var link = document.createElement("a");
  link.href = "https://www.github.com/Salamander1012"
  link.innerHTML = projName
  // link.innerHTML =
  description.innerHTML = projDescription
  // gridItem.appendChild(title);
  gridItem.appendChild(link);
  grid.appendChild(gridItem);
}
