let count = 0;
let goal = 700;
let shareCount = 0;
let requiredShares = 5;

// ✅ YOUR REAL WHATSAPP LINK (INSERTED)
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

  // Increase count
  shareCount++;

  let note = document.getElementById("notification");
  note.innerText = `Sharing... (${shareCount}/${requiredShares})`;

  // ✅ BEST METHOD (native share)
  if (navigator.share) {
    navigator.share({
      text: message
    }).catch(() => {
      openWhatsApp(message);
    });
  } else {
    openWhatsApp(message);
  }

  // ✅ After 5 clicks (simulation like real sites)
  if (shareCount >= requiredShares) {
    setTimeout(() => {
      note.innerText = "✅ Verification complete! You now have access to the VCF file.";
      document.getElementById("shareBtn").innerText = "COMPLETED ✅";
      document.getElementById("shareBtn").disabled = true;
    }, 1000);
  }
}

// Opens WhatsApp directly
function openWhatsApp(message) {
  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// Join button
function joinWhatsApp() {
  window.open(groupLink, "_blank");
}
