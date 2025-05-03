let currentUser;

auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    db.collection("users").where("role", "==", "teacher")
      .get()
      .then(snapshot => {
        const select = document.getElementById("teacherSelect");
        snapshot.forEach(doc => {
          const teacher = doc.data();
          const option = document.createElement("option");
          option.value = doc.id;
          option.text = teacher.email;
          select.appendChild(option);
        });
        logAction("student", "Loaded teacher list for booking");
      });
  } else {
    window.location.href = "login.html";
  }
});

function bookAppointment() {
  const teacherId = document.getElementById("teacherSelect").value;
  const purpose = document.getElementById("purpose").value;

  db.collection("appointments").add({
    teacherId,
    studentId: currentUser.uid,
    studentEmail: currentUser.email,
    purpose,
    status: "pending"
  })
  .then(() => {
    logAction("student", `Booked appointment with teacher ${teacherId}`);
    alert("Appointment booked!");
  });
}

function logout() {
  auth.signOut().then(() => {
    logAction("student", "Logged out");
    window.location.href = "index.html";
  });
}
