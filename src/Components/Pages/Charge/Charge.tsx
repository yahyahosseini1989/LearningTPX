import * as React from 'react';
import Modal from 'react-bootstrap/esm/Modal';

export interface ChargeProps {

}

export interface ChargeState {
    phoneNumber: number;
    showModal: boolean;
    charge: number;
}

class Charge extends React.Component<ChargeProps, ChargeState> {

    state = {
        phoneNumber: 0,
        showModal: false,
        charge: 0,
        selectCharge: 0,
    }
    private handleChange = (e: any) => {
        this.setState({
            ...this.state,
            phoneNumber: e.target.value,
        })
    }
    private handleClick() {
        this.setState({
            ...this.state,
            showModal: true,
        })
    }
    private handleClose() {
        this.setState({
            ...this.state,
            showModal: false,
        })
    }
    private handleCharge(item: any, index: number) {
        this.setState({
            ...this.state,
            charge: item,
        })

    }
    // private handleSave() {
    //     this.setState({
    //         ...this.state,
    //         selectCharge: this.
    //     })

    // }
    render() {
        return (
            <>
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>
                            <h2 className="float-md-right w-100 text-right">خرید شارژ</h2>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <p className="text-right">شماره همراه خود را وارد کنید</p>                        {
                            [1000, 2000, 5000, 10000].map((item, index) => (
                                <div className="btn btn-secondary w-50 p-2 mb-4 border rounded shadow-sm"
                                    onClick={() => { this.handleCharge(item, index) }}
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))
                        }
                        <input
                            className="d-block w-100 p-2 mb-4 border rounded shadow-sm"
                            type="number"
                            name="phoneNum"
                            id="phoneNum"
                            value={this.state.charge}
                            onChange={(e) => { this.handleChange(e) }}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <button
                            onClick={() => { this.handleClose() }}
                            className="btn btn-secondary"
                        >
                            Close
                            </button>
                        <button
                            // onClick={() => { this.handleSave() }}
                            className="btn btn-secondary"
                        >
                            Save changes
                        </button>
                    </Modal.Footer>
                </Modal>




                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="parent border rounded shadow p-4 mt-4 bg-white small text-right">
                                <h2 className="ml-auto">خرید شارژ</h2>
                                <p className="ml-auto">شماره همراه خود را وارد کنید</p>
                                <input
                                    className="d-block w-100 p-2 mb-4 border rounded shadow-sm"
                                    type="number"
                                    name="phoneNum"
                                    id="phoneNum"
                                    value={this.state.phoneNumber}
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <button
                                    className="btn btn-success"
                                    onClick={() => { this.handleClick() }}
                                // disabled={this.state.phoneNumber == "" ? true : false}
                                >
                                    نوع شارژ
                                </button>
                                {/* <p>
                                    مقدار شارژ : {this.state.charge}
                                </p> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="parent border rounded shadow p-4 mt-4 bg-white small text-right">
                                <h2>
                                    ورود به پنل مدیریتی
                                </h2>
                                <button className="btn btn-success">
                                    ورود
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Charge;