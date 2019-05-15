import React, { Component } from 'react'
export default class TodoPage extends Component<{}, ITodo> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todolist: [],
            title: "",
            description: ""
        }
    }
    handleSubmit(e: any) {
        e.preventDefault();
        this.addTodo({ title: this.state.title, description: this.state.description });
    }
    async addTodo(data: any) {
        console.log(data);
        let userToken:any = localStorage.getItem("userToken");
        console.log(userToken);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');        
        headers.append('Authorization',userToken)
        let params:any = {
            method: "POST",
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers,
            body: JSON.stringify(data)
            // mode:'no-cors'
        }
        try {
            let response = await fetch('/todos',params);
            let data = await response.json();
            console.log('data from inserting todo', data);
        } catch (error) {
            console.log(error);
        }




        // let params = {
        //     method: "POST",
        //     credentials: 'include',
        //     mode: 'no-cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)

        // }
        // try {
        //     const result = await fetch('/todos',params);
        //     console.log(result);
        // } catch (error) {
        //     console.log(error);
        // }

    }
    render() {
        return (
            <div>
                <form onSubmit={e => { this.handleSubmit(e) }}>
                    <input placeholder="title" type="text" name="title" onChange={event => this.setState({ title: event.target.value })} />
                    <input placeholder="description" type="text" name="description" onChange={event => this.setState({ description: event.target.value })} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

interface ITodo {
    todolist: Array<object>,
    title: string,
    description: string
}