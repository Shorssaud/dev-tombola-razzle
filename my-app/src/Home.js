import React from 'react';
import logo from './react.svg';
import './Home.css';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: null,
            Association: null,
            Domaine: null,
            Ville: null,
            CodePostal: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = async (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        return(
            <div style={{display:'flex', color:'red'}}>
                <button onClick={() => alert('button clicked!')}>Click me!</button>
            </div>
        )
    }

    render() {
        return (
                <form style={{display:'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <label>
                        Titre de Tombola:
                        <input type="text" name="Titre de Tombola"checked={this.state.isGoing}
                               onChange={this.handleInputChange} />
                        <br />
                        Nom de l'association:
                        <input type="text" name="Nom de l'association" checked={this.state.isGoing}
                               onChange={this.handleInputChange} />
                        <br />
                        Domaine:
                        <input type="text" name="Domaine" checked={this.state.isGoing}
                               onChange={this.handleInputChange} />
                        <br />
                        Ville:
                        <input type="text" name="Ville" checked={this.state.isGoing}
                               onChange={this.handleInputChange} />
                        <br />
                        Code Postal:
                        <input type="text" name="Code Postal" checked={this.state.isGoing}
                               onChange={this.handleInputChange} />
                    </label>
                    <button type="submit" value="Submit" checked={this.state.isGoing} onClick={async () => {await this.handleInputChange}}>
                        Submit
                    </button>
            </form>
        );
    }
}
export default Reservation;
