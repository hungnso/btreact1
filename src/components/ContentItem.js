import React from "react";

export default class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmtValue: [],
    };
  }
  onChangeCmt = (e) => {
    this.setState({ cmtValue: e.target.value });
  };
  handleSubmitCmt = (e) => {
    e.preventDefault();
    const { onSaveCmt, id } = this.props;
    onSaveCmt(this.state.cmtValue, id);
    this.setState({ cmtValue: "" });
  };
  handleChangeCmt = (e) => {
    e.preventDefault();
    const { onChangeCmt, id } = this.props;
    onChangeCmt(this.state.cmtValue, id);
    // console.log("ok");
  };
  handleEditCmt = (e, value) => {
    e.preventDefault();
    this.setState({ cmtValue: value.value });
    const { onEditCmt } = this.props;
    onEditCmt(value.id);
  };
  render() {
    const { id, content, images, onEdit, onDelete, cmt, onDeleteCmt } =
      this.props;
    const { cmtValue } = this.state;
    const listComment = cmt.filter((item) => item.idPost === id);
    return (
      <li key={id} className="item">
        <div className="item-img">
          <img src={images} alt="" />
          <h4>{content}</h4>
        </div>
        <div className="item-comment">
          <div className="comment-input">
            <input
              placeholder="cmt"
              value={cmtValue}
              onChange={this.onChangeCmt}
            />
            <button
              className="btn-delete"
              type="submit"
              onClick={this.handleChangeCmt}
            >
              {" "}
              Sửa
            </button>
            <button
              className="btn-primary"
              type="submit"
              onClick={this.handleSubmitCmt}
            >
              {" "}
              Gửi
            </button>
          </div>
          <ul>
            {listComment.map((value) => (
              <li key={value.id} className="comment-item">
                <p>{value.value}</p>
                <div className="comment-button">
                  <button
                    className="btn-change"
                    onClick={(e) => this.handleEditCmt(e, value)}
                  >
                    Sửa Cmt
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDeleteCmt(value.id)}
                  >
                    Xóa Cmt
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="comment-button">
          <button className="btn-change" onClick={() => onEdit(id)}>
            Sửa Bài Post
          </button>
          <button className="btn-delete" onClick={() => onDelete(id)}>
            Xóa Bài Post
          </button>
        </div>
      </li>
    );
  }
}
