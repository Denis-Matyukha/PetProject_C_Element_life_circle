import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App = () => {
  console.log(`test_clg`);
  console.log(`s↓`);
  console.log(s);

  return <div className={cn(s.header, 'underline')}>App component =^_^=</div>;
};

export default App;
