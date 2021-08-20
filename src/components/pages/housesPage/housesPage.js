import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';



export default class HousesPage extends Component {
	gotService = new gotService();

	state = {
		selectedItem: 6,
		error: false
	}

	onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage/>
		}

		const itemList = (
			<ItemList 
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllHouses}
				renderItem={item => item.name}
			/>
		);
		const charDetails = (
			<ItemDetails
				itemId={this.state.selectedItem}
				getData={this.gotService.getAllHouses}
				getSelectedData={this.gotService.getHouse}>
				<Field field='region' label='Region' />
				<Field field='words' label='Words' />
				<Field field='titles' label='Titles' />
				<Field field='ancestralWeapons' label='AncestralWeapons' />
			</ItemDetails>
		)

		return (
			<RowBlock leftItems={itemList} rightItems={charDetails} />
		)
	}
}
