import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Col, Row, Container} from 'reactstrap';
import { Button } from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/caracterPage';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';



import './app.css';
import HousesPage from '../pages/housesPage';
import BooksPage from '../pages/booksPage';
import BooksItem from '../pages/booksItem';


export default class App extends Component {
    gotService = new gotService();

    state = {
        hidden: false,
        error: false
    }
    
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onHiddenCharacter = () => {
        this.setState(state => ({
            hidden: !state.hidden
        }))
    }



    render () {
        const {hidden} = this.state;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {!hidden && <RandomChar interval={15000} />}
                            </Col>
                        </Row>
                        <Button variant="secondary" size="lg" className="button" onClick={this.onHiddenCharacter}>Toggle random  character</Button>
                        
                        <Route path='/' exact />
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                            }/>
                        

                    </Container>
                </div>
            </Router>
        );
    }
};
