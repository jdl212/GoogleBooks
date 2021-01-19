import React from "react";
import {Component} from "react";


export default class Form extends Component{

    render() {
        return (
            <form className="row m-4">
                <div className="col-10">
                    <input
                        onChange={this.props.handleInputChange}
                        value={this.props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Book "
                        id="search"
                    />
                </div>
                <div className="col-2">
                    <button onClick={this.props.handleFormSubmit} className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </form>
        );
    }
}
