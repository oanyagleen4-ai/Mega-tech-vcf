let count = 0;
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

  document.getElementById("notification").innerText =
    "Share the group link into 5 WhatsApp groups and you will automatically be added to the VCF file.";

  document.getElementById("shareBtn").style.display = "block";
}

function shareNow() {
  let message = "Join this MegaTech VCF group now 🔥👇 https://chat.whatsapp.com/YOUR_LINK";

  let url = "https://wa.me/?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
