import React from "react";

export default class EditCmtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmt: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { id, value } = props;

    if (id) {
      return { value };
    }

    return null;
  }

  onSave = (e) => {
    e.preventDefault();
    const { onSave, id } = this.props;
    const { cmt } = this.state;
    onSave(id, cmt);
    this.setState({ cmt: "" });
  };

  onCancel = (e) => {
    e.preventDefault();
    const { hideForm } = this.props;
    this.setState({ cmt: "" });
    hideForm();
  };
  onChangeCmt = (e) => {
    this.setState({ cmt: e.target.value });
  };

  render() {
    const { show, id } = this.props;
    const { content2, images2 } = this.state;
    return (
      <>
        <div className={show ? "overlay" : "hidden"} />
        <div className={show ? "form" : "hidden"}>
          <form>
            <h4>Sửa cmt</h4>
            <div className="input-content">
              <input
                value={content2}
                placeholder="Bạn đang nghĩ gì thế?"
                onChange={(e) => this.onChangeContent(e)}
              />
              <input
                value={images2}
                placeholder="Hãy điền link ảnh của bạn"
                onChange={(e) => this.onChangeImages(e)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <button
                className="btn-primary"
                style={{ marginRight: "10px" }}
                onClick={this.onSave}
              >
                Đăng
              </button>
              <button className="btn-cancel" onClick={this.onCancel}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
