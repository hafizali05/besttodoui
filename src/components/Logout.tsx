import React, { Component } from 'react'


export default class Logout extends Component {
    // constructor(props: any){
    //     super(props);
    //     this.handleLogout = this.handleLogout.bind(this);
    // }
    async handleLogout() {
        console.log(' in handle logout')
        let params = {
            method: "POST"
        }
        try {
            const result = await fetch('/auth/logout',params); 
            const json = await result;
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div style={{ float: 'right', marginRight: '30%' }}>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}