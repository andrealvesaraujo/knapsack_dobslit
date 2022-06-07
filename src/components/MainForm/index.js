import React from 'react';
import './MainForm.scss';
import Button from '../Button'
import {Formik, Field, Form} from 'formik';

export default class MainForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            knapsackWeight: '',
            itemWeight: '',
            itemValue: '',
            itemTotal: '',
            errors: {
                knapsackWeight: '',
                itemWeight: '',
                itemValue: '',
                itemTotal: '',
            },
        }
    }

    handleSubmit = (values, formikBag)=>{
        this.setState({
            knapsackWeight: values.knapsackWeight,
            itemWeight: values.itemWeight,
            itemValue: values.itemValue,
            itemTotal: values.itemTotal,
        },()=>{
            const item = { 
                itemWeight:  this.state.itemWeight,
                itemValue:  this.state.itemValue,
                itemTotal:  this.state.itemTotal,
            }
            this.props.addItem(item)
            this.props.saveKnapsackWeight(this.state.knapsackWeight)
            formikBag.resetForm()
        })
    }
    
    handleValidate = (values) => {
        const errors = {};

        const re = /^[0-9\b]+$/;

        if (!values.knapsackWeight) {
            errors.knapsackWeight = 'Campo Obrigatório';
        } else if(!re.test(values.knapsackWeight)){
            errors.knapsackWeight = 'Campo só aceita número';
        }
        
        if (!values.itemWeight) {
            errors.itemWeight = 'Campo Obrigatório';
        }else if(!re.test(values.itemWeight)){
            errors.itemWeight = 'Campo só aceita número';
        }
        
        if (!values.itemValue) {
            errors.itemValue = 'Campo Obrigatório';
        }else if(!re.test(values.itemValue)){
            errors.itemValue = 'Campo só aceita número';
        }

        if (!values.itemTotal) {
            errors.itemTotal = 'Campo Obrigatório';
        }else if(!re.test(values.itemTotal)){
            errors.itemTotal = 'Campo só aceita número';
        }
        

        this.setState({
            ...this.state,
            errors,
        })
        
        return errors;
    }

    render() {
        return (
            <div className="container-form">
                <div>
                    <Formik
                        initialValues={{
                            knapsackWeight: '',
                            itemWeight: '',
                            itemValue: '',
                            itemTotal: '',
                        }}
                        onSubmit={this.handleSubmit}
                        validate={this.handleValidate}
                        validateOnChange={false}
                        validateOnBlur={false}
                    >
                        <Form>
                            <div>
                                <label htmlFor="knapsackWeight">Peso Maximo da Mochila</label>
                                <Field 
                                    id="knapsackWeight" 
                                    name="knapsackWeight" 
                                    placeholder='Peso da mochila' 
                                    autoComplete="off" 
                                />
                                {this.state.errors.knapsackWeight ? <div className="error">{this.state.errors.knapsackWeight}</div> : null}
                            </div>
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
