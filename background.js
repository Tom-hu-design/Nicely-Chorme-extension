
// let dom = "";
// function render() {
//   // const dom = document.body;
//   // document.querySelector("tag").innerHTML=dom;
//   // let p = document.createElement('p');
//   // p.innerHTML = "welcome to the dom tree";
//   // document.body.appendChild(p);
//   alert("hihi");
// }

// chrome.action.onClicked.addListener((tab) => {

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['pop.html'],
//   },
//   render
//   );

//     let url = chrome.runtime.getURL("pop.html");
//     chrome.tabs.create({ url });

// });

function getDom(name) {;
  alert(name);
  console.log(name);
}

chrome.action.onClicked.addListener(async (tab) => {
  let dom  = document.body;

chrome.scripting.executeScript(
    {
      target: {tabId: tab, allFrames: true},
      function: getDom,
      args: [dom],
    });

});