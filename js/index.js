    // JSON data
    const items = [
  { name: "GNOME Tweaks", link: "" },
  { name: "KDE System Settings", link: "" },
  { name: "BleachBit", link: "" },
  { name: "Timeshift", link: "" },
  { name: "Stacer", link: "" },
  { name: "Synaptic Package Manager", link: "" },
  { name: "GParted", link: "" },
  { name: "GRUB Customizer", link: "" },
  { name: "LibreOffice", link: "" },
  { name: "OnlyOffice", link: "" },
  { name: "WPS Office", link: "" },
  { name: "Zettlr", link: "" },
  { name: "Joplin", link: "" },
  { name: "Standard Notes", link: "" },
  { name: "Obsidian", link: "" },
  { name: "Thunderbird", link: "" },
  { name: "Evolution", link: "" },
  { name: "Firefox", link: "" },
  { name: "Brave", link: "" },
  { name: "Chromium", link: "" },
  { name: "Google Chrome", link: "" },
  { name: "qBittorrent", link: "" },
  { name: "Transmission", link: "" },
  { name: "FileZilla", link: "" },
  { name: "Tor Browser", link: "" },
  { name: "Warp", link: "" },
  { name: "Remmina", link: "" },
  { name: "VSCode", link: "" },
  { name: "VSCodium", link: "" },
  { name: "Sublime Text", link: "" },
  { name: "Neovim", link: "" },
  { name: "Vim", link: "" },
  { name: "Emacs", link: "" },
  { name: "Geany", link: "" },
  { name: "IntelliJ IDEA", link: "" },
  { name: "PyCharm", link: "" },
  { name: "WebStorm", link: "" },
  { name: "Eclipse", link: "" },
  { name: "Git", link: "" },
  { name: "GitKraken", link: "" },
  { name: "Postman", link: "" },
  { name: "Docker", link: "" },
  { name: "Podman", link: "" },
  { name: "Flatpak", link: "" },
  { name: "Snap", link: "" },
  { name: "AppImage", link: "" },
  { name: "Anbox", link: "" },
  { name: "Waydroid", link: "" },
  { name: "GIMP", link: "" },
  { name: "Inkscape", link: "" },
  { name: "Krita", link: "" },
  { name: "Darktable", link: "" },
  { name: "Shotcut", link: "" },
  { name: "Kdenlive", link: "" },
  { name: "OBS Studio", link: "" },
  { name: "Audacity", link: "" },
  { name: "LMMS", link: "" },
  { name: "Blender", link: "" },
  { name: "HandBrake", link: "" },
  { name: "Pinta", link: "" },
  { name: "Peek", link: "" },
  { name: "VLC", link: "" },
  { name: "MPV", link: "" },
  { name: "Rhythmbox", link: "" },
  { name: "Clementine", link: "" },
  { name: "Audacious", link: "" },
  { name: "Spotify", link: "" },
  { name: "Tidal-hifi", link: "" },
  { name: "Nuclear", link: "" },
  { name: "PulseAudio Volume Control", link: "" },
  { name: "Helvum", link: "" },
  { name: "Calibre", link: "" },
  { name: "Foliate", link: "" },
  { name: "Anki", link: "" },
  { name: "Zotero", link: "" },
  { name: "HTop", link: "" },
  { name: "BPytop", link: "" },
  { name: "Bashtop", link: "" },
  { name: "Neofetch", link: "" },
  { name: "Fastfetch", link: "" },
  { name: "GNOME Disks", link: "" },
  { name: "SimpleScreenRecorder", link: "" },
  { name: "Redshift", link: "" },
  { name: "Ulauncher", link: "" },
  { name: "Albert", link: "" },
  { name: "Synapse", link: "" },
  { name: "Flameshot", link: "" },
  { name: "Ksnip", link: "" },
  { name: "Etcher", link: "" },
  { name: "UNetbootin", link: "" },
  { name: "Wine", link: "" },
  { name: "Proton", link: "" },
  { name: "Steam Play", link: "" },
  { name: "PlayOnLinux", link: "" },
  { name: "VirtualBox", link: "" },
  { name: "VMware", link: "" },
  { name: "Steam", link: "" },
  { name: "Lutris", link: "" },
  { name: "Heroic Games Launcher", link: "" },
  { name: "GameHub", link: "" },
  { name: "DOSBox", link: "" },
  { name: "ScummVM", link: "" },
  { name: "RetroArch", link: "" },
  { name: "Proton GE", link: "" },
  { name: "tmux", link: "" },
  { name: "fzf", link: "" },
  { name: "ripgrep", link: "" },
  { name: "bat", link: "" },
  { name: "fd", link: "" },
  { name: "exa", link: "" },
  { name: "ncdu", link: "" },
  { name: "btop", link: "" },
  { name: "curl", link: "" },
  { name: "wget", link: "" },
  { name: "rsync", link: "" },
  { name: "zsh", link: "" },
  { name: "fish", link: "" },
  { name: "Oh My Zsh", link: "" },
  { name: "Starship", link: "" },
  { name: "TLP", link: "" },
  { name: "Powertop", link: "" },
  { name: "KeePassXC", link: "" },
  { name: "Bitwarden", link: "" },
  { name: "Gufw", link: "" },
  { name: "ClamAV", link: "" },
  { name: "OpenSnitch", link: "" },
  { name: "GNOME Software", link: "" },
  { name: "KDE Discover", link: "" },
  { name: "Pamac", link: "" },
  { name: "Octopi", link: "" },
  { name: "Ubuntu Software", link: "" },
  { name: "AppCenter", link: "" }
];


  const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

// Initialize Fuse.js with options
const fuse = new Fuse(items, {
  keys: ['name'],
  threshold: 0.3, // Adjust 0.0 (exact) to 1.0 (fuzzy). 0.3 is a good balance
  ignoreLocation: true,
  minMatchCharLength: 1
});

// Debounce helper to improve performance
function debounce(func, wait = 200) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const handleSearch = () => {
  const query = searchInput.value.trim();

  resultsDiv.innerHTML = "";

  if (query === "") return;

  // Search using Fuse.js
  const results = fuse.search(query);

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.slice(0, 20).forEach(({ item }) => { // limit to top 20
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item.name;
    if (item.link) {
      div.style.cursor = "pointer";
      div.onclick = () => window.open(item.link, "_blank");
    }
    resultsDiv.appendChild(div);
  });
};

searchInput.addEventListener("input", debounce(handleSearch, 150));
   
