import React from 'react';
import { Form, FormGroup, FormControl, Col, Button } from 'react-bootstrap';
import './App.css';


class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterByRoom: '',
    }
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleFilterSubmit= this.handleFilterSubmit.bind(this)
  }

  handleRoomChange(e) {
    this.setState({
      filterByRoom: e.target.value
    })
  }

  handlePriceChange(e) {
    this.setState({
      filterByPrice: e.target.value
    })
  }

  handleFilterSubmit(e) {
    e.preventDefault()
    const newArray = []

    this.props.properties.map((property, index) => {
      if (property.bedrooms >= this.state.filterByRoom && property.price >= this.state.filterByPrice){
        newArray.push(property)
      }
      return(newArray)
    })
    this.props.handleFormSubmit(newArray)

  }

  render() {

    return(

        <Form horizontal>
          <FormGroup>
            <Col>
              Price
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="£" value={this.state.filterByPrice} onChange={this.handlePriceChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col>
              No of Bedrooms
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={this.state.filterByRoom} onChange={this.handleRoomChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" onClick={this.handleFilterSubmit}>
                Refine
              </Button>
            </Col>
          </FormGroup>
        </Form>
      );

      }

}

export default Filter;
