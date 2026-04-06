let count = 0;
let goal = 700;
let shareCount = 0;
let requiredShares = 5;

// ✅ Your WhatsApp link
let groupLink = "https://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l?mode=gi_t";

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
  note.innerText = "Share the group link to 5 WhatsApp groups to unlock access.";

  document.getElementById("shareBtn").style.display = "block";
}

function shareNow() {
  let message = `🔥 Join MegaTech VCF now 👇\n${groupLink}`;

  shareCount++;

  let note = document.getElementById("notification");
  note.innerText = `Sharing... (${shareCount}/${requiredShares})`;

  // ✅ Force WhatsApp share screen
  let url = "https://wa.me/?text=" + encodeURIComponent(message);

  // Use location.href so it opens WhatsApp directly
  window.location.href = url;

  // ✅ Fake verification after 5 clicks
  if (shareCount >= requiredShares) {
    setTimeout(() => {
      note.innerText = "✅ Verification complete! You now have access to the VCF file.";
      document.getElementById("shareBtn").innerText = "COMPLETED ✅";
      document.getElementById("shareBtn").disabled = true;
    }, 1500);
  }
}

function joinWhatsApp() {
  window.location.href = groupLink;
}
