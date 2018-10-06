import React from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

const CollapseControls = (props) => {
  if (props.isOpened) {
    return (
      <IoIosClose />
    )
  }
  return (
    <IoIosArrowDown />
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
        <div className="row clickable" onClick={this.toggleCollapse}>
          <div className="col col-8">
            <p>
              <span className="highlight">{company}</span> - <i>{title}</i>
            </p>
          </div>
          <div className="col text-right">
            <p>{fromDate} - {toDate || 'Present'} <CollapseControls isOpened={this.state.isOpened} /></p>
          </div>
        </div>
        <Collapse isOpened={this.state.isOpened}>
          <div className="row">
            <div className="col">
              <ul>
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