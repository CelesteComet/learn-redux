import React, { Component } from 'react';

class Body extends Component {
  render() {
    // A check to see if the defect list is not empty.
    // Then "defect" is set to the current index of the list.
    debugger;
    let defect = "";

    if(this.props.defect) {
      let defect = this.props.defect;
    } 
    
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-1">
            <input type="text" className="form-control"  placeholder="Name" />
          </div>
          <div className="form-group col-md-8">
            <input type="text" className="form-control"  placeholder="Summary" onChange={this.props.handleChange} value={defect.name}/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-4">
            <textarea className="form-control" rows="15"></textarea>
          </div>
        </div>
        
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Body;




