import React from "react";

export default class EditContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      images: "",
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   const { id, content, images } = props;

  //   if (id) {
  //     return { content, images };
  //   }

  //   return null;
  // }

  // onChangeContent = (e) => {
  //   this.setState({ content: e.target.value });
  // };
  // onChangeImages = (e) => {
  //   this.setState({ images: e.target.value });
  // };

  // onSave = (e) => {
  //   e.preventDefault();
  //   const { onSave, id } = this.props;
  //   const { content, images } = this.state;
  //   onSave(id, content, images);
  //   this.setState({ content: "", images: "" });
  // };

  // onCancel = (e) => {
  //   e.preventDefault();
  //   const { hideForm } = this.props;
  //   this.setState({ content: "", images: "" });
  //   hideForm();
  // };

  render() {
    const { showEdit } = this.props;
    const { content, images } = this.state;
    return (
      <>
        <div className={showEdit ? "overlay2" : "hidden"} />
        <div className={showEdit ? "form2" : "hidden"}>
          <form>
            <h4>Chỉnh sửa bài viết</h4>
            <div className="input-content">
              <input
                value={content}
                placeholder="Bạn đang nghĩ gì thế?"
                onChange={(e) => this.onChangeContent(e)}
              />
              <input
                value={images}
                placeholder="Hãy điền link ảnh của bạn"
                onChange={this.onChangeImages}
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
