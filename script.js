document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const Dose = parseFloat(document.getElementById("Dose").value);
  const field_weight = parseFloat(document.getElementById("field_weight").value);
  const total_weight = parseFloat(document.getElementById("total_weight").value);
  const X = parseFloat(document.getElementById("X").value);
  const Y = parseFloat(document.getElementById("Y").value);
  const wedge = parseFloat(document.getElementById("wedge").value);
  const tray = parseFloat(document.getElementById("tray").value);
  const Baseplate = parseFloat(document.getElementById("Baseplate").value);
  const pdd = parseFloat(document.getElementById("pdd").value);
  const Output = parseFloat(document.getElementById("Output").value);

  // Calculate dose per field
  const dose_field = (Dose * field_weight) / total_weight;

  // Equivalent field size
  const efs = (2 * X * Y) / (X + Y);
  const temp = Math.floor(efs);
  const varr = efs - temp;

  let a = 0;
  if (varr >= 0 && varr < 0.25) a = 0;
  else if (varr >= 0.25 && varr < 0.74) a = 0.5;
  else a = 1;

  const approx_field = temp + a;

  // Treatment time
  const time = dose_field / (Output * pdd * wedge * tray * Baseplate);

  // Show results
  const resultCard = document.getElementById("resultCard");
  resultCard.classList.remove("hidden");
  document.getElementById("efs").textContent = `Equivalent field size: ${efs.toFixed(2)} cm`;
  document.getElementById("approx_field").textContent = `Approximated field size: ${approx_field.toFixed(1)} cm`;
  document.getElementById("treatment_time").textContent = `Treatment Time: ${time.toFixed(2)} minutes (approx)`;
});
