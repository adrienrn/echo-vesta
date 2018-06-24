import React from 'react';

class SectionPanel extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="section-header">
          <h3 className="section-title">
            {this.props.title}
          </h3>

          <div className="section-decorator--bottom bottom" />
          <div className="section-decorator--top top" />
        </div>
        <div className="section-body">
          dlkfsmldk

          <div className="section-decorator--bottom bottom" />
          <div className="section-decorator--top top" />
        </div>
      </div>
    );
  }
}

export default SectionPanel;
