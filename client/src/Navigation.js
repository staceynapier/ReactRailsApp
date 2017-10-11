import React from 'react';
import { Nav, NavItem, Navbar, } from 'react-bootstrap';

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
    if (selectedKey === 2) {
      this.props.handleContactClick()
    } else {
      this.props.handleNavClick()
    }
  }

  render() {
    return (
      <section>
        <Navbar inverse collapseOnSelect justified>
          <Navbar.Header>
            Snappier Properties
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                <NavItem eventKey={1} >Home</NavItem>
                <NavItem eventKey={2} >Contact</NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
};

export default Navigation;
