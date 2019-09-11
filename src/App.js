import React from 'react';
import './App.css';
import Header from './components/Header'
import BackgroundButton from './components/BackgroundButton'
import QuoteAdder from './components/QuoteAdder'
import AddButton from './components/AddButton'
import RandomButton from './components/RandomButton'
import ThingsToRemember from './components/ThingsToRemember' 
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      thingsToRememberArray: []
    }

    this.createQuote = this.createQuote.bind(this)
    this.updateQuote = this.updateQuote.bind(this)
    this.deleteQuote = this.deleteQuote.bind(this)

  }

  componentDidMount () {
    axios.get('/api/quotes').then(res => {
      this.setState({thingsToRememberArray: res.data})
    })
  }

  createQuote (body) {
    axios.post('/api/quote/add', body).then(res => {
      this.setState({thingsToRememberArray: res.data})
    })
  }

  updateQuote (id, body) {
    axios.put(`/api/quote/${id}`, body).then(res => {
      this.setState({thingsToRememberArray: res.data})
    })
  }

  deleteQuote (id) {
    axios.delete(`/api/quote/${id}`).then(res => {
      this.setState({thingsToRememberArray: res.data})
    })
  }
  
  render () {
    return (
    <div className="App">
      <Header />
      {/* <BackgroundButton /> */}
      <QuoteAdder 
      createQuote={this.createQuote}/>
      <div></div>
      {/* <RandomButton /> */}
      <h2>Things to Remember</h2>
      <ThingsToRemember
      updateQuote={this.updateQuote}
      deleteQuote={this.deleteQuote}
      ttrList={this.state.thingsToRememberArray}
      />
    </div>
    )
  };

}
export default App;