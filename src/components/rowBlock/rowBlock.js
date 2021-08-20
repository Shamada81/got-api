import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({leftItems, rightItems}) => {
	return (
		<Row>
			<Col md='6'>
				{leftItems}
			</Col>
			<Col md='6'>
				{rightItems}
			</Col>
		</Row>
	)
}

export default RowBlock;