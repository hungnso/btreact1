import React from "react";

class InputName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleSubmitName = (e) => {
    e.preventDefault();
    const { onChangeName } = this.props;
    onChangeName(this.state.name);
    this.setState({
      name: "",
    });
  };
  onChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div style={{ marginBottom: "20px" }}>
        <form>
          <input
            style={{ padding: "10px", marginRight: "10px" }}
            placeholder="Hãy nhập tên!"
            value={name}
            onChange={this.onChange}
          />
          <button
            className="btn-primary"
            onClick={this.handleSubmitName}
            type="submit"
          >
            Ok
          </button>
        </form>
      </div>
    );
  }
}
export default InputName;
