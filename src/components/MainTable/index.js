import React from 'react';
import './MainTable.scss';

export default class MainTable extends React.Component {
  render() {
    return (
        <div className="container-table">
          <h2>Resultados para Mochila de 10Kg</h2>
          <table>
            <thead>
              <tr>
                <th>Peso</th>
                <th>Valor</th>
                <th>Total</th>
                <th>Qtd Item 1</th>
                <th>Qtd Item 2</th>
                <th>Qtd Item 3</th>
              </tr>          
            </thead>
            <tbody>
              <tr>
                <td>10kg</td>
                <td>R$10</td>
                <td>2</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>15kg</td>
                <td>R$100</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5kg</td>
                <td>R$5</td>
                <td>5</td>
                <td>2</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}
