const App = () => {
  return (
    <>
      <h1>Contatos</h1>
      <input type="text" placeholder="Nome Completo" />
      <input type="text" placeholder="Telefone" />
      <input type="text" placeholder="Email" />
      <button>Adicionar</button>
      <ul>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
      </ul>
    </>
  )
}

export default App
