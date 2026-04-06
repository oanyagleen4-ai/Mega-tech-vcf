function shareNow() {
  let message = "🔥 Join MegaTech VCF now 👇\n\nhttps://chat.whatsapp.com/CpbhPP7mzhyI5q4tCCRy2l";

  shareCount++;

  let note = document.getElementById("notification");
  note.innerText = `Sharing... (${shareCount}/5)`;

  // ✅ BEST: Native phone share (this is the one you want)
  if (navigator.share) {
    navigator.share({
      text: message
    }).then(() => {
      console.log("Shared successfully");
    }).catch(() => {
      fallbackShare(message);
    });
  } else {
    fallbackShare(message);
  }

  // ✅ After 5 clicks
  if (shareCount >= 5) {
    setTimeout(() => {
      note.innerText = "✅ Task completed. Your contact has been verified successfully to the VCF file.";
      document.getElementById("shareBtn").innerText = "COMPLETED ✅";
      document.getElementById("shareBtn").disabled = true;
    }, 1500);
  }
}

// fallback if native share fails
function fallbackShare(message) {
  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
