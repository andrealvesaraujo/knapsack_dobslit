import React from 'react';
import './ListItem.scss';
import Button from '../Button'

export default class ListItem extends React.Component {
  render() {
    return (
        <div className="container-items">
            <h2>Itens Existentes</h2>
            <ol>
              <li>
                Item 1 - 5kg - R$15 - 1 
                <div>
                  <Button isEdit />
                  <Button isDelete />
                </div>
              </li>
              <li>
                Item 2 - 25kg - R$10 - 2 
                <div>
                  <Button isEdit />
                  <Button isDelete />
                </div>
              </li>
              <li>
                Item 3 - 15kg - R$30 - 5 
                <div>
                  <Button isEdit />
                  <Button isDelete />
                </div>
              </li>
            </ol>
        </div>
    )
  }
}
