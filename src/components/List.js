import React from "react";
import ContentItem from "./ContentItem";

export default class List extends React.Component {
  onSaveCmt = (data, id) => {
    const { onSaveCmtData } = this.props;
    onSaveCmtData(data, id);
  };
  render() {
    const { onEdit, data, onDelete, cmt, onEditCmt, onDeleteCmt, onChangeCmt } =
      this.props;

    return (
      <ul className="list">
        {data.map((item) => (
          <ContentItem
            key={item.id}
            onEdit={onEdit}
            id={item.id}
            content={item.content}
            images={item.images}
            onDelete={onDelete}
            cmt={cmt}
            onSaveCmt={this.onSaveCmt}
            onEditCmt={onEditCmt}
            onDeleteCmt={onDeleteCmt}
            onChangeCmt={onChangeCmt}
          />
        ))}
      </ul>
    );
  }
}
