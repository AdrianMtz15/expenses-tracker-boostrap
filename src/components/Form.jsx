import { useAppContext } from "../context/AppContext";

export function Form({handleInvalidInputs}) {
  const { formData, setFormData } = useAppContext();

  const validateInput = (e) => {
    if(e.target.value.length <= 0) {
      e.target.classList.add(['is-invalid'])
      handleInvalidInputs(true);
    } else {
      e.target.classList.remove(['is-invalid']);
      handleInvalidInputs(false);
    }
  }

  return(
    <form className="row g-3 needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <div className="input-group">
          <input 
            required
            type="text" 
            className="form-control is-invalid" 
            id="nombre" 
            aria-describedby="basic-addon3 basic-addon4"
            value={formData.name}
            onChange={(e) => {
              validateInput(e)
              setFormData({
                ...formData,
                name: e.target.value
              })
            }}
          />

          <div id="validateName" className="invalid-feedback">
            Favor de llenar el campo.
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label">Cantidad</label>
        <div className="input-group">
          <input 
            required
            type="number" 
            className="form-control" 
            id="cantidad" 
            aria-describedby="basic-addon3 basic-addon4"
            value={formData.mount}
            onChange={(e) => {
              validateInput(e)
              setFormData({
                ...formData,
                mount: e.target.value
              })
            }}
          />
          <div id="validateMount" className="invalid-feedback">
            Favor de llenar el campo.
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">Tipo de Movimiento</label>

        <select 
          id="tipo" 
          required
          className="form-select" 
          aria-label="Default select example"
          value={formData.type}
          onChange={(e) => {
            setFormData({
              ...formData,
              type: e.target.value
            })
          }}
        >
          <option value="ingreso" className="active-bg-primary">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
      </div>


    </form>

  )
}