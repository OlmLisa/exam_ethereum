import React, {useState, useEffect, Component} from "react";

class Details extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            _to: '',
            _from:'',
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

                {/*{this.createdSuccess()}*/}
                {/*{this.createdError()}*/}
                <h2> Virement de la banque </h2> <h6>(initialisation du solde et création d'un compte en banque) : </h6>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_to")} type="text" className="form-control"
                               placeholder="_to" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "tokens")} type="text" className="form-control"
                               placeholder="nombre de tokens" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.transfer(event);
                        }} type="button" className="btn btn-success">Retirer</button>
                    </div>
                </div>
            <br/>
                <h2>Virement d'une adresse à une autre : </h2>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_from")} type="text" className="form-control"
                               placeholder="_from" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_to")} type="text" className="form-control"
                               placeholder="_to" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "tokens")} type="text" className="form-control"
                               placeholder="nombre de tokens" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.tokenTransaction(event);
                        }} type="button" className="btn btn-success">Retirer</button>
                    </div>
                </div>
            </div>

        );
    }

    transfer = async e => {
        const gas = await this.props.callContract.contract.methods.transfer(this.state._to, this.state.tokens).estimateGas();
        this.props.callContract.contract.methods.transfer(this.state._to, this.state.tokens)
            .send({ from: "0x17Be9fbe3A62c2B4eE7956B3591Abf1eE69E4482", gas });
    }


    tokenTransaction = async e => {
        const gas = await this.props.callContract.contract.methods.tokenTransaction(this.state._from, this.state._to, this.state.tokens).estimateGas();
        this.props.callContract.contract.methods.tokenTransaction(this.state._from, this.state._to, this.state.tokens)
            .send({ from: this.state._from, gas });
    }

    // createdSuccess = () => {
    //     if(this.state.isCreated === true){
    //         return(
    //             <div className="alert alert-success" role="alert">
    //                 Votre transfert à bien été ajouté ! <br/>
    //                 <button onClick={this.setState({isCreated: null})} type="button" className="btn btn-success">Fermer</button>
    //             </div>
    //         )
    //     }
    // };
    //
    // createdError = () => {
    //     if(this.state.isCreated === false){
    //         return(
    //             <div className="alert alert-danger" role="alert">
    //                 Veuillez vérifier le formulaire ! <br/>
    //                 <button onClick={event => this.setState({isCreated: null})} type="button" className="btn btn-danger">Fermer</button>
    //             </div>
    //         )
    //     }
    // }
}
export default Details;
