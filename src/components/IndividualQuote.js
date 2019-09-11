import React from 'react' 
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'

export default class IndividualQuote extends React.Component {
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
                {/* <div>{this.props.key}</div> */}
                <input placeholder={this.props.date} onChange={e => this.handleDateChange(e)}></input>
                <input placeholder={this.props.content} onChange={e => this.handleContentChange(e)}></input>
                <div>
                    <UpdateButton 
                    key={this.props.id}
                    date={this.props.date}
                    content={this.props.content}
                    id={this.props.id}
                    dateInput={this.state.dateInput}
                    contentInput={this.state.contentInput}
                    updateQuote={this.props.updateQuote}
                    />
                </div>
                <div>
                    <DeleteButton 
                    id={this.props.id}
                    deleteQuote={this.props.deleteQuote}
                    />
                </div>
                <h6>-</h6>
            </div>
        )
    }
} 