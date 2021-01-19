import React, { Component } from "react";
import api from "../services/api-service";
import Books from "../components/Books";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        api.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Books books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;