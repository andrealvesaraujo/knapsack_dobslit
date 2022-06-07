import React from 'react';
import './ListItems.scss';
import Button from '../Button'

export default class ListItems extends React.Component {

  render() {
    return (
        <div className="container-items">
          {this.props.listItems && this.props.listItems.length > 0 ? (
              <>
                <h2>Itens Existentes para a Mochila</h2>
                <ol>
                  {this.props.listItems.map((item, idx) => 
                    <li key={`item_${idx}`}>
                      Item {idx + 1} - {item.itemWeight}kg - R${item.itemValue} - {item.itemTotal}
                      <div>
                        <Button isEdit/>
                        <Button isDelete onClick={() => this.props.onDelete(idx)}/>
                      </div>
                    </li>
                  )}
                </ol>
              </>
          ) : (
              <>
                <h2>Não há opções de itens para a mochila</h2>
                <h3>Adicione um item no formulário acima</h3>
              </>
          )}
        </div>
    )
  }
}
