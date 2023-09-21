import { useAppContext } from "../context/AppContext"
import { MoveCard } from "./MoveCard";

export function MoveList() {
  const {
    moves
  } = useAppContext();

  return(
    <div className="mb-5">
      <p className="m-1 fw-bold">Hoy - 6 Dic.</p>
      {
        moves?.map(item => {
          return(
            <MoveCard 
              key={item.id} 
              name={item.name} 
              mount={item.mount} 
              type={item.type}
            />
          )
        })
      }
    </div>
  )
}