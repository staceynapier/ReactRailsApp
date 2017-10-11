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
    if (selectedKey === 2) {
      this.props.handleContactClick()
    } else {
      this.props.handleNavClick()
    }
  }

  render() {
    return (
      <section>
        <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} >Properties</NavItem>
          <NavItem eventKey={2} >Contact</NavItem>
        </Nav>
      </section>
    );
  }
};

export default Navigation;
