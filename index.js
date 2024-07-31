function calcular() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);

  if (isNaN(nota1) || isNaN(nota2)) {
    alert('Insira valores válidos para as notas.');
    return;
  }
  
  const media = (nota1 + nota2) / 2;
  alert(`A média é: ${media}`);

  document.getElementById('nota1').value = '';
  document.getElementById('nota2').value = '';
}
