import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {showText: false, InputValue: ''}

  onChangeText = () => {
    this.setState(prevState => ({showText: !prevState.showText}))
  }

  onChangeInput = event => {
    this.setState({InputValue: event.target.value})
  }

  render() {
    const {showText, InputValue} = this.state
    return (
      <div className="App-container">
        <div className="edit-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {showText ? (
              <p>{InputValue}</p>
            ) : (
              <input
                className="input-text"
                type="text"
                value={InputValue}
                onChange={this.onChangeInput}
              />
            )}
            <button
              className="save-btn"
              type="button"
              onClick={this.onChangeText}
            >
              {showText ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
