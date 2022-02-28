import { Component } from 'react';
import check from './check.jpg'

export class Grocerylist extends Component {
    constructor () {
        super ();
        this.state = {
            userInput: '',
            groceryList: []
        }
    }

    // onChangeEvent (event) {
    //     console.log (event.target.value);
    // }

    onChangeEvent (e) {
        // console.log (event.target.value);
        this.setState ({ userInput: e });
        // console.log (e)
    }

    addItem (input) {
        if (input === '') {
            alert ('Please enter an item')
        }
        else {
            let listArray = this.state.groceryList;
            // console.log (listArray)
            this.setState ({ groceryList: listArray, userInput: '' })
            listArray.push (input)
        }
    }

    crossedWord (event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem () {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState ({ groceryList: listArray })
    }

    onFormSubmit (e) {
        e.preventDefault ();
    }

    render () {
        return (
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <div className="container">
                        <input type = 'text'
                        placeholder='What do you want to buy today?'
                        // onChange={ this.onChangeEvent }
                        onChange={ (e) => { this.onChangeEvent (e.target.value) } }
                        value = { this.state.userInput }/>
                    </div>
                    <div className="container">
                        <button onClick={ () => this.addItem (this.state.userInput) } className="btn-add btn">Add</button>
                    </div>
                    <ul>
                        { this.state.groceryList.map((item, index) => (
                            <li onClick={ this.crossedWord } key={ index }>
                                <img src={ check } width='20px' alt='icon'/> { item }
                            </li>
                        ))}
                    </ul>
                    <div className="container">
                        <button onClick={ () => this.deleteItem () } className="btn-delete btn">delete</button>
                    </div>
                </form>
            </div>
        )
    }
}