import './Store.css';

import { Component } from 'react';
import { products } from '../../data/products'
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'view_module'
        };

        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSwitch() {
        this.setState((prevState) => ({
            view: prevState.view === 'view_module' ? 'view_list' : 'view_module'
        }));
    }

    render() {
        const { view } = this.state;

        return (
            <div className="store-container">
                <div className="toolbar">
                    <IconSwitch
                        icon={view === 'view_module' ? 'view_list' : 'view_module'}
                        onSwitch={this.handleSwitch}
                    />
                </div>

                <main className="store-layout">
                    {view === 'view_module' ? (
                        <CardsView cards={products} />
                    ) : (
                        <ListView items={products} />
                    )}
                </main>
            </div>
        );
    }
}

export default Store;