import React, { Component } from 'react'
import { Redirect } from 'react-router';
// import Axios from 'axios';

export default class Login extends Component<{},ILogin> {
    constructor(props: any){
        super(props)
        this.state = {
            email:"",
            password: "",
            redirect: false
        }
    }
    handleSubmit(event: any){
        console.log(event);
        event.preventDefault();
        let user = this.state;
        this.loginUser(user)
    }
    async loginUser(data:any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');               
        let param:any = {
            method: "POST",
            credentials: "include",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({email:data.email,password:data.password})
        }
        try {
            // console.log(param.body);
            // let res = await Axios.post('http://localhost:3001/auth/login',param.body);
            // console.log(res);
            let response = await fetch('/auth/login',param);
            let data = await response.json();
            // var token = response.headers.get('set-cookie');
            // console.log(token);
            console.log('user created information',data);
            localStorage.setItem('userToken',data.tokenData.token);

            // var token = result.headers.get('Set-Cookie');
            // console.log(token);            
            this.setState({redirect:true})
        } catch (error) {
            console.log(error)
            // throw new Error(error);
        }
        
    }
    render() {
        if(this.state.redirect){
            return <Redirect push to="/todolist"/>
        }
        return (
            <div>
                <h1>Login page</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="email" placeholder="email" onChange= {event => this.setState({email: event.target.value}) }/>
                    <input type="password" placeholder="password" onChange= {event => this.setState({password: event.target.value}) }/>
                    <button type="submit">Login</button>
                </form>
            </div>

        )
    }
}

interface ILogin {
    email: string,
    password : string,
    redirect: boolean
}