function registerUser(email, password, role) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        return db.collection("users").doc(userCredential.user.uid).set({ email, role });
      })
      .then(() => {
        logAction(role, `User registered: ${email}`);
        alert("Registered successfully!");
        window.location.href = `${role}.html`;
      })
      .catch(error => alert(error.message));
  }
  
  function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const uid = userCredential.user.uid;
        return db.collection("users").doc(uid).get();
      })
      .then(doc => {
        if (doc.exists) {
          const role = doc.data().role;
          logAction(role, `User logged in: ${email}`);
          window.location.href = `${role}.html`;
        }
      })
      .catch(error => alert("Login failed: " + error.message));
  }
  