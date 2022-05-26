import React from 'react';
import './Button.scss';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSucess: this.props.isSucess,
      isEdit: this.props.isEdit,
      isDelete: this.props.isDelete,
      isAddingItem: this.props.isAddingItem,
    }
  }

  render() {
    return (
      <>
      {this.state.isAddingItem && (
          <button className="btn-sucess">Adicionar Item</button>
      )}
      {this.state.isSucess && (
          <button className="btn-sucess">Solução do Problema</button>
      )}
      {this.state.isEdit && (
          <button className="btn-edit">Editar</button>
        )
      }
      {this.state.isDelete && (
          <button className="btn-alert">Deletar</button>
        )
      }
      </>
    )
  }
}