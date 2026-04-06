let goal = 1600;

// ✅ Starting value
let baseCount = 1402;

// Save first visit time
let startTime = localStorage.getItem("startTime");

if (!startTime) {
  startTime = new Date().getTime();
  localStorage.setItem("startTime", startTime);
} else {
  startTime = parseInt(startTime);
}

// Calculate how many hours passed
function getCurrentCount() {
  let now = new Date().getTime();
  let hoursPassed = Math.floor((now - startTime) / (1000 * 60 * 60));

  let increase = hoursPassed * 20;

  let current = baseCount + increase;

  if (current > goal) current = goal;

  return current;
}

// Update UI
function updateProgress() {
  let count = getCurrentCount();

  let percent = (count / goal) * 100;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("count").innerText = count + " registered / " + goal + " goal";
}

// Run immediately
updateProgress();

// Update every 5 seconds (for live feel)
setInterval(updateProgress, 5000);



// ==========================
// YOUR EXISTING FUNCTIONS
// ==========================

let shareCount = 0;
let requiredShares = 5;

let groupLink = "https://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l";

function joinList() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  let note = document.getElementById("notification");
  note.style.display = "block";
  note.innerText = "Share to 5 WhatsApp groups or status to continue.";

  document.getElementById("shareBtn").style.display = "block";
}

function shareNow() {
  let message = "🔥 Join MegaTech VCF now 👇\n\n" + groupLink;

  shareCount++;

  let note = document.getElementById("notification");
  note.innerText = `Sharing... (${shareCount}/5)`;

  if (navigator.share) {
    navigator.share({ text: message }).catch(() => {});
  } else {
    window.open("https://wa.me/?text=" + encodeURIComponent(message), "_blank");
  }

  if (shareCount >= requiredShares) {
    setTimeout(() => {
      note.innerText = "✅ Task completed. Your contact has been verified successfully to the VCF file.";
      document.getElementById("shareBtn").innerText = "COMPLETED ✅";
    }, 1500);
  }
}

function joinWhatsApp() {
  window.open(groupLink, "_blank");
}
