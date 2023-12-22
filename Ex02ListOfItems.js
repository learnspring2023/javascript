function addItem() {
    const newItemText = document.getElementById("newItemInput").value.trim();
  
    if (newItemText) {
      const li = document.createElement("li");
      li.textContent = newItemText;
      document.getElementById("myList").appendChild(li);
      document.getElementById("newItemInput").value = "";
    }
  }
  