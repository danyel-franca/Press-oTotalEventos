// --- PERMITIR APENAS 1 CHECKBOX SELECIONADO ---
const checkboxes = document.querySelectorAll('input[name="tipo-evento"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            checkboxes.forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

// --- FUNÇÃO DO WHATSAPP ---
function enviarParaWhatsApp() {
    const numeroWhatsApp = "5521998578534"; 
    
    // Dados obrigatórios
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value.trim();
    const local = document.getElementById("local").value.trim();
    
    if (!nome || !email || !data || !local) {
        alert("🚨 Por favor, preencha todos os campos obrigatórios (Nome, Email, Data e Local).");
        return; 
    }

    // Dados opcionais
    const nomeFesta = document.getElementById("nome-festa").value.trim() || "(Não informado)";
    const comentarios = document.getElementById("comentarios").value.trim() || "Nenhum comentário adicional.";

    // Coleta de apenas um tipo de evento
    const tipoSelecionado = document.querySelector('input[name="tipo-evento"]:checked');
    const tiposEventoTexto = tipoSelecionado ? tipoSelecionado.value : "Nenhum tipo de evento selecionado.";

    // Mensagem formatada
    let mensagem = `*🚨 NOVO PEDIDO DE ORÇAMENTO 🚨*\n\n`;
    mensagem += `*Nome do Cliente:* ${nome}\n`;
    mensagem += `*Email:* ${email}\n`;
    mensagem += `*Nome do Festante:* ${nomeFesta}\n`;
    mensagem += `---\n`; 
    mensagem += `*Data do Evento:* ${data}\n`;
    mensagem += `*Local:* ${local}\n`;
    mensagem += `*Tipo de Evento:* ${tiposEventoTexto}\n`;
    mensagem += `---\n`;
    mensagem += `*Observações:*\n${comentarios}`;
    
    // Envio
    const urlFinal = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(urlFinal, '_blank');
}
