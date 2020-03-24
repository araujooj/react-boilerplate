import React, { Suspense } from 'react';
import StyledLoading from './style';
import PropTypes from 'prop-types';

export function Loading({ fixed, inline, width, height, wrapperWidth, wrapperHeight }) {
  return (
    <StyledLoading
      fixed={fixed}
      inline={inline}
      loadingWidth={width}
      loadingHeight={height}
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}>
      <div className="wrapper">
        <div className="loader">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </StyledLoading>
  );
}

Loading.propTypes = {
  fixed: PropTypes.bool,
  inline: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  wrapperWidth: PropTypes.number,
  wrapperHeight: PropTypes.number
};

Loading.defaultProps = {
  fixed: true,
  inline: false,
  width: 256,
  height: 256,
  wrapperWidth: 250,
  wrapperHeight: 250
};

export default function loadingComponent(Component) {
  return props => (
    <Suspense fallback={<Loading fixed={false} inline/>}>
      <Component {...props}/>
    </Suspense>
  );
}
