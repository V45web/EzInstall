    // JSON data
    const items = [
      { name: "Firefox", link: "apps/firefox.html" }
    ];

    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      resultsDiv.innerHTML = "";

      if (query.trim() === "") return;

      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(query)
      );

      filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item.name;
        div.onclick = () => window.open(item.link, "_blank");
        resultsDiv.appendChild(div);
      });

      if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      }
    });