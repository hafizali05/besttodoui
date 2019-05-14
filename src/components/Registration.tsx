import React, { Component } from 'react'
export default class Registration extends Component {
    constructor(props : {}){
        super(props);

        this.state = {
            name:"",
            email: "",
            password: ""
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
            const result = fetch('/auth/register',pararms);
            const Json = await result;
            console.log(Json);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="name" onChange= {event => this.setState({name: event.target.value}) } />
                    <input type="email" placeholder="email" onChange= {event => this.setState({name: event.target.value}) }/>
                    <input type="password" placeholder="password" onChange= {event => this.setState({name: event.target.value}) }/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}