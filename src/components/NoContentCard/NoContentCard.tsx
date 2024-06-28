import { useEffect, useState } from "react";
import { useIsMount } from "../../hooks/useIsMount";
import { ANIMALS_ICONS } from "../../utils/animal-icons";
import { getRandom } from "../../utils/getRandom";
import './NoContentCard.css'
import { IonSkeletonText } from "@ionic/react";

interface NoContentCardProps {
   text?: string;
}

const NoContentCard: React.FC<React.PropsWithChildren<NoContentCardProps>> = ({ text, children }) => {
   const isMount = useIsMount()
   const [image, setImage] = useState(null)

   useEffect(() => {
      if(!isMount) return
      
      setImage(getRandom(ANIMALS_ICONS))

   }, [isMount])

   return (
      <div className="NoContentCard-main-container">
         {image 
            ? <img className="NoContentCard--image" src={image} alt="animal" /> 
            : <IonSkeletonText
               animated
               style={{width: '200px', height: '250px', borderRadius: 'var(--border-radius-md)'}}
            />
         }
         {text && <p className="NoContentCard--text">{text}</p>}
         {children}
      </div>
   )
}

export default NoContentCard