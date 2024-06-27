import { ANIMALS_ICONS } from "../../utils/animal-icons";
import { getRandom } from "../../utils/getRandom";
import './NoContentCard.css'

interface NoContentCardProps {
   text?: string;
}

const NoContentCard: React.FC<React.PropsWithChildren<NoContentCardProps>> = ({ text, children }) => {

   const image = getRandom(ANIMALS_ICONS)

   return (
      <div className="NoContentCard-main-container">
         <img className="NoContentCard--image" src={image} alt="animal" />
         {text && <p className="NoContentCard--text">{text}</p>}
         {children}
      </div>
   )
}

export default NoContentCard