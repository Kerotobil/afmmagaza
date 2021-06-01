import React, { AnchorHTMLAttributes } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { Link as ShopifyPolarisLink } from '@shopify/polaris';
import { LinkLikeComponentProps } from '@shopify/polaris/dist/types/latest/src/utilities/link';

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;


function PolarisLink({ children, url = '', external, ref, ...rest }) {
  // react-router only supports links to pages it can handle itself. It does not
  // support arbirary links, so anything that is not a path-based link should
  // use a reglar old `a` tag
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank';
    rest.rel = 'noopener noreferrer';
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  // const target = url.indexOf('/admin') !== 0 ? '_top' : null;
  const target = null;

  return (
    <ReactRouterLink to={url} {...rest} target={target}>
      {children}
    </ReactRouterLink>
  );
}

export default PolarisLink as React.ComponentType<LinkLikeComponentProps>
