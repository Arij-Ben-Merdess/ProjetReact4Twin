import  { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class ComposantClass extends Component {
  state = {
    monTexte: "Hello 4TWIN7",
    value: 0,
    inputText: ""
  };

  handleClickValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleClickText = () => {
    this.setState({
      monTexte: this.state.inputText,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <>
        Ceci est un Composant de classe
        <div>{this.state.monTexte}</div>
        <div>{this.state.value}</div>
        <br />
        <input type="text" />
        <Form.Control
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder="Tapez ici..."
        />
        <br />
        <Button variant="primary" onClick={this.handleClickValue}>Incrémenter</Button>
        <br />
        <Button variant="secondary" onClick={this.handleClickText}>Changer le texte</Button>
        <br />
        {this.state.value}
      </>
    );
  }
}

export default ComposantClass;
