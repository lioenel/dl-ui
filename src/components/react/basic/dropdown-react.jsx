import React from 'react';

'use strict';

export default class DropdownReact extends React.Component {
    constructor(props) {
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    handleValueChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        if (this.props.onChange)
            this.props.onChange(event.target.value);
    }
    componentWillMount() {
        this.setState({ value: this.props.value || '', options: this.props.options || {}, items: this.props.items || [] });
    }
    componentWillReceiveProps(props) {
        this.setState({ value: props.value || '', options: this.props.options || {}, items: this.props.items || [] });
    }

    render() {
        if (this.state.options.readOnly)
            return (
                <p className="form-control-static">{(this.state.value || '').toString() }</p>
            );
        else {
            var items = this.state.items.map(item => {
                return (
                    <option key={item} value={item}>{item.toString() }</option>
                );
            });
            return (
                <select value={this.state.value} onChange={this.handleValueChange} className="form-control">
                    {
                        items
                    }
                </select>
            );
        }
    }
} 