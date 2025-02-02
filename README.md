# Amigo Secreto - Projeto em JavaScript

## **Descrição do Projeto**
Este projeto é um sorteador de amigo secreto desenvolvido em JavaScript. O objetivo principal é aplicar conceitos de lógica de programação, como uso de variáveis, arrays, funções e manipulação do DOM, para criar uma aplicação interativa onde os usuários podem:

1. Adicionar nomes de participantes.
2. Sortear um amigo secreto aleatório entre os participantes.
3. Exibir o resultado do sorteio na interface.

O HTML e o CSS já estão preparados, permitindo que o foco seja na lógica em JavaScript.

---

## **Funcionalidades**

1. **Adicionar Participantes:** Os nomes são adicionados a um array por meio de um campo de entrada.
2. **Sorteio do Amigo Secreto:** Um participante é sorteado aleatoriamente.
3. **Exibição do Resultado:** O nome do sorteado é exibido na interface.


---

## **Como Usar o Projeto**

### **Passo 1:** Abrir o arquivo HTML no navegador
Abra o arquivo `index.html` no navegador para visualizar a interface da aplicação.

### **Passo 2:** Adicionar participantes
Digite os nomes dos participantes no campo de entrada e clique no botão "Adicionar". Cada nome será armazenado na lista interna do programa.

### **Passo 3:** Realizar o sorteio
Clique no botão "Sortear" para sortear aleatoriamente um dos participantes. O nome sorteado será exibido na tela.


---

## **Explicação Técnica**

O código JavaScript possui as seguintes funções principais:

### **Funções Principais**
1. `adicionarAmigo()`
   - Adiciona o nome do participante ao array `participantes`.
   - Incrementa o contador de nomes registrados.

2. `limparCampo()`
   - Limpa o campo de entrada de texto após adicionar um nome.

3. `sortearAmigo()`
   - Realiza a lógica do sorteio e chama a função `fimDoJogo()` para exibir o resultado.

4. `fimDoJogo()`
   - Sorteia aleatoriamente um participante do array e exibe o resultado na interface.

.

### **Lógica do Sorteio**

- O sorteio é realizado com a função:
  ```javascript
  let resultado = participantes[Math.floor(Math.random() * participantes.length)];
  ```
  Isso escolhe um índice aleatório dentro do array `participantes`.

- O resultado é exibido na interface usando:
  ```javascript
  let final = document.querySelector('.section-title');
  final.innerHTML = (`O sorteado foi ${resultado}`);
  ```

