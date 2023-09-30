
import { Single } from "../components/singles/single"
import { singleUser } from "../components/data/data"
export const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  )
}
