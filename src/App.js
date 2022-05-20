import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <div class="knapsackForm">
          <h2>Problema da Mochila</h2>
          <div>
            <form>
              <div>
                <label for="knapsack-weight">Peso Maximo Mochila</label>
                <input type="text" name="knapsack-weight" placeholder='Peso da mochila'/>
              </div>
              <div>
                <label for="item-weight">Peso do Item</label>
                <input type="text" name="item-weight" placeholder='Peso do item'/>
              </div>
              <div>
                <label for="item-value">Valor do Item</label>
                <input type="text" name="item-value" placeholder='Valor do item'/>
              </div>
              <div>
                <label for="item-total">Quantidade do Item</label>
                <input type="text" name="item-total" placeholder='Quantidade do item'/>
              </div>
            </form>
            <h3>Lista de Itens Existentes:</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
        <div class="knapsackTable">
          <h2>Tabela</h2>
          <table>
            <thead>
              <tr>
                <th>Peso</th>
                <th>Valor</th>
                <th>Total</th>
              </tr>          
            </thead>
            <tbody>
              <tr>
                <td>10kg</td>
                <td>R$10</td>
                <td>2</td>
              </tr>
              <tr>
                <td>15kg</td>
                <td>R$100</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5kg</td>
                <td>R$5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );  
  }
}