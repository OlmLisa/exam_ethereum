import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark setNavbar bg-dark">
                <a className="navbar-brand" href="/">Banque</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/">Détails du Token</Link>
                        </li>
                        <li className="navbar-nav mr-auto">
                            <Link className={"nav-link"} to="/account">Retirer/Deposer Token</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/transfer">Virement</Link>
                        </li>
                        <li className="navbar-nav mr-auto">
                            <Link className={"nav-link"} to="/tokenBalance">Consulter Token Balance</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}