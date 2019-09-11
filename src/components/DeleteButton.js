import React from 'react'

export default class DeleteButton extends React.Component {
    constructor(props){
        super(props)
    } 
    render(){
        return(
            <button onClick={() => {this.props.deleteQuote(this.props.id)}}>Delete</button>
        )
    }
} 