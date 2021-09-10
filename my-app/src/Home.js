import React from 'react';
import logo from './react.svg';
import './Home.css';
import { Link } from "react-router-dom";

class InitialInfo extends React.Component {
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

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    TicketHandler() {
        return (
            <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <label>
                    Titre de Tombola:
                    <input type="text" name="Insert ticket list" checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                </label>
                <button type="submit" value="Submit" checked={this.state.isGoing} onChange={this.handleInputChange}
                        onClick={() => alert('Launching !')}>
                    Submit
                </button>
            </form>
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
                    <Link to="/information">
                    <button type="submit" value="Submit" checked={this.state.isGoing} onChange={this.handleInputChange} >
                        Submit
                    </button>
                    </Link>
            </form>
        );
    }
}
export default InitialInfo;
