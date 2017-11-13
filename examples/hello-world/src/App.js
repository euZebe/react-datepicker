import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const EN_DATE_FORMAT = 'MM/DD/YYYY';
const FR_DATE_FORMAT = 'DD/MM/YYYY';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startDate: null,
            endDate: null,
            dateFormat: EN_DATE_FORMAT,
        };
    }

    changeLanguage = () => {
        const newDateFormat = this.state.dateFormat === EN_DATE_FORMAT ? FR_DATE_FORMAT : EN_DATE_FORMAT;
        this.setState({ dateFormat: newDateFormat });
    }

    render() {
        return (
            <div>
                <DatePicker
                    name='startDate'
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    dateFormat={this.state.dateFormat}
                />
                <DatePicker
                    name='endDate'
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    dateFormat={this.state.dateFormat}
                />
                <button onClick={this.changeLanguage} >Switch</button>
                {this.state.dateFormat}
            </div>
        );
    }

    handleChangeStart = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        });
    }
}

export default App;
