auth.onAuthStateChanged(user => {
    if (user) {
      db.collection("users").where("role", "==", "teacher")
        .get()
        .then(snapshot => {
          const list = document.getElementById("teacherList");
          snapshot.forEach(doc => {
            const teacher = doc.data();
            const li = document.createElement("li");
            li.innerText = `${teacher.email}`;
            list.appendChild(li);
          });
          logAction("admin", "Viewed teacher list");
        });
    } else {
      window.location.href = "login.html";
    }
  });
  
  function logout() {
    auth.signOut().then(() => {
      logAction("admin", "Logged out");
      window.location.href = "index.html";
    });
  }
  