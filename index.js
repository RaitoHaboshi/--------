const getParam = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const picDatas = [
  {
    name: "Biwalake1.jpeg",
    kind: "Biwalake"
  },
  {
    name: "Biwalake2.jpeg",
    kind: "Biwalake"
  },
  {
    name: "Biwalake3.jpeg",
    kind: "Biwalake"
  },
  {
    name: "Fuji Mountain1.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain2.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain3.jpeg",
    kind: "FujiMountain"
  },{
    name: "Fuji Mountain4.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain5.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain6.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain7.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Fuji Mountain8.jpeg",
    kind: "FujiMountain"
  },
  {
    name: "Nature1.jpeg",
    kind: "Nature"
  }
  ,
  {
    name: "Nature2.jpeg",
    kind: "Nature"
  },
  {
    name: "night view1.jpeg",
    kind: "nightview"
  },
  {
    name: "Fuji Mountain8.jpeg",
    kind: "nightview"
  },
  {
    name: "others1.jpeg",
    kind: "others"
  },
  {
    name: "others2.jpeg",
    kind: "others"
  },
  {
    name: "others3.jpeg",
    kind: "others"
  },
  {
    name: "others4.jpeg",
    kind: "others"
  }
]

const kind = getParam("kind");

const imageRoot = document.getElementById("image-root")

let targetPictures = picDatas.filter(p => p.kind === kind);
if (kind === null) targetPictures = picDatas

targetPictures.forEach(p => {
  const divDom = document.createElement("div")
  divDom.setAttribute("class", "col-6")
  const imgDom = document.createElement("img")
  imgDom.setAttribute("src", `./images/${p.name}`)
  imgDom.setAttribute("class", "picture-content")
  divDom.appendChild(imgDom)
  imageRoot.appendChild(divDom)
})

var name = "土川"

var koushiList = [
  "土川",
  "河波",
  "吉田"
]


