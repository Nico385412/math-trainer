import React, {Component} from 'react';
import {
    Button,  Col, ControlLabel, Form, FormControl, FormGroup, Glyphicon, PageHeader, Panel
} from 'react-bootstrap';
import { firebaseApp } from '../firebase';

// Created by Nicolas on 10/07/2017
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        // console.log('this.state', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({
                    error
                })
            })
    }

    renderError(){
        if (this.state.error.message === '') return '';
        return (
            <Panel bsStyle="danger" header={this.state.error.message}/>
        )
    }

    render() {
        return (
            <Col sm={4} smOffset={4}>
                <PageHeader>Connection à Math-Trainer <Glyphicon style={{float:'right', color: 'purple'}} glyph="education" /></PageHeader>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={event => this.setState({email : event.target.value})}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Mot de passe" onChange={event => this.setState({password : event.target.value})} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        {this.renderError()}
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button style={{backgroundColor : 'purple', color: 'white'}} onClick={() => this.signIn()} >
                                Connection
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        )
    }
}

export default SignIn;