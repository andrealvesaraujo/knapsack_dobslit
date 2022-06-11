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
      knapsackWeightInput: '',
      knapsackWeight: '',
      knapsackWeightError: '',
      indexEditItem:'',
      formEditItem: {
        itemWeight: '',
        itemValue: '',
        itemTotal: '',
      },
      listItems:[],
      solutionError: '',
      solutionList: []
    }
  }

  handleFormAddItem = (item) => {
    this.setState({
      listItems: [...this.state.listItems, item]
    })
  }

  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleUpdateKnapsackWeight = () => {

    let knapsackWeightError;

    const regexOnlyNumber = /^[0-9\b]+$/;

    if (!this.state.knapsackWeightInput) {
        knapsackWeightError = 'Campo Obrigatório';
    } else if(!regexOnlyNumber.test(this.state.knapsackWeightInput)){
        knapsackWeightError = 'Campo só aceita número';
    }

    if(knapsackWeightError){
      this.setState({
        ...this.state,
        knapsackWeightError
      })
      return
    }

    this.setState({
      ...this.state,
      knapsackWeight: this.state.knapsackWeightInput,
      knapsackWeightInput: '',
      knapsackWeightError: ''
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

  getSolution = () => {

    let solutionError = '';
    let solutionList = [];

    if(!this.state.knapsackWeight){
      solutionError = "O peso da Mochila é obrigatório"
    } else if(this.state.listItems.length === 0 ){
      solutionError = "A lista de itens são obrigatórios"
    }     

    if(!solutionError){
      solutionList = [
        {totalWeight: 10, totalValue:5 , totalItems: 3, item1:1 , item2: 1, item3: 1},
        {totalWeight: 10, totalValue:5 , totalItems: 3, item1:1 , item2: 1, item3: 1},
        {totalWeight: 5, totalValue:15 , totalItems: 10, item1:5 , item2: 4, item3: 1}
      ]
    }

    this.setState({
      ...this.state,
      solutionError,
      solutionList,
      tableListItems: this.state.listItems,
      tableknapsackWeight: this.state.knapsackWeight,
    }, ()=>{
      console.log(this.state)
    })
  }

  render() {
    return (
      <main>
        <h1>Problema da Mochila</h1>
        <div className="container-knapsackWeight">
            <label htmlFor="knapsackWeight">Peso da Mochila</label>
            <input 
                id="knapsackWeightInput" 
                name="knapsackWeightInput" 
                placeholder='Peso da mochila' 
                autoComplete="off"
                value={this.state.knapsackWeightInput} 
                onChange={this.handleInputChange}
            />
            {this.state.knapsackWeightError? <div className="error">{this.state.knapsackWeightError}</div> : null}
            <div className="container-btn-update-weight">
              <Button isUpdatingWeight onClick={this.handleUpdateKnapsackWeight} />
            </div>
            { this.state.knapsackWeight
              ? 
                <div className='text-result'>Peso da mochila: {this.state.knapsackWeight}kg</div> 
              : 
                <div className='text-result'>Peso da mochila não foi definido</div> 
            }
        </div>
        <MainForm 
          addItem={this.handleFormAddItem} 
        />
        <ListItems 
            listItems={this.state.listItems} 
            onEdit={this.handleEditItem}
            onDelete={this.handleDeleteItem}
        />
        <div className="container-btn-solution">
          <Button onClick={this.getSolution} isSucess />
          {this.state.solutionError && (
            <div>{this.state.solutionError}</div>)
          }
        </div>
        {this.state.solutionList && this.state.solutionList.length > 0 && (
          <MainTable tableListItems={this.state.tableListItems} solutionList={this.state.solutionList} tableknapsackWeight={this.state.tableknapsackWeight}/>
        )}
       
      </main>
    );  
  }
}