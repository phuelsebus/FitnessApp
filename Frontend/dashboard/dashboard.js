let tableBody = document.getElementById("table-body");

const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
  window.location.href = "../index.html";
}

fetch("http://127.0.0.1:8000/api/mitglieder/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${ACCESSKEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach((mitglied) => {
      let tableRow = document.createElement("tr");
      let tableDataID = document.createElement("td");
      let tableDataFirstname = document.createElement("td");
      let tableDataLastname = document.createElement("td");
      let tableDataAge = document.createElement("td");
      let tableDataEdit = document.createElement("td");
      let tableDataDelete = document.createElement("td");

      tableDataID.innerHTML = `${mitglied.id}`;
      tableDataFirstname.innerHTML = `${mitglied.vorname}`;
      tableDataLastname.innerHTML = `${mitglied.nachname}`;
      tableDataAge.innerHTML = `${mitglied.alter}`;
      tableDataEdit.innerHTML = `<button class="btn btn-secondary" onclick="editMitglied(${mitglied.id})">Bearbeiten</button>`;
      tableDataDelete.innerHTML = `<button class="btn btn-danger" onclick="deleteMitglied('${mitglied.id}')">Löschen</button>`;

      tableBody.appendChild(tableRow);
      tableRow.appendChild(tableDataID);
      tableRow.appendChild(tableDataFirstname);
      tableRow.appendChild(tableDataLastname);
      tableRow.appendChild(tableDataAge);
      tableRow.appendChild(tableDataEdit);
      tableRow.appendChild(tableDataDelete);
    });
  });

function logOut() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "../index.html";
}

function editMitglied(id) {
  window.location.href = `edit.html?id=${id}`
}

function deleteMitglied(id) {
  if (confirm(`Sind Sie sich sicher das Sie dieses Mitglied mit der ${id} löschen möchten?`)) {
    fetch(`http://127.0.0.1:8000/api/mitglieder/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${ACCESSKEY}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("table-body").innerHTML = "";
          location.reload();
        } else {
          console.error("Failed to delete the student");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
}

function addMitglied() {
  window.location.href = "./edit.html";
}

