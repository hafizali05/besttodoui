import React, { Component } from 'react'
import { Redirect } from 'react-router';
export default class Registration extends Component<{},IState> {
    constructor(props : {}){
        super(props);

        this.state = {
            name:"",
            email: "",
            password: "",
            redirect: false
        }
    }
    handleSubmit(event: any){
        console.log(event);
        event.preventDefault();
        let user = this.state;
        this.registerUser(user)
    }
    async registerUser(user:any){
        let pararms = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }        
        try {
            let response = await fetch('/auth/register',pararms);
            // let data = await response.json();
            console.log('response.ok',response.ok);
            this.setState({redirect:true})
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        if(this.state.redirect){
            return <Redirect push to="/todolist"/>
        }
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="name" onChange= {event => this.setState({name: event.target.value}) } />
                    <input type="email" placeholder="email" onChange= {event => this.setState({email: event.target.value}) }/>
                    <input type="password" placeholder="password" onChange= {event => this.setState({password: event.target.value}) }/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

interface IState {
    name: string,
    email: string,
    password: string,
    redirect : Boolean
}