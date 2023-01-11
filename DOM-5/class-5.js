document.getElementById("someID");
document.getElementsByClassName("someClass");
document.getElementsByTagName("tagName");
document.querySelector("#someID or .className");

document.createElement("p");
document.removeChild("p");
document.appendChild("p");
document.replaceChild("new", "old");
document.write("text");

document.getElementById("id").onclick = function () {
  //some fn
};

// Create a to-do app where users can enter their daily plan
// Users can click the plan and after it's clicked
// it's marked as DONE
