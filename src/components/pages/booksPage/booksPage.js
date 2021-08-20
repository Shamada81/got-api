import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import gotServise from '../../../services/gotService';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import RowBlock from '../../rowBlock';


class BooksPage extends Component {

	gotService = new gotServise();

	state = {
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	render() {
		if(this.state.error) {
			return <ErrorMessage/>
		}

		return(
			<ItemList 
				onItemSelected={(itemId) => {
						this.props.history.push(itemId)
					}
				}
				getData={this.gotService.getAllBooks}
				renderItem={item => item.name}
			/>
		)
	}


}

export default withRouter(BooksPage);

