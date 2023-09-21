import { useAppContext } from "../context/AppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Balance() {
  const { balance } = useAppContext();

  return(
    <div className="card text-center mb-4">
      <div className="">
        <p className="fs-5 m-0 fw-semibold">Balance del mes</p>
        <p className="fs-1 m-0 fw-bold text-primary">${balance.total}</p>
      </div>

      <div className="card-body d-flex flex-row justify-content-around align-items-center">
        <div className="border-end border-1 border-secondary w-50 d-flex flex-column align-items-center justify-content-center">
          <p className="text-success m-0">Ingresos</p>
          <p className="card-text text-success fw-bold fs-3">{'+'}${balance.ingresos}</p>
        </div>

        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <p className="text-danger m-0">Gastos</p>
          <p className="card-text text-danger fw-bold fs-3">{'-'}${balance.gastos}</p>
        </div>
      </div>

      <div className="">
        <p className="text-secondary m-0">Ver analiticas</p>
        <FontAwesomeIcon className="text-secondary" icon={faChevronDown} />

      </div>
    </div>
  )
}