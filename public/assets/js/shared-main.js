const Dp = localStorage.getItem(`dp`);
if(Dp){

  document.getElementById(`profile-picture-2`).src = Dp;

}

function GoToCategoryWiseApp(element){

  let childnodes = element.childNodes;  
  let subCategory = childnodes[3].innerHTML
  subCategory = subCategory.replaceAll("&amp;", "&")
  // localStorage.setItem(`subCategory`, subCategory);
  subCategory = subCategory.replaceAll(` `, `_`);
  subCategory = subCategory.replaceAll(`&`, `.`)
  window.location = `http://localhost:5000/apps.html?subCategory=${subCategory}`;

}

function GoToCategoryWiseGame(element){


  let childnodes = element.childNodes;  
  let subCategory = childnodes[3].innerHTML
  subCategory = subCategory.replaceAll("&amp;", "&")
  subCategory = subCategory.replaceAll(` `, `_`);
  subCategory = subCategory.replaceAll(`&`, `.`)
  window.location = `http://localhost:5000/games.html?subCategory=${subCategory}`;

}


function GoToApk(element){

  let id = element.id;

  window.location = `http://localhost:5000/productdetail.html?apkId=${id}`;

}