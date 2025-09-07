var myHttp = new XMLHttpRequest();
var allPosts;

myHttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    allPosts = JSON.parse(myHttp.response);
    for (var i = 0; i < allPosts.length; i++) {
      document.getElementById("main-div").innerHTML += `
        <div class="user">
        <span class="text-warning">UserID</span> = ${allPosts[i].userId} <br>
        <hr>
        <span class="text-warning">ID</span> = ${allPosts[i].id} <br>
        <hr>
        <span class="text-warning">title</span> = ${allPosts[i].title} <br>
        <hr>
        <span class="text-warning">body</span> = ${allPosts[i].body} <br>
        </div>
      `;
    }
  }
});
