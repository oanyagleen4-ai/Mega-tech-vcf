// ✅ SETTINGS
let goal = 1600;
let increment = 50;
let intervalHours = 2;

// ✅ LOAD SAVED DATA OR DEFAULT
let savedCount = localStorage.getItem("count");
let lastUpdate = localStorage.getItem("lastUpdate");

let count = savedCount ? parseInt(savedCount) : 1087;
let lastTime = lastUpdate ? parseInt(lastUpdate) : Date.now();

// ✅ AUTO INCREMENT FUNCTION
function autoIncrease() {
  let now = Date.now();
  let hoursPassed = (now - lastTime) / (1000 * 60 * 60);

  let steps = Math.floor(hoursPassed / intervalHours);

  if (steps > 0) {
    count += steps * increment;

    // ❌ DO NOT EXCEED GOAL
    if (count > goal) count = goal;

    lastTime = now;

    // SAVE
    localStorage.setItem("count", count);
    localStorage.setItem("lastUpdate", lastTime);
  }
}

// ✅ UPDATE UI
function updateProgress() {
  let percent = (count / goal) * 100;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("count").innerText =
    count + " registered / " + goal + " goal";
}

// ✅ JOIN BUTTON
function joinList() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  count++;
  if (count > goal) count = goal;

  // SAVE
  localStorage.setItem("count", count);

  updateProgress();

  let note = document.getElementById("notification");
  note.style.display = "block";
  note.innerText =
    "Share the group link into 5 WhatsApp groups and you will automatically be added in the VCF file.";

  document.getElementById("shareBtn").style.display = "block";
}

// ✅ SHARE BUTTON
function shareNow() {
  let message =
    "Join MegaTech VCF now 🔥👇 https://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l?mode=gi_t";

  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// ✅ WHATSAPP BUTTON
function joinWhatsApp() {
  window.open(
    "https://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l?mode=gi_t",
    "_blank"
  );
}

// ✅ RUN ON LOAD
autoIncrease();
updateProgress();
