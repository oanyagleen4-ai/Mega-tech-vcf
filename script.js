let count = 237;
let goal = 700;

function updateProgress() {
  let percent = (count / goal) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("count").innerText = count + " registered / " + goal + " goal";
}

function joinList() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  count++;
  updateProgress();

  let note = document.getElementById("notification");
  note.style.display = "block";
  note.innerText = "Share the group link into 5 WhatsApp groups and you will automatically be added in the VCF file.";

  document.getElementById("shareBtn").style.display = "block";
}

function shareNow() {
  let message = "Join MegaTech VCF now 🔥👇 https://chat.whatsapp.com/YOUR_LINK";

  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function joinWhatsApp() {
  window.open("https://chat.whatsapp.com/YOUR_LINK", "_blank");
}
