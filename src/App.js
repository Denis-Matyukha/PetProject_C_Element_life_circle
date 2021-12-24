import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Template1 from './components/template_1/index';

const App = () => {
  return (
    <>
      <div className={cn(s.header, 'underline')}>App component =^_^=</div>
      <Template1 />
    </>
  );
};

export default App;
