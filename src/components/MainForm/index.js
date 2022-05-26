import React from 'react';
import './MainForm.scss';
import Button from '../Button'

export default class MainForm extends React.Component {
  render() {
    return (
        <div className="container-form">
            <div>
                <form>
                    <div>
                        <label for="knapsack-weight">Peso Maximo Mochila</label>
                        <input autocomplete="off" type="text" name="knapsack-weight" placeholder='Peso da mochila'/>
                    </div>
                    <div>
                        <label for="item-weight">Peso do Item</label>
                        <input autocomplete="off" type="text" name="item-weight" placeholder='Peso do item'/>
                    </div>
                    <div>
                        <label for="item-value">Valor do Item</label>
                        <input autocomplete="off" type="text" name="item-value" placeholder='Valor do item'/>
                    </div>
                    <div>
                    <label for="item-total">Quantidade do Item</label>
                        <input autocomplete="off" type="text" name="item-total" placeholder='Quantidade do item'/>
                    </div>
                    <div className="container-btn-item">
                        <Button isAddingItem />
                    </div>
                </form>
            </div>
        </div>
    )
  }
}
