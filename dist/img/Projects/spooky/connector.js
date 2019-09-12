
fetch("articleJson.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    connectorData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  function connectorData(data){
  var articleContainer = document.getElementById("article");
  for (var i = 0; i < data.length; i++) {
  var pDate = document.createElement("p");
  pDate.className="article-date";
  pDate.innerHTML = data[i].date;
  articleContainer.appendChild(pDate);

  var pTittle = document.createElement("p");
  pTittle.className="article-tittle";
  pTittle.innerHTML =  data[i].tittle;
  articleContainer.appendChild(pTittle);

  var pContent = document.createElement("p");
  pContent.className="article-content";
  pContent.innerHTML = data[i].content;
  articleContainer.appendChild(pContent);
}
}
