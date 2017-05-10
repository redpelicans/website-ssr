import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import CSSTransitionGroup from 'preact-transition-group';

export const transitionedPage = name => WrappedComponent => {
  const TransitionedComponent = props => (
    <CSSTransitionGroup  
      transitionAppear={true} 
      transitionAppearTimeout={500}
      transitionEnterTimeout={500} 
      transitionLeaveTimeout={200} 
      transitionName={name}>
        <WrappedComponent {...props} />
    </CSSTransitionGroup>
  );
  return TransitionedComponent;
};
