import React from "react";

export class AddressCard extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">Address Line 1</div>
            <div className="col">{this.props.address1}</div>
          </div>
          <div className="row">
            <div className="col">Address Line 2</div>
            <div className="col">{this.props.address2}</div>
          </div>
          <div className="row">
            <div className="col">City/Village</div>
            <div className="col">{this.props.cityVillage}</div>
          </div>
          <div className="row">
            <div className="col">State/Province</div>
            <div className="col">{this.props.stateProvince}</div>
          </div>
          <div className="row">
            <div className="col">Country</div>
            <div className="col">{this.props.country}</div>
          </div>
          <div className="row">
            <div className="col">Postal Code</div>
            <div className="col">{this.props.postalCode}</div>
          </div>
        </div>
      </div>
    );
  }
}
