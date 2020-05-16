import React, { Component } from "react";
import { Form, Input, Button, Row } from "antd";

class SectionForm extends Component {
  state = {
    sectionName: "",
  };

  onSectionNameChange = event => {
    this.setState({
      sectionName: event.target.value,
    });
  };

  onCancelSection = () => {
    this.props.handleCancelSection();
  };

  onAddOrSaveSection = () => {
    this.props.handleAddSection(this.state.sectionName);
  };
  render() {
    return (
      <Form>
        <Row style={{ margin: "5px 0" }}>
          <Input
            size='large'
            value={`${this.state.sectionName}`}
            style={{ width: "100%  " }}
            onChange={this.onSectionNameChange}
          />
        </Row>

        <Row style={{ margin: "5px 0", display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button
              htmlType='submit'
              style={{ marginRight: "5px", backgroundColor: "#db4035", color: "white" }}
              onClick={this.onAddOrSaveSection}
              disabled={this.state.sectionName === ""}
            >
              Add section
            </Button>
            <Button onClick={this.onCancelSection}>Cancel</Button>
          </div>
        </Row>
      </Form>
    );
  }
}

export default SectionForm;
