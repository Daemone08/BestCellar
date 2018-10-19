import React, { Component } from 'react';
import './MealPairs.css';
import { connect } from "react-redux";
import { getMealPairs, getMealPairsSuccess, getMealPairsFailure } from '../actions/index'
import API from "../../utils/API"

const Loader = require("react-loader")

const status = "loading";

const mapDispatchToProps = dispatch => {
    return {
        getMealPairs: () => dispatch(getMealPairs()),
        getMealPairsSuccess: mealPairs => dispatch(getMealPairsSuccess(mealPairs)),
        getMealPairsFailure: error => dispatch(getMealPairsFailure(error)),
    }
};

const mapStateToProps = state => {
    return {
        mealPairs: state.mealPairs,
        status: state.status
    };
};

class ConnectedMealPairs extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount = () => {
        this.apiRequest();
        this.getMealPairs();
    }

    apiRequest = () => {
        API.findAllMealPairs()
            .then(response => {
                const mealPairs = response.data;
                this.getMealPairsSuccess(mealPairs);
            })
            .catch(error => {
                this.getMealPairsFailure(error);
            });
    }

    getMealPairs = () => {
        this.props.getMealPairs()
    }

    getMealPairsSuccess = (mealPairs) => {
        this.props.getMealPairsSuccess(mealPairs)
    }

    getMealPairsFailure = (error) => {
        this.props.getMealPairsFailure(error)
    }

    // renderGreetings() {
    //     return this.props.greetings.map(greeting => (
    //         <HelloWorld
    //             key={greeting.name}
    //             name={greeting.name}
    //             message={greeting.message}
    //             frenchify={this.frenchify}
    //             removeGreeting={this.removeGreeting} />
    //     ));
    // }

    renderSelectors = () => {

    }

    render() {
        return (
            <div className="MealPairs">
                {this.props.status === "loading" ? (
                    <Loader />
                ) : (
                        <div>
                            <select>
                                {this.renderSelectors()}
                            </select>
                            {console.log(this.props.mealPairs)}
                        </div>

                    )
                }
            </div>
        );
    }
}

const MealPairs = connect(mapStateToProps, mapDispatchToProps)(ConnectedMealPairs)

export default MealPairs