import React, { CSSProperties } from 'react'

type TitleProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const Title: React.FC<TitleProps> = ({ children, ...props }) => {

   const titleStyles: CSSProperties = {
      fontSize: 'var(--fs-h2)',
      color: 'var(--color-text-secondary)',
      textAlign: 'left',
      width: '100%',
      fontWeight: 700,
   }

   return (
      <h2 style={{ ...titleStyles, ...props?.style }}>
         {children}
      </h2>
   )
}

export default Title;