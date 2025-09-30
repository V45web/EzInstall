function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert('Copied to clipboard!'))
    .catch(err => alert('Failed to copy: ' + err));
}

function gen(name,code,link){
  const container = document.getElementById('box');

  const box = document.createElement('div');
  box.className = 'distro';

  const heading = document.createElement('h2');
  heading.textContent = name;

  const codeBlock = document.createElement('p');
  codeBlock.className = 'codeblock';
  codeBlock.id = name;
  codeBlock.textContent = code;

  const button = document.createElement('button');
  button.textContent = 'Copy to clipboard';
  button.onclick = function () {
    copyToClipboard(name);
  };

  // Append elements to the container
  box.appendChild(heading);
  box.appendChild(codeBlock);
  box.appendChild(button);

  container.appendChild(box);

}

const url = new URLSearchParams(window.location.search)

fetch(url.get("json"))
  .then(response => {
    if (!response.ok) throw new Error("Failed to load JSON");
    return response.json();
  })
  .then(data => {
    Object.keys(data).forEach(key => {
      const item = data[key];
      gen(item.name, item.code, item.link);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
