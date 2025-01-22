// Interceptando o envio do formulário
const form = document.getElementById('formRegistro');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Capturando os dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Exibindo os dados no console (pode enviar ao servidor aqui)
    console.log(data);

    // Enviando os dados ao servidor
    fetch(form.action, {
        method: form.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Resultado:', result);
            alert('Usuário registrado com sucesso!');
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao registrar usuário.');
        });
});