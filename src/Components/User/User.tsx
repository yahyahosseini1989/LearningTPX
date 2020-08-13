import * as React from "react";
import { UserService } from "../Services/service.user";
import { IUser } from "./../Models/model.user";

export interface UserProps {}

export interface UserState {
  users: IUser | any;
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
        tags: [],
      },
    ],
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

  render() {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>EyeColor</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, index) => { //item yani element besaz va meghdar haee ke lazam dari ro beriz tosh, index ham ye meghdar uniqe hast baraye har itemi ke sakhte mishe, index ro be key pas midim
              return <tr key={index}> 
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.age}</td>
                <td>{item.eyeColor}</td>
                <td>{item.address}</td>
              </tr>
            })}
          </tbody>
        </table>
      </>
    );
  }
}
