import * as React from "react";
import { UserService } from "../Services/service.user";
import { IUser } from "./../Models/model.user";
import Modal from "react-bootstrap/esm/Modal";
import button from "react-bootstrap/esm/button";
import DeleteModal from './../Pages/Others/DeleteModal/DeleteModal';
import Input from './../Pages/Others/Input/Input';
import { History } from "history";

export interface UserProps { 
  history: History;
}

export interface UserState {
  users: IUser | any;
  showModal: boolean;
  sendData: object;
  onToggle: boolean;
}

export class User extends React.Component<UserProps, UserState> {
  state = {
    users: [
      {
        id: "",
        age: 0,
        eyeColor: "",
        name: {
          first: "",
          last: "",
        },
        address: "",
        midd: "",
        tags: [],
      },
    ],
    showModal: false,
    sendData: {
      age: 0,
      eyeColor: "",
      address: "",
    },
    onToggle: false,
  };

  private userService = new UserService();

  private async fethData() {
    const res = await this.userService.getAll();
    this.setState({
      ...this.state,
      users: res.data,
    });
    // console.log(res.data);
  }
  componentDidMount() {
    this.fethData();
  }

  private AddUser = () => {
    this.setState({
      ...this.state,
      showModal: true,
    });
  };
  private handleClose = () => {
    this.setState({
      ...this.state,
      showModal: false,
    });
  };
  private handleEdit = () => {
    this.setState({
      ...this.state,
      showModal: true,
    });
  }

  private goToInput() {
    this.props.history.push("/Input/MyDropDown")
  }

  rowID: any = "";
  private handleDelete = (ID: string) => {
    this.setState({
      ...this.state,
      onToggle: true,
    })
    this.rowID = ID
  }
  private handleCloseModal() {
    this.setState({
      ...this.state,
      onToggle: false,
    })
  }


  private handleChange() {
    alert("")
  }


  private async removeItem(rowID: string) {
    try {
      await this.userService.deleteData(rowID);
    } catch (error) {

    }
  }
  private onChangeHandler(value: any, ElName: "age" | "eyeColor" | "address") {
    this.setState({
      ...this.state,
      sendData: {
        ...this.state.sendData,
        [ElName]: value,
      }
    });
  }
  private async onclickHandler() {
    let x = this.state.sendData;
    const post = await this.userService.postData(x);

  }
  render() {
    return (
      <>
      <button 
      onClick={()=>{this.goToInput()}}
      >gotoInput</button>
        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.handleClose();
          }}
        >
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control mb-3"
              value={this.state.sendData.age}
              onChange={(e: any) => {
                this.onChangeHandler(e.target.value, "age");
              }}
            />
            <input
              className="form-control mb-3"
              value={this.state.sendData.address}
              onChange={(e: any) => {
                this.onChangeHandler(e.target.value, "address");
              }}
            />
            <input
              className="form-control mb-3"
              value={this.state.sendData.eyeColor}
              onChange={(e: any) => {
                this.onChangeHandler(e.target.value, "eyeColor");
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.handleClose();
              }}
            >
              Close
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                this.onclickHandler();
              }}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>

        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-sm bg-light w-100 p-3 d-flex align-items-start justify-content-around ">
              <h1>Users Detail</h1>
              <button
                onClick={() => {
                  this.AddUser();
                }}
                className="btn btn-outline-primary"
              >
                Add User
              </button>
            </nav>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Age</th>
                  <th>EyeColor</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((item: any, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.age}</td>
                      <td>{item.eyeColor}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          onClick={() => { this.handleEdit() }}
                          className="btn btn-warning"
                        >Edit</button>
                      </td>
                      <td>
                        <button
                          onClick={() => { this.handleDelete(item.id) }}
                          className="btn btn-danger"
                        >Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <DeleteModal
          onDelete={(rowID: string) => { this.removeItem(rowID) }}
          rowID={this.rowID}
          onShow={this.state.onToggle}
          onHide={() => { this.handleCloseModal() }}
        />

        <Input
          onChange={() => {this.handleChange()}}
          type={"text"}
          className={"form-control"}
          placeholder={"HI.."}
          required={true} 
          label={"inputLabel"}
          name={"inputName"}
          disabled={true}
        />
        
      </>
    );
  }
}
