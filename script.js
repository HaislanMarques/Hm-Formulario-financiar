async function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const interesse = document.getElementById('interesse').value;
  const mensagem = document.getElementById('mensagem').value;
  doc.setFontSize(16);
  doc.text("Formulário de Interesse – HM Imóveis", 20, 20);
  doc.setFontSize(12);
  doc.text(`Nome: ${nome}`, 20, 40);
  doc.text(`Telefone: ${telefone}`, 20, 50);
  doc.text(`E-mail: ${email}`, 20, 60);
  doc.text(`Interesse: ${interesse}`, 20, 70);
  doc.text("Mensagem:", 20, 80);
  doc.text(mensagem, 20, 90, { maxWidth: 170 });
  doc.save("formulario-hm-imoveis.pdf");
}

function enviarWhatsApp() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const interesse = document.getElementById('interesse').value;
  const mensagem = document.getElementById('mensagem').value;
  const texto = `*Formulário de Interesse – HM Imóveis*%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*E-mail:* ${email}%0A*Interesse:* ${interesse}%0A*Mensagem:* ${mensagem}`;
  const numero = '55SEUNUMERO'; // Substituir
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}
