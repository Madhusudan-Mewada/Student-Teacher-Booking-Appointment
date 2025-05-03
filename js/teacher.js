auth.onAuthStateChanged(user => {
    if (user) {
      db.collection("appointments").where("teacherId", "==", user.uid)
        .get()
        .then(snapshot => {
          const list = document.getElementById("appointmentList");
          snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement("li");
            li.innerText = `From: ${data.studentEmail}, Purpose: ${data.purpose}`;
            list.appendChild(li);
          });
          logAction("teacher", "Viewed appointments");
        });
    } else {
      window.location.href = "login.html";
    }
  });
  
  function logout() {
    auth.signOut().then(() => {
      logAction("teacher", "Logged out");
      window.location.href = "index.html";
    });
  }
  