import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserService } from './../../../Services/service.user';

interface IProps { }

const Hook: React.FunctionComponent<IProps> = () => {

    const [Counter, setCounter] = useState(0);
    let reset = () => { setCounter(0) };
    let _User = new UserService();
    const [Mammad, setMammad] = useState([
        {
            address: "",
            age: "",
            eyeColor: "",
            id: "",
            name: {
                first: "",
                last: ""
            },
        }
    ]);
    const getUser = async () => {
        try {
            let res = await _User.getAll();
            setMammad(res.data as any)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <section>
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
                                    {Mammad.map((item, index) => {
                                        return (

                                            <tr key={index}>
                                                <td>{item.name.first}</td>
                                                <td>{item.name.last}</td>
                                                <td>{item.age}</td>
                                                <td>{item.eyeColor}</td>
                                                <td>{item.address}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
            {/* <h1> Hello World!</h1>
            <button onClick={() => { setCounter(Counter + 1) }}>اضافه کردن</button>
            <span>{Counter}</span>
            <button onClick={() => { setCounter(Counter - 1) }}>کم کردن</button>
            <button onClick={() => { reset() }}>ریست</button> */}

        </>
    )
};

export default Hook;