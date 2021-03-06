import React from 'react';
import './MainForm.scss';
import Button from '../Button'
import {Formik, Field, Form} from 'formik';

export default class MainForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemWeight: '',
            itemValue: '',
            itemTotal: '',
            errors: {
                itemWeight: '',
                itemValue: '',
                itemTotal: '',
            },
        }
    }

    handleSubmit = (values, formikBag)=>{
        this.setState({
            itemWeight: values.itemWeight,
            itemValue: values.itemValue,
            itemTotal: values.itemTotal,
        },()=>{
            const item = { 
                itemWeight:  this.state.itemWeight,
                itemValue:  this.state.itemValue,
                itemTotal:  this.state.itemTotal,
            }
            if(this.props.formEditItem.itemWeight){
                this.props.editItem(item)
            } else {
                this.props.addItem(item)
            }
           formikBag.resetForm()
        })
    }
    
    handleValidate = (values) => {
        const errors = {};

        const regexOnlyNumber = /^[0-9\b]+$/;

        
        if (!values.itemWeight) {
            errors.itemWeight = 'Campo Obrigatório';
        }else if(!regexOnlyNumber.test(values.itemWeight)){
            errors.itemWeight = 'Campo só aceita número';
        } else if (values.itemWeight == 0){
            errors.itemWeight = 'Campo só aceita número maior que zero';            
        }
        
        if (!values.itemValue) {
            errors.itemValue = 'Campo Obrigatório';
        }else if(!regexOnlyNumber.test(values.itemValue)){
            errors.itemValue = 'Campo só aceita número';
        } else if (values.itemValue == 0){
            errors.itemValue = 'Campo só aceita número maior que zero';            
        }

        if (!values.itemTotal) {
            errors.itemTotal = 'Campo Obrigatório';
        }else if(!regexOnlyNumber.test(values.itemTotal)){
            errors.itemTotal = 'Campo só aceita número';
        } else if (values.itemTotal == 0){
            errors.itemTotal = 'Campo só aceita número maior que zero';            
        }
        

        this.setState({
            ...this.state,
            errors,
        })
        
        return errors;
    }

    render() {
        // {console.log(this.props.formEditItem)}
        return (
            <div className="container-form">
                <h2 className='form-title'>Item da Mochila</h2>
                <div>
                    <Formik
                        initialValues={{
                            itemWeight: this.props.formEditItem.itemWeight,
                            itemValue: this.props.formEditItem.itemValue,
                            itemTotal: this.props.formEditItem.itemTotal,
                        }}
                        enableReinitialize
                        onSubmit={this.handleSubmit}
                        validate={this.handleValidate}
                        validateOnChange={false}
                        validateOnBlur={false}
                    >
                        <Form>
                            <div>
                                <label htmlFor="itemWeight">Peso do Item</label>
                                <Field 
                                    id="itemWeight" 
                                    name="itemWeight" 
                                    placeholder='Peso do item' 
                                    autoComplete="off" 
                                />
                                {this.state.errors.itemWeight ? <div className="error">{this.state.errors.itemWeight}</div> : null}

                            </div>
                            <div>
                                <label htmlFor="itemValue">Valor do Item</label>
                                <Field 
                                    id="itemValue" 
                                    name="itemValue" 
                                    placeholder='Valor do item' 
                                    autoComplete="off" 
                                />
                                {this.state.errors.itemValue ? <div className="error">{this.state.errors.itemValue}</div> : null}

                            </div>
                            <div>
                                <label htmlFor="itemTotal">Quantidade do Item</label>
                                <Field 
                                    id="itemTotal" 
                                    name="itemTotal" 
                                    placeholder='Quantidade do item' 
                                    autoComplete="off" 
                                />
                                {this.state.errors.itemTotal ? <div className="error">{this.state.errors.itemTotal}</div> : null}
                            </div>
                            <div className="container-btn-item">
                                <Button isAddingItem />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}
