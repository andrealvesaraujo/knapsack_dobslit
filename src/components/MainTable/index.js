import React from 'react';
import './MainTable.scss';

export default class MainTable extends React.Component {
  render() {
    return (
        <div className="container-table">
          <h2>Tabela Do Resultado</h2>
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
    )
  }
}
