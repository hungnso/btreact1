import React from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import InputName from "./components/InputName";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      show: false,
      id: "",
      content: "",
      images: "",
      data: [],
      cmt: [],
      idcmt: "",
    };
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmitName = (name) => {
    this.setState({
      name: name,
    });
  };
  onAdd = () => {
    this.setState({
      show: true,
    });
  };
  hideForm = () => {
    this.setState({
      show: false,
      id: "",
      content: "",
    });
  };
  onSave = (id, content, images) => {
    const { data } = this.state;
    if (id) {
      const index = data.findIndex((item) => item.id === id);
      if (index > -1) {
        data[index] = { ...data[index], content: content, images: images };
      }
    } else {
      data.push({
        id: new Date().getTime(),
        content: content,
        images: images,
      });
    }

    this.setState({ data: [...data], show: false });
  };
  onEdit = (id) => {
    const { data } = this.state;
    const item = data.find((item) => item.id === id);

    if (item) {
      this.setState({ ...item, show: true });
    } else {
      console.log("loi");
    }
  };
  onEditCmt = (id) => {
    const { cmt } = this.state;
    const item = cmt.find((item) => item.id === id);

    if (item) {
      this.setState({ ...item, idcmt: id });
    } else {
      console.log("loi");
    }
  };
  onDelete = (id) => {
    const { data } = this.state;
    const index = data.findIndex((item) => item.id === id);

    if (index > -1) {
      data.splice(index, 1);

      this.setState([...data]);
    }
  };
  onDeleteCmt = (id) => {
    const { cmt } = this.state;
    const index = cmt.findIndex((item) => item.id === id);

    if (index > -1) {
      cmt.splice(index, 1);

      this.setState([...cmt]);
    }
  };
  onSaveCmtData = (value, id) => {
    let { data, cmt, idcmt } = this.state;
    console.log(idcmt);

    const index = data.findIndex((item) => item.id === id);
    console.log(index);
    if (index > -1) {
      cmt.push({
        idPost: id,
        id: new Date().getTime(),
        value: value,
      });
      data[index] = {
        ...data[index],
        cmt: cmt,
      };
    }
    this.setState({ data: [...data] });
  };
  onChangeCmt = (value, id) => {
    let { data, cmt, idcmt } = this.state;
    const index = data.findIndex((item) => item.id === id);
    console.log(index);
    const indexCmt = cmt.findIndex((item) => item.id === idcmt);
    console.log(indexCmt);
    if (index > -1 && indexCmt > -1) {
      cmt[indexCmt] = { ...cmt[index], value: value, id: idcmt };

      data[index] = { ...data[index], cmt: cmt[index] };
    }
    // this.setState({ cmt: [...cmt] });
    this.setState({ data: [...data] });
  };
  render() {
    const { name, show, showEdit, id, content, images, data, cmt } = this.state;
    return (
      <div className="App">
        <InputName onChangeName={this.handleSubmitName} />
        {name ? (
          <>
            <div className="status">
              <button onClick={this.onAdd}>
                {name}, ơi bạn đang nghĩ gì thế?
              </button>
            </div>
            <List
              showEdit={showEdit}
              data={data}
              cmt={cmt}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
              onSaveCmtData={this.onSaveCmtData}
              onEditCmt={this.onEditCmt}
              onDeleteCmt={this.onDeleteCmt}
              onChangeCmt={this.onChangeCmt}
            />
            <AddForm
              show={show}
              id={id}
              content={content}
              images={images}
              hideForm={this.hideForm}
              onSave={this.onSave}
            />
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
