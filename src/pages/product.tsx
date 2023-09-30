
import { Single } from "../components/singles/single"
import { singleProduct } from "../components/data/data"
export const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  )
}
