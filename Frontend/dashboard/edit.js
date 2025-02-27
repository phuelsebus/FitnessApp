const accessToken = localStorage.getItem("access");
let idField = document.getElementById("id-field");
let firstnameField = document.getElementById("firstname-field");
let lastnameField = document.getElementById("lastname-field");
let ageField = document.getElementById("age-field");

document.addEventListener("DOMContentLoaded", () => {
    const mitgliedURLParam = new URLSearchParams(window.location.search);
    const mitgliedID = mitgliedURLParam.get("id");

    if (mitgliedID) {
        fetch(`http://localhost:8000/api/mitglieder/${mitgliedID}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                idField.value = data.id;
                firstnameField.value = data.vorname;
                lastnameField.value = data.nachname;
                ageField.value = data.alter;
            });
    }
});

function editMitglied() {
    if (idField.value) {
      updatedMitglied = {
        id: idField.value,
        vorname: firstnameField.value,
        nachname: lastnameField.value,
        alter: ageField.value,
      };
   
      fetch(`http://127.0.0.1:8000/api/mitglieder/${updatedMitglied.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedMitglied),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(
            `Der Student ${updatedMitglied.vorname} wurde erfolgreich bearbeitet`
          );
          window.location.href = "./dashboard.html";
        });
    } else {
      addMitglied();
    }
   
    return false;
  }

function addMitglied() {
    const NEWMITGLIED = {
      id: idField.value,
      vorname: firstnameField.value,
      nachname: lastnameField.value,
      alter: ageField.value,
    };
   
    fetch(`http://127.0.0.1:8000/api/mitglieder/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(NEWMITGLIED),
    })
      .then((response) => response.json())
      .then(
        alert(
          `Das Mitglied ${NEWMITGLIED.vorname} wurde erfolgreich zur Liste hinzugefügt!!!`
        ),
        (window.location.href = "./dashboard.html")
      );
  }