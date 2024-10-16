async function carregarClientes() {
    try {
      const response = await fetch('https://localhost:7251/api/clientes');
      const clientes = await response.json();
  
      const clientesDiv = document.getElementById('clientes');
      clientesDiv.innerHTML = ''; // Limpa o conteúdo anterior
  
      clientes.forEach(cliente => {
        const clienteDiv = document.createElement('div');
        clienteDiv.classList.add('cliente');
        clienteDiv.innerHTML = `
          <h3>${cliente.nome}</h3>
          <p>Email: ${cliente.email}</p>
          <p>Telefone: ${cliente.telefone}</p>
        `;
        clientesDiv.appendChild(clienteDiv);
      });
    } catch (error) {
      console.error('Erro ao carregar os clientes:', error);
    }
  }
  