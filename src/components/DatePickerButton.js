import React from 'react';
import PropTypes from 'prop-types'

export default class DatePickerButton extends React.Component {
  
    render () {
      return (
        <button
          className="date-picker-button"
          onClick={e=>{
            e.preventDefault();
            this.props.onClick(e)
            }}>
          {this.props.value}
        </button>
      )
    }
  }
  
  DatePickerButton.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  };