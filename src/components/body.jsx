import React, { Component } from 'react';

class Body extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      summary: "",
      description: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const defect = this.props.defects.defects.list[this.props.defects.defects.index];
    
    this.setState({
      name: defect.name,
      summary: defect.summary,
      description: defect.description
    })
  }

  componentWillReceiveProps(nextProps) {
    const defect = nextProps.defects.defects.list[nextProps.defects.defects.index];
    this.setState({
      name: defect.name,
      summary: defect.summary,
      description: defect.description
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    let payload = {
      name: this.state.name,
      summary: this.state.summary,
      description: this.state.description
    }

    this.props.handleSubmit(payload);
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-1">
            <input type="text" className="form-control"  placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div className="form-group col-md-8">
            <input type="text" className="form-control"  placeholder="Summary" name="summary" onChange={this.handleChange} value={this.state.summary}/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-4">
            <textarea className="form-control" rows="15" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>
        </div>
        
        <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Body;




