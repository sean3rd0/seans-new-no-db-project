import React from 'react'
import IndividualQuote from './IndividualQuote'

export default class ThingsToRemember extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="things-to-remember">
                {this.props.ttrList.map(el => (
                    <IndividualQuote 
                    key={el.id}
                    id={el.id}
                    date={el.date}
                    content={el.content}
                    updateQuote={this.props.updateQuote}
                    deleteQuote={this.props.deleteQuote}
                    />
                ))}
            </div>
        )
    }
}