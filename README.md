# Todo List React App

Este projeto é uma aplicação de lista de tarefas (Todo List) desenvolvida em React com TypeScript, utilizando Styled Components para estilização e persistência de dados no `localStorage`. O objetivo é fornecer uma experiência moderna, responsiva e com suporte a temas claro/escuro.

## Funcionalidades

- Adicionar, marcar como concluída e remover tarefas
- Confirmação visual antes de remover tarefas
- Persistência automática das tarefas e do tema no navegador
- Alternância entre tema claro e escuro
- Interface responsiva e moderna

## Tecnologias e Ferramentas Utilizadas

- **React 19**: Biblioteca principal para construção da interface de usuário.
- **TypeScript**: Tipagem estática para maior robustez e manutenção do código.
- **Styled Components**: Estilização baseada em componentes, com suporte a temas dinâmicos.
- **Lucide React**: Ícones SVG modernos e leves.
- **Jest + Testing Library**: Testes unitários e de integração para componentes React.
- **LocalStorage**: Persistência dos dados do usuário no navegador.
- **Create React App**: Ferramenta de scaffolding para projetos React.

## Instalação

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/bdancost/todo_react_ts.git
   cd todo

   ```

2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm start

Acesse http://localhost:3000 no navegador.

Scripts Disponíveis
npm start: Inicia o servidor de desenvolvimento.
npm run build: Gera a versão de produção na pasta build.
npm test: Executa os testes automatizados.
Como Usar
Adicionar Tarefa: Digite o nome da tarefa e pressione Enter.
Marcar como Concluída: Clique na caixa de seleção ao lado da tarefa.
Remover Tarefa: Clique no ícone de lixeira e confirme a remoção.
Alternar Tema: Use o botão no topo para alternar entre claro e escuro.
Detalhes Técnicos
O estado das tarefas é armazenado em um array de objetos do tipo Item.
O tema é controlado via ThemeProvider do Styled Components, alternando entre lightTheme[ e ](http://_vscodecontentref_/6)darkTheme.
A persistência é feita via localStorage, tanto para as tarefas quanto para a preferência de tema.
O componente ListItem possui modal de confirmação para remoção, garantindo melhor UX.
Testes
Os testes estão localizados em arquivos .test.tsx e utilizam Testing Library para simular interações do usuário.

npm test

Personalização
Temas: Edite App.styles.ts para alterar cores e estilos globais.
Tipos: Modifique Item.ts para adicionar novos campos às tarefas.
