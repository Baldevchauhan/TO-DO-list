
    // Load from localStorage
    let todolist = JSON.parse(localStorage.getItem("todolist")) || [];

    function saveToLocalStorage() {
      localStorage.setItem("todolist", JSON.stringify(todolist));
    }

    function add() {
      let task = document.getElementById('task').value.trim();
      let date = document.getElementById('date').value;

      if (task === "" || date === "") {
        alert("Please enter both task and date.");
        return;
      }

      let entry = `${task} - ${date}`;
      todolist.push(entry);
      saveToLocalStorage();

      document.getElementById('task').value = "";
      document.getElementById('date').value = "";

      display();
    }

    function display() {
      let show = document.querySelector('#result');
      let newbu = '';

      for (let i = 0; i < todolist.length; i++) {
        newbu += `
          <div>
            <span>${todolist[i]}</span>
            <button onclick="remove(${i})">DELETE</button>
          </div>
        `;
      }

      show.innerHTML = newbu;
    }

    function remove(index) {
      todolist.splice(index, 1);
      saveToLocalStorage();
      display();
    }

    // Display tasks when page loads
    window.onload = display;