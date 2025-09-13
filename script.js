document.getElementById('calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const width = parseFloat(document.getElementById('width').value);
  const length = parseFloat(document.getElementById('length').value);
  const projectType = document.getElementById('project-type').value;
  const materialQuality = document.getElementById('material-quality').value;
  const laborPercent = parseFloat(document.getElementById('labor-percent').value);

  if (!width || !length || !projectType || !materialQuality || !laborPercent) {
    alert('Please fill in all fields');
    return;
  }

  const area = width * length;

  // Example cost per sqft matrix
  const costMatrix = {
    kitchen: { basic: 100, standard: 150, premium: 200 },
    bathroom: { basic: 80, standard: 120, premium: 160 },
    livingroom: { basic: 50, standard: 90, premium: 130 },
    bedroom: { basic: 40, standard: 70, premium: 100 },
    roofing: { basic: 60, standard: 100, premium: 150 },
    painting: { basic: 20, standard: 35, premium: 50 },
    flooring: { basic: 30, standard: 60, premium: 100 }
  };

  const rate = costMatrix[projectType][materialQuality];
  const materialCost = area * rate;
  const laborCost = (materialCost * laborPercent) / 100;
  const totalCost = materialCost + laborCost;

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h2>Estimated Cost</h2>
    <p><strong>Area:</strong> ${area.toFixed(2)} sq.ft</p>
    <p><strong>Material Cost:</strong> $${materialCost.toFixed(2)}</p>
    <p><strong>Labor Cost:</strong> $${laborCost.toFixed(2)}</p>
    <p><strong>Total Estimated Cost:</strong> $${totalCost.toFixed(2)}</p>
  `;
});
