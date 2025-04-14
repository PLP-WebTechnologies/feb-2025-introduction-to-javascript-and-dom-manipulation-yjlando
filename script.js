// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
    const paragraph = document.getElementById("description");
    paragraph.textContent = "Boom! The text has been changed with JavaScript!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("main-title").style.color = "purple";
  
  // Add/remove an element dynamically
  const toggleBtn = document.getElementById("toggle-box-btn");
  const box = document.getElementById("box");
  
  toggleBtn.addEventListener("click", () => {
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  