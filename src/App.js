import React from 'react';
import './App.scss';
import MainForm from './components/MainForm'
import Button from './components/Button'
import ListItems from './components/ListItems'
import MainTable from './components/MainTable'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      knapsackWeight: '',
      indexEditItem:'',
      formEditItem: {
        itemWeight: '',
        itemValue: '',
        itemTotal: '',
      },
      listItems:[],
    }
  }

  handleFormAddItem = (item) => {
    this.setState({
      listItems: [...this.state.listItems, item]
    })
  }

  handleFormSaveWeight = (weight) => {
    this.setState({
      knapsackWeight: weight
    },()=>{
      // console.log('this.state.knapsackWeight')
      // console.log(this.state.knapsackWeight)
    })
  }

  render() {
    return (
      <main>
        <h1>Problema da Mochila</h1>
        <MainForm 
          addItem={this.handleFormAddItem} 
          saveKnapsackWeight={this.handleFormSaveWeight}
        />
        <ListItems 
            listItems={this.state.listItems}
        />
        <div className="container-btn-solution">
          <Button isSucess />
        </div>
        <MainTable />
      </main>
    );  
  }
}