import React, { Component } from 'react'
import alertify from "alertifyjs"
import { FormGroup, Label, Input, Button } from 'reactstrap'

export default class FormDemo1 extends Component {
    state = { userName: " ", email: "", password: "", city: "", description: "" }
    onChangeHandler = (event) => {
        // this.setState({ userName: event.target.value })

        let name = event.target.name
        let value = event.target.value

        this.setState({ [name]: value })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " added!!", 2)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for='userName'>User Name</Label>
                        <Input
                            type="userName" id="userName" name="userName" placeholder="Enter userName" onchange={this.onChangeHandler}
                        ></Input>
                    </FormGroup>             <FormGroup>
                        <Label for='email'>E-mail</Label>
                        <Input
                            type="email" id="email" name="email" placeholder="Enter email" onchange={this.onChangeHandler}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type="password" id="password" name="password" placeholder="Enter Password" onchange={this.onChangeHandler}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input
                            type="select" id="city" name="city" placeholder="Enter city" onchange={this.onChangeHandler}>
                                <option>Ankara</option>
                                <option>Istanbul</option>
                                <option>Diyarbakır</option>
                                <option>Van</option>
                                <option>Adana</option>

                            </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input
                            type="textarea" id="description" name="description" placeholder="Enter description" onchange={this.onChangeHandler}
                        ></Input>
                    </FormGroup>
                    <Button type='submit'>Save</Button>
                </form>
            </div>
        )
    }
}


{/* <h3>User Name</h3>
                    <input name='userName' onChange={this.onChangeHandler} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City</h3>
                    <input name='city' onChange={this.onChangeHandler} type="text"></input>
                    <h3>User City is {this.state.city}</h3>
                    <input type="submit" value="save"></input> */}