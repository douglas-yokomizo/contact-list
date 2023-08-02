import { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Contatos</h1>
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      <Modal isOpen={openModal} >
        <h2>Adicionar Contato</h2>
        <input type="text" placeholder="Nome Completo" />
        <input type="phone" placeholder="Telefone" />
        <input type="email" placeholder="Email" />
        <div>
          <button onClick={() => {
            setOpenModal(!openModal)
          }
          }>Salvar</button>
          <button onClick={() => setOpenModal(!openModal)}> Cancelar</button>
        </div>
      </Modal >
      <ul>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
        <li>Joao da Silva <button>Editar</button> <button>Excluir</button></li>
      </ul>
    </>
  )
}

export default App
