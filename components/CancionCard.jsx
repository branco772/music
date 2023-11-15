import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {FontAwesomeIcon} from "@fo"
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function CancionCard({cancion}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{cancion.titulo}</h1>
              <div className="space-between">
                <Link href={`/cancion/${cancion._id}/delete`}>
                </Link>
                <Link href={`/cancion/${cancion._id}/update`}>
                </Link>
              </div>
                            
          </div>

  )
}

export default CancionCard