import * as React from "react";

export interface TodoProps {}

export interface TodoState {
  value: string;
}

class Todo extends React.Component<TodoProps, TodoState> {
  state = {
    value: "",
  };
  private changeHandler(e: any) {
    this.setState({
      ...this.state,
      value: e.target.value,
    });
  }
  private submitHandler() {
    alert(this.state.value);
  }
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <form className="form-inline" onSubmit={() => this.submitHandler()}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mx-sm-3"
                  placeholder="i want to do ..."
                  onChange={(e: any) => this.changeHandler(e)}
                  value={this.state.value}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active font-weight-bold"
                    id="nav-home-tab"
                  >
                    undone <span className="badge badge-secondary">9</span>
                  </a>
                  <a
                    className="nav-item nav-link font-weight-bold"
                    id="nav-profile-tab"
                  >
                    done <span className="badge badge-success">9</span>
                  </a>
                </div>
              </nav>
              <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                  <div>hello roocket</div>
                  <div>
                    <button type="button" className="btn btn-info btn-sm">
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ml-1"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
