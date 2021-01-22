import React, {useState, useEffect, Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : null,
            total_supply : null,
            address : null,
            _address: ''

        }
    }

    componentDidMount = async () => {
        try {
            const name_ = await this.props.callContract.contract.methods.getName().call();
             this.setState({
                name: name_
            })
            console.log(this.state.name)

            const total_supply_ = await this.props.callContract.contract.methods.getTotalSupply().call();
            this.setState({
                total_supply: total_supply_
            })
            console.log(this.state.total_supply)

            this.setState({
                address: this.props.callContract.contract._address
            })
            console.log(this.props.callContract.contract._address)


            const nbHolder_ = await this.props.callContract.contract.methods.getNbHolder().call();
            this.setState({
                nbHolder: nbHolder_
            })
            console.log(this.state.nbHolder);

        } catch (error) {
            alert(
                `Failed componentDidMount dans List.js`,
            );
            console.error(error);
        }
    }


    render() {
    return (
        <div className={'container'}>
            <br/>
            <br/>
            <br/>
            <h6 className={"py-3"}>Informations aux utilisateurs  :</h6>
            Dans cette version bêta, le compte qui déploie le smart contract a pour rôle : banque. <br/>
            1- La banque dépose des tokens gratuitement aux utilisateurs. <br/>
            2- Les utilisateurs peuvent consulter leur montant dépôt et balance tokens.<br/>
            3- Les utilisateurs peuvent virer des tokens vers un autre compte.<br/>
            4- Les utilisateurs peuvent déposer des tokens dans leur compte de banque ou les retirer. <br/>
            (Si pas assez de fond :  pas de transaction, donc points à améliorer sont afficher un message + ajout échange token contre ether. )  <br/>

            <div className={"container text-center"}>

                <h2 className={"py-3"}>Détails du Token</h2>
                Nom du Token : {this.state.name}
            </div>
            <div>
                Total Supply Token : {this.state.total_supply}
            </div>
            <div>
                Adresse du contrat : {this.state.address}
            </div>
            <div>
                Nombre de Holder : {this.state.nbHolder}
                {/*// stocker les adresses */}
            </div>
        </div>

    );
  }
}
export default  List;
