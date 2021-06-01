//  import React from 'react';

// import { Card as PolarisCard, Spinner } from '@shopify/polaris';

// type Card = React.FC<{ loading?: boolean }>

// export const Card: typeof PolarisCard & Card = (props) => {

//   const { loading, ...rest } = props;

//   const loadingMarkup = (
//     loading &&
//     <div className="absolute w-full h-full top-0 flex justify-center items-center bg-black bg-opacity-40 z-30" style={{ minHeight: '10rem' }}>
//       <Spinner />
//     </div>
//   );

//   return (
//     <div className="relative">
//       <PolarisCard  {...rest} />
//       {loadingMarkup}
//     </div>
//   );
// }

// Card.Header = PolarisCard.Header;
// Card.Section = PolarisCard.Section;
// Card.Subsection = PolarisCard.Subsection;
