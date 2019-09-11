import React from 'react'
import AddButton from './AddButton'

export default class QuoteAdder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dateInput: '',
            contentInput: ''
        }
    }

    handleDateChange(e){
        this.setState({dateInput: e.target.value})
    }

    handleContentChange(e){
        this.setState({contentInput: e.target.value})
    }


    render(){
        return(
            <div>
                <input className="date-input" placeholder="Date" onChange={e => this.handleDateChange(e)}></input>
                <input className="content-input" placeholder="Content" onChange={e => this.handleContentChange(e)}></input>
                <AddButton 
                dateInput={this.state.dateInput}
                contentInput={this.state.contentInput}
                createQuote={this.props.createQuote}/>
            </div>
        )
    }
}