import React from 'react';
import './MainTable.scss';

export default class MainTable extends React.Component {

  render() {
    return (
        <div className="container-table">
          <h2>Resultados para Mochila de {this.props.tableknapsackWeight}Kg</h2>
          <table>
            <thead>
              <tr>
                <th>Peso</th>
                <th>Valor</th>
                <th>Total</th>
                {this.props.tableListItems && this.props.tableListItems.map((result, idx) => 
                  <th key={`keyTh_${idx}`}>
                    Qtd Item {idx+1}
                  </th>
              )}
              </tr>          
            </thead>
            <tbody>
              {this.props.solutionList && this.props.solutionList.map((result, idx) => 
                <tr key={`keyTr_${idx}`}>
                  <td>10kg</td>
                  <td>R$10</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    )
  }
}
