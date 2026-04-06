let count = 0;
let goal = 700;
let shareCount = 0;
let requiredShares = 5;

// ✅ Your WhatsApp group link
let groupLink = "chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l?mode=gi_t";

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
  note.innerText = "Share this link to 5 WhatsApp chats or status to unlock access.";

  document.getElementById("shareBtn").style.display = "block";
}

function shareNow() {
  let message = `🔥 Join MegaTech VCF now 👇\nCopy and send this link:\n${groupLink}`;

  shareCount++;

  let note = document.getElementById("notification");
  note.innerText = `Sharing... (${shareCount}/${requiredShares})`;

  // ✅ This opens WhatsApp SHARE screen (not group)
  let url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);

  window.open(url, "_blank");

  // ✅ After 5 clicks → success message
  if (shareCount >= requiredShares) {
    setTimeout(() => {
      note.innerText = "✅ Task completed. Your contact has been verified successfully to the VCF file.";
      document.getElementById("shareBtn").innerText = "COMPLETED ✅";
      document.getElementById("shareBtn").disabled = true;
    }, 1500);
  }
}

// Join button (this one should open group normally)
function joinWhatsApp() {
  window.open("https://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l?mode=gi_t", "_blank");
}
