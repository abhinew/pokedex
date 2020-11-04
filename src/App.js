import React from 'react';
import './App.css';
import { CitiesContainer } from './containers/CitiesContainer';
import Title from './components/Title';
import DateContainer from './components/DateContainer';

export function App() {
  return (
    <main>
      <Title content="PickMyOffice" />
      <span>Choose office location on</span><DateContainer /><span>from</span><input type="text" name="fromCity"/>
      <CitiesContainer />
    </main>
  )
}

