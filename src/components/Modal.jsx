import { Form } from '../components/Form'
import { useAppContext } from "../context/AppContext"

export function Modal() {

  const { createMove, setFormData } = useAppContext();

  const handleOnSubmit = () => {
    createMove();
    setFormData({
      name: '',
      mount: '',
      type: 'ingreso'
    })
  }

  return(
    <>
      <button 
        type="button" 
        className="position-fixed start-0 end-0 bottom-0 m-auto mb-3 w-75 text-light fw-bold btn bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Agregar Movimiento
      </button>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden='true'>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Registrar un nuevo Movimiento</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <Form/>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button 
                data-bs-dismiss="modal"
                type="button" 
                className="btn btn-primary"
                onClick={handleOnSubmit}
              >
                  Registrar Movimiento
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}