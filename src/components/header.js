import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      index: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.state.index = newProps.defects.defects.index + 1;
  }

  handleEnter(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      this.props.handleJumpIndex.bind(null, this.state.index)();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const index = this.props.defects.defects.index;
    const length = this.props.defects.defects.list.length;
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="glyphicon glyphicon-folder-open"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" id="logOutLink">Log Out</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                <li id="paginator-left"><a href="#"><span className="glyphicon glyphicon-arrow-left" onClick={this.props.handleDecrementIndex}></span></a></li>
                <li id="paginator-right"><a href="#"><span className="glyphicon glyphicon-arrow-right" onClick={this.props.handleIncrementIndex}></span></a></li>
              </ul>
             <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" name="index" onKeyDown={this.handleEnter} onChange={this.handleChange} value={this.state.index} />
              </div>
              <button className="btn btn-default" type="button" onClick={this.props.handleJumpIndex.bind(null, this.state.index)}>Total {length}</button>
            </form>
              <ul className="nav navbar-nav">
                <li><a href="#"><span className="glyphicon glyphicon-plus"></span></a></li >
                <li><a href="#"><span className="glyphicon glyphicon-minus"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-signal"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-search"></span></a></li>            
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Quick Find" />
                </div>
                <button className="btn btn-default" type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;



