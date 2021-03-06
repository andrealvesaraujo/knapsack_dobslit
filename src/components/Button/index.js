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
      isUpdatingWeight: this.props.isUpdatingWeight,
    }
  }

  render() {
    return (
      <>
      {this.state.isUpdatingWeight && (
          <button className="btn-sucess" onClick={this.props.onClick}>Atualizar peso</button>
      )}
      {this.state.isAddingItem && (
          <button type="submit" className="btn-sucess">Adicionar Item</button>
      )}
      {this.state.isSucess && (
          <button className="btn-sucess" onClick={this.props.onClick}>Solucionar Problema</button>
      )}
      {this.state.isEdit && (
          <button className="btn-edit" onClick={this.props.onClick}>Editar</button>
        )
      }
      {this.state.isDelete && (
          <button className="btn-alert" onClick={this.props.onClick}>Deletar</button>
        )
      }
      </>
    )
  }
}
