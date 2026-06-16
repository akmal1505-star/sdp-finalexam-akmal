function dapatkanData() {
  const senarai = document.getElementById("senaraiPengguna");
  const status = document.getElementById("status");

  senarai.innerHTML = "";
  status.innerHTML = "Sedang mendapatkan data...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Masalah sambungan API");
      }
      return response.json();
    })
    .then(data => {

      status.innerHTML =
        "<p class='success'>Data berjaya diperoleh.</p>";

      data.forEach(user => {
        senarai.innerHTML += `
          <div class="user-card">
            <h3>${user.name}</h3>
            <p><strong>E-mel:</strong> ${user.email}</p>
            <p><strong>Telefon:</strong> ${user.phone}</p>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error(error);

      status.innerHTML =
        "<p class='error'>Ralat sambungan API. Sila cuba lagi.</p>";
    });
}