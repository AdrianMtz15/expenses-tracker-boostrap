import { useAppContext } from "../context/AppContext";

export function Form() {
  const { formData, setFormData } = useAppContext();

  return(
    <>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            aria-describedby="basic-addon3 basic-addon4"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value
              })
            }}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label">Cantidad</label>
        <div className="input-group">
          <input 
            type="number" 
            className="form-control" 
            id="cantidad" 
            aria-describedby="basic-addon3 basic-addon4"
            value={formData.mount}
            onChange={(e) => {
              setFormData({
                ...formData,
                mount: e.target.value
              })
            }}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">Tipo de Movimiento</label>

        <select 
          id="tipo" 
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


    </>

  )
}