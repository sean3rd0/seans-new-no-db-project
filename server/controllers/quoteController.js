let quotes = [] 
let id = 1

const createQuote = (req, res) => {
    const quote = {
        id: id++,
        date: req.body.date,
        content: req.body.content
    }
    quotes.push(quote)
    res.status(200).send(quotes)//if we have quotes already in our above array, then until a person ADDS one, they won't be able to see the ones we already have in our array because we havent responded by SENDING the quotes array to them. 
}
const readQuotes = (req, res) => {
    res.status(200).send(quotes)
}
const updateQuote = (req, res) => {
    //their button-click of our edit-button sends a request here
    //their request sends us a quote body (containing the date, and content of a quote), as well as a param with the id of the quote. 
    const {date, content} = req.body; //I am destructuring 
    let {id} = req.params
    //find the object with the id that they sent us in their param
    quotes = quotes.map(e => {
        if(e.id === +id){
            return {id, date, content}
        }
        return e
    })
    res.status(200).send(quotes)    //we will replace the date and content values with whatever they type into the inputs. 
    //then we will send the entire array back, updated. 
}
const deleteQuote = (req, res) => {
    let {id} = req.params
    quotes = quotes.filter(element => element.id !== +id)
    res.status(200).send(quotes)
}

module.exports = {
    createQuote,
    readQuotes,
    updateQuote,
    deleteQuote
}
