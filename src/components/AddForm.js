import React from "react";

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content2: "",
      images2:
        "https://images.unsplash.com/photo-1641124962413-4eee4dff807e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { id, content, images } = props;

    if (id) {
      return { content, images };
    }

    return null;
  }

  onSave = (e) => {
    e.preventDefault();
    const { onSave, id } = this.props;
    const { content2, images2 } = this.state;
    onSave(id, content2, images2);
    this.setState({ content: "", images: "" });
  };

  onCancel = (e) => {
    e.preventDefault();
    const { hideForm } = this.props;
    this.setState({ content: "", images: "" });
    hideForm();
  };
  onChangeContent = (e) => {
    this.setState({ content2: e.target.value });
  };
  onChangeImages = (e) => {
    this.setState({ images2: e.target.value });
  };

  render() {
    const { show, id } = this.props;
    const { content2, images2 } = this.state;
    return (
      <>
        <div className={show ? "overlay" : "hidden"} />
        <div className={show ? "form" : "hidden"}>
          <form>
            <h4>{id ? "Chỉnh sửa bài viết " : "Tạo bài viết "}</h4>
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
