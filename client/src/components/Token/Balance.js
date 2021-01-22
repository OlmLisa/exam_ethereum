import React, {useState, useEffect, Component} from "react";

class Balance extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            _to: '',
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
                <h2>Balance d'une adresse en Token : </h2>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_address")} type="text" className="form-control"
                               placeholder="_address" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.getBalance(event);
                        }} type="button" className="btn btn-success">getBalances de l'adresse</button>
                    </div>
                    <div className="text-center">
                        getBalance : {this.state._balanceAddress}
                    </div>
                </div>
            </div>

        );
    }

    getBalance = async e => {
        const b = await this.props.callContract.contract.methods.getBalance(this.state._address).call();
        this.setState({
            _balanceAddress : b
        })
    }


}
export default Balance;
