import React, { Component } from "react";
import api from "../services/api-service";

class Books extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        api.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            api.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            api.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">Please Search Again,</h1>
                ) : (
                    <div>
                        {this.props.books.map(result => (
                            <div className="container" key={result._id}>
                                <div className="item row">
                                    <a className="col-md-4 " href={this.props.url} target="_blank">
                                        <img className="img-fluid project-image rounded shadow-sm"
                                             src={result.image} alt={result.title}/>
                                    </a>
                                    <div className="desc col-md-8 ">
                                        <h3 className="title"><a href={result.link} target="_blank">{result.title} by {result.authors}</a></h3>
                                        <p className="mb-2 text-sm-left">{result.description}</p>
                                        <p>
                                            <a className="btn btn-info" href={result.link} target="_blank">
                                            <i className="fas fa-external-link-alt"></i>View</a>
                                            <a className={this.state.savedBooks.map(book => book._id).includes(result._id) ? "btn btn-danger" : "btn btn-success"} href="#" onClick={() => this.handleSave(result)}>
                                            {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Delete" : "Save"}</a>
                                        </p>
                                    </div>
                                </div><hr className="divider"/>
                            </div>

                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default Books;
