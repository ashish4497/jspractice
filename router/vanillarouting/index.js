console.log("connected")

let homePage =
  `<div class="seaction">
    hello home page
  </div>
`
let portFolioPage =
  `<div class="seaction">
    <h1>Portfolio</h1>
  </div>
`
let resumePage =
  `<div class="seaction">
    <h1>Resume</h1>
  </div>
`
let routers = {
  '/': homePage,
  '/portfolio': portFolioPage,
  '/resume': resumePage,
  // '/contact': contactPage
}

let contentdiv = document.getElementById("section_one");
console.log(contentdiv)
contentdiv.innerHTML = routers[window.location.pathname];

let handleclick = (pathname) => {
  console.log(pathname)
  window.history.pushState({},
    pathname,
    window.location.origin + pathname
  );
  contentdiv.innerHTML = routers[pathname];
}

window.onpopstate = () => {
  contentdiv.innerHTML = routers[window.location.pathname]
}