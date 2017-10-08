import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeKey: 1
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selectedKey) {
    console.log(selectedKey);
    this.setState({activeKey: selectedKey})
    this.props.handleNavClick()
  }

  render() {
    return (
      <section>
        <Nav bsStyle="pills" justified activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">Properties</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
        </Nav>
      </section>
    );
  }
};

export default Navigation;
