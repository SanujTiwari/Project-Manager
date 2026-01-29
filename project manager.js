function addData() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  if (name === "" || age === "" || course === "") {
    alert("Please fill all fields");
    return;
  }

  let tableBody = document.getElementById("tableBody");

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
  `;

  tableBody.appendChild(row);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}