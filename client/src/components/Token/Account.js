import React, {useState, useEffect, Component} from "react";

class Account extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            _to: '',
            _depot:'',
            depot:0,
            tokens: 0
        }
    }

    // Enregistre les valeurs du formulaire dans le state
    handleKeyUp = (event, field) => {
        const input = event.currentTarget;
        this.setState({
            [field]: input.value
        });
    };

    render() {
        return (
            <div className={'container'}>
                <br/>
                <br/>
                <br/>
                <h5>Montant dépôt sur votre compte : </h5>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_to")} type="text" className="form-control"
                               placeholder="votre compte" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.getDepot(event);
                        }} type="button" className="btn btn-success">Consulter</button>
                    </div>
                    <div className="text-center">
                        Montant dépôt sur votre compte : {this.state.depot}
                    </div>
                </div>
                <br/>
                <h5>Déposer token sur votre compte : </h5>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_to")} type="text" className="form-control"
                               placeholder="votre compte" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "tokens")} type="text" className="form-control"
                               placeholder="nombre de tokens" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.deposit(event);
                        }} type="button" className="btn btn-success">Déposer</button>
                    </div>
                </div>
                <h5>Retirer token de votre compte : </h5>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_to")} type="text" className="form-control"
                               placeholder="votre compte" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "tokens")} type="text" className="form-control"
                               placeholder="nombre de tokens" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.retire(event);
                        }} type="button" className="btn btn-success">Retirer</button>
                    </div>
                </div>
            </div>

        );
    }

    deposit = async e => {
        const gas = await this.props.callContract.contract.methods.deposit(this.state._to, this.state.tokens).estimateGas();
        this.props.callContract.contract.methods.deposit(this.state._to, this.state.tokens)
            .send({ from: this.state._to, gas });
    }

    retire = async e => {
        const gas = await this.props.callContract.contract.methods.retire(this.state._to, this.state.tokens).estimateGas();
        this.props.callContract.contract.methods.retire(this.state._to, this.state.tokens)
            .send({ from: this.state._to, gas });
    }

    getDepot = async e => {
        const d = await this.props.callContract.contract.methods.getDepot(this.state._to).call();
        this.setState({
            depot : d
        })
    }
}
export default Account;
