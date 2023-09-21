import './App.css'
import * as bootstrap from 'bootstrap'
import { NavBar } from '../components/NavBar'
import { Balance } from '../components/Balance'
import { MoveList } from '../components/MoveList'
import { Modal } from '../components/Modal'

function App() {

  return (
    <>
      <NavBar/>
      <section className='p-2 px-4 mb-4'>
        <Balance/>
        <MoveList/>
      </section>
      <Modal/>
    </>
  )
}

export default App
