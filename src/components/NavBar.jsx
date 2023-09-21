

export function NavBar() {
  return( 
    <ul className="rounded-bottom-4 nav bg-primary d-flex p-2 flex-row justify-content-around align-items-center">
      <li className=" header-nav-item nav-item text-center">
        <a className="p-0 nav-link active text-light fs-6" aria-current="page" href="#">Novimebre</a>
      </li>
      <li className="nav-item header-nav-item text-center">
        <a className="p-0  nav-link active text-light fw-bold fs-3" aria-current="page" href="#">Diciembre</a>
      </li>
      <li className="nav-item header-nav-item text-center">
        <a className=" p-0 nav-link active text-light fs-6 " aria-current="page" href="#">Enero</a>
      </li>
    </ul>
 
  )
}