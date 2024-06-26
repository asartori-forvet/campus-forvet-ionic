import { ANIMALS_ICONS } from "../../utils/animal-icons";
import { getRandom } from "../../utils/getRandom";
import './NoContentCard.css'

interface NoContentCardProps {
   text?: string;
}

const NoContentCard: React.FC<NoContentCardProps> = ({ text = 'No hay resultados' }) => {

   const image = getRandom(ANIMALS_ICONS)

   return (
      <div className="NoContentCard-main-container">
         <img className="NoContentCard--image" src={image} alt="animal" />
         <p className="NoContentCard--text">{text}</p>
      </div>
   )
}

export default NoContentCard