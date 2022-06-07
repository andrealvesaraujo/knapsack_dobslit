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

  handleDeleteItem = (idx) => {
    const {listItems} = this.state
    const filteredListItems = listItems.filter((item, itemIdx) => itemIdx !== idx)

    this.setState({
      ...this.state,
      listItems: filteredListItems
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
            onDelete={this.handleDeleteItem}
        />
        <div className="container-btn-solution">
          <Button isSucess />
        </div>
        <MainTable />
      </main>
    );  
  }
}