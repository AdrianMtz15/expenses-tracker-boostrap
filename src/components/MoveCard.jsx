import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export function MoveCard({name, mount, type}) {
  return(
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between">
        <p className="w-max fw-semibold m-0">{name}</p>

        <div className="d-flex align-items-center">
          <p 
            className={`text-${type === 'ingreso' ? 'success' : 'danger'} fw-bold m-0 me-2`}>
            {`${type === 'ingreso' ? '+' : '-'}`}${mount}
          </p>
          
          <FontAwesomeIcon className="fs-20" icon={faChevronDown} />
        </div>
      </div>
    </div>
  )
}