import React from 'react';
import Category from '../category/Category';
import './Root.scss';
import Logo from '../../components/Logo';

export default function App() {

  return (
    <div>
      <header className="header">
          <Logo />
      </header>
      <div className="container">
        <div className="content">
          <Category />
        </div>
      </div>
    </div>
  );
}
