import React from 'react';
import { Collapse } from 'react-collapse';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const CollapseControls = (props) => {
  if (props.isOpened) {
    return (
      <IoMdRemove className="collapse-controls open" />
    )
  }
  return (
    <IoMdAdd className="collapse-controls"/>
  )
}

class ExperienceRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: this.props.isOpened
    }

    this.toggleCollapse = ev => {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }

  }

  render() {
    
    const {company, title, fromDate, toDate, bullets} = this.props.gig;

    return (
      <div>
        <div className="row clickable stack-sm" onClick={this.toggleCollapse}>
          <div className="col col-8">
            <p>
              <CollapseControls isOpened={this.state.isOpened} />
              <span className="highlight">{company}</span> - <i>{title}</i>
            </p>
          </div>
          <div className="col text-right text-left-sm dates">
            <p>{fromDate} - {toDate || 'Present'}</p>
          </div>
        </div>
        <Collapse isOpened={this.state.isOpened}>
          <div className="row">
            <div className="col">
              <ul className="bullets">
                {bullets.map((text, index) => {
                  return <li key={index}>{text}</li>;
                })}
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    )
  }
}

ExperienceRow.defaultProps = {
  isOpened: false
}

export default ExperienceRow;