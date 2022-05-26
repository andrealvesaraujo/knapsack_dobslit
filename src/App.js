import React from 'react';
import './App.scss';
import MainForm from './components/MainForm'
import Button from './components/Button'
import ListItem from './components/ListItem'
import MainTable from './components/MainTable'

export default class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Problema da Mochila</h1>
        <MainForm />
        <ListItem />
        <div className="container-btn-solution">
          <Button isSucess />
        </div>
        <MainTable />
      </main>
    );  
  }
}