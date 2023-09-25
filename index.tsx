import React, { Component } from 'react';
import { FC, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import styled, { css } from 'styled-components';
import { Icon } from './Icon';

export const App = () => {
  const [state, setState] = useState({
    main: 'green',
  });

  return (
    <div>
      <div className="icons">
        <Icon name="keys" color={state} />
        <Icon name="schema" color={state} />
        <Icon name="keys" color={state} />
        <Icon name="schema" color={state} />
      </div>
      <input
        value={state.main}
        onChange={(e) => setState({ ...state, main: e.target.value })}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
