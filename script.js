$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});


let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("repo-one").innerHTML = gitObject[0].name;
        document.getElementById("repo-two").innerHTML = gitObject[1].name;
        document.getElementById("repo-three").innerHTML = gitObject[2].name;
    }
};
gitHubRequest.open("GET", "https://api.github.com/users/WimpyWonder/repos", true);
gitHubRequest.send();