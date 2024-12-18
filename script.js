const prestiges = {
    "marca": "Prestige",
    "produtos": [
      {
        "id": 1,
        "nome": "Éclat d'Or",
        "preco": 350.00,
        "imagem": "Éclat d'Or.jpeg",
        "descricao": "Um perfume opulento com notas de jasmim e âmbar."
      },
      {
        "id": 2,
        "nome": "Nuit Étoilée",
        "preco": 380.00,
        "imagem": "Nuit Étoilée.jpeg",
         "descricao":"Uma fragrância misteriosa com toques de patchouli e baunilha."
      },
      {
        "id": 3,
        "nome": "Rose Impériale",
        "preco": 360.00,
        "imagem": "Rose Impériale.jpeg",
         "descricao": "Um perfume floral sofisticado com notas de rosa damascena."
      },
        {
        "id": 4,
        "nome": "Bois de Saphir",
        "preco": 390.00,
        "imagem": "Bois de Saphir.jpeg",
         "descricao":"Uma fragrância amadeirada com notas de sândalo e vetiver."
      }
    ]
  };
  
  const elegances = {
    "marca": "Elegance",
    "produtos": [
      {
        "id": 5,
        "nome": "Brise d'Été",
        "preco": 180.00,
        "imagem": "Brise d'Été.jpg",
         "descricao": "Um perfume fresco com notas cítricas e florais leves."
      },
      {
        "id": 6,
        "nome": "Cœur de Violette",
        "preco": 200.00,
        "imagem": "Cœur de Violette.jpg",
         "descricao": "Um perfume delicado com notas de violeta e almíscar."
      },
      {
        "id": 7,
        "nome": "Ambre Doux",
        "preco": 190.00,
        "imagem": "Ambre Doux.jpg",
         "descricao": "Um perfume quente e envolvente com notas de âmbar e especiarias."
      },
      {
        "id": 8,
        "nome": "Jardin Secret",
        "preco": 210.00,
        "imagem": "Jardin Secret.jpeg",
         "descricao": "Um perfume floral com notas de peônia e lírio-do-vale."
      }
    ]
  };
  
  const vitalitys = {
      "marca": "Vitality",
    "produtos": [
      {
        "id": 9,
        "nome": "Aqua Marine",
        "preco": 90.00,
        "imagem": "Aqua Marine.jpeg",
        "descricao": "Um perfume refrescante com notas marinhas e cítricas."
      },
       {
        "id": 10,
        "nome": "Fleur de Soleil",
        "preco": 110.00,
        "imagem": "Fleur de Soleil.jpeg",
         "descricao": "Um perfume alegre com notas de flores amarelas e frutadas."
      },
      {
        "id": 11,
        "nome": "Bois d'Épice",
        "preco": 100.00,
        "imagem": "Bois d'Épice.jpeg",
         "descricao": "Um perfume energizante com notas de madeira e especiarias."
      },
       {
        "id": 12,
        "nome": "Framboise Intense",
        "preco": 120.00,
        "imagem": "Framboise Intense.jpeg",
         "descricao": "Um perfume vibrante com notas de framboesa e frutas vermelhas."
      }
    ]
  };
  
  
  let carrinho = [];
  
  function criarCarousel(data, sectionId) {
      const carouselContainer = document.querySelector(`#${sectionId} .carousel`);
      data.produtos.forEach(produto => {
          const produtoDiv = document.createElement('div');
          produtoDiv.classList.add('produto');
          produtoDiv.innerHTML = `
              <img src="${produto.imagem}" alt="${produto.nome}">
              <h3>${produto.nome}</h3>
              <p>R$ ${produto.preco.toFixed(2)}</p>
              <button data-id="${produto.id}" data-preco="${produto.preco}" data-nome="${produto.nome}"  data-descricao="${produto.descricao}" >Adicionar ao Carrinho</button>
          `;
          carouselContainer.appendChild(produtoDiv);
      });
  }
  
  function atualizarCarrinhoHTML() {
      const listaCarrinho = document.getElementById('lista-carrinho');
      const valorTotalSpan = document.getElementById('valor-total');
      listaCarrinho.innerHTML = '';
      let total = 0;
       carrinho.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `
             <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
             <button data-id="${item.id}" class="remover-item">Remover</button>
          `;
          listaCarrinho.appendChild(li);
          total += item.preco;
      });
      valorTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
  }
  
  function adicionarAoCarrinho(event) {
     const button = event.target;
     const id = parseInt(button.dataset.id);
      const nome = button.dataset.nome;
      const preco = parseFloat(button.dataset.preco);
      const descricao = button.dataset.descricao;
      carrinho.push({ id, nome, preco, descricao});
      atualizarCarrinhoHTML();
  }
  
  function removerDoCarrinho(event){
    const button = event.target;
    const id = parseInt(button.dataset.id);
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinhoHTML();
  }
  
  // Inicialização
  criarCarousel(prestiges, 'prestige');
  criarCarousel(elegances, 'elegance');
  criarCarousel(vitalitys, 'vitality');
  
  document.querySelectorAll('.produto button').forEach(button => {
      button.addEventListener('click', adicionarAoCarrinho);
  });
  document.querySelector('#lista-carrinho').addEventListener('click',function (event) {
     if (event.target.classList.contains('remover-item')) {
        removerDoCarrinho(event);
      }
  });