import React from 'react'

export default class AddButton extends React.Component {
    constructor(props){
        super(props)
    } 
    render(){
        return(
            <button onClick={() => {this.props.createQuote({
                date: this.props.dateInput,
                content: this.props.contentInput
            })}}>Add</button>
        )
    }
}