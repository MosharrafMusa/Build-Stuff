import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LearnProps extends Component {
    static defaultProps = {
        title : "Github Finder",
        subtitle: "Your profile"
    }


    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
               <h1>{this.props.title} {this.props.subtitle}</h1> 
            </div>
        )
    }
}
