import React from 'react'

export default class UpdateButton extends React.Component {
    constructor(props){
        super(props)
    } 
    render(){
        return(
            <button onClick={() => {this.props.updateQuote(
                this.props.id, {
                date: this.props.dateInput,
                content: this.props.contentInput
            }
            )}}>Update</button>
        )
    }
}