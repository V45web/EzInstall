const code = document.getElementById("code").innerText;

function copycode(){
  navigator.clipboard.writeText(code)
  alert("Code is copy!")
}
