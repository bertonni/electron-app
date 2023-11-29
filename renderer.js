function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  }
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const printButton = document.getElementById("print");

printButton.addEventListener("click", async (event) => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // hide iframe
  hideFrame.src = "./print.html";
  document.body.appendChild(hideFrame);
  // await utils.print();
});

