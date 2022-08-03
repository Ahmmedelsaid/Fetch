let theInput = document.querySelector(".get-repos input");
let Button = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

Button.onclick = function () {
  getRepos();
};
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write Github user</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        reposData.innerHTML = "";
        data.forEach((repo) => {
          let MainDiv = document.createElement("div");
          let text = document.createTextNode(repo.name);
          MainDiv.appendChild(text);

          let url = document.createElement("a");
          let urltext = document.createTextNode(" visit");
          url.appendChild(urltext);

          url.href = `https://github.com/${theInput.value}/${repo.name} `;
          url.setAttribute("target", "_blank");
          MainDiv.appendChild(url);

          let stars = document.createElement("span");
          let starsText = document.createTextNode(
            `Stars is:${repo.stargazers_count}`
          );
          stars.appendChild(starsText);
          MainDiv.appendChild(stars);
          MainDiv.className = "repo-box";
          reposData.appendChild(MainDiv);
        });
      });
  }
}
