import React, { Component } from 'react'
import { searchFilterArrayOfJson } from '../../shared/services/custom-search/CustomSearch';
import Pagination from '../../shared/components/pagination/Pagination';
import './UsersList.css';
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            users: JSON.parse(JSON.stringify(this.props.users)),
            pageOfItems: [],
            editableFields: false
        }
        this.paginationRef = React.createRef();
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({
            users: pageOfItems
        });
    }

    search = (event, header) => {
        this.setState({
            search: event.target.value
        }, () => {
            const headers = [header];
            const searchedArray = searchFilterArrayOfJson(this.props.users, this.state.search, headers);
            this.setState({
                users: searchedArray
            }, () => {
                console.log(this.paginationRef);
                if (this.paginationRef && this.paginationRef.current) {
                    this.paginationRef.current.setPage(1);
                }
            })
        })
    }
    statusChange(ev, item) {
        const index = this.state.users.findIndex(obj => obj.userid === item.userid);
        if (index !== -1) {
            this.state.users[index].isBlocked = ev.target.value;
            this.forceUpdate();
        }
    }

    saveChanges() {
        this.setState({
            editableFields: false
        })
    }
    revertChanges() {
        this.setState({
            editableFields: false
        })
    }
    changeIsEditable() {
        this.setState({
            editableFields: true
        })
    }
    render() {
        return (
            <div className="Main-content">
                <div className="d-flex justify-content-between serch-edit">
                    <div className="custom-input">
                        <input type="text" value={this.state.search} placeholder="Search by ..." className="form-control" onChange={(event) => this.search(event, 'name')} />
                    </div>
                    <div>
                    <span class="icon-edit-icon" onClick={() => this.changeIsEditable()}></span>
                        {/* <button className="btn btn-primary" onClick={() => this.changeIsEditable()}>Edit</button> */}
                </div>
                </div>

                <table className="table table-striped custom-table">
                    <thead>
                        <tr className="table-header">
                            <th scope="col">
                                <span>Name</span>
                                <br></br>
                                <input type="text" placeholder="Search by Name" onKeyUp={(event) => this.search(event, 'name')}></input>
                            </th>

                            <th scope="col">
                                <span>Email</span>
                                <br></br>
                                <input type="text" placeholder="Search by Email" onKeyUp={(event) => this.search(event, 'email')}></input>
                            </th>

                            <th scope="col">
                                <span>Phone Number</span>
                                <br></br>
                                <input type="text" placeholder="Search by Phone " onKeyUp={(event) => this.search(event, 'phoneNumber')}></input>
                            </th>

                            <th scope="col">
                                <span>User Id</span>
                                <br></br>
                            </th>
                            <th scope="col">
                                <span>Work Out With Me Price</span>
                                <br></br>
                            </th>

                            <th scope="col">
                                <span>Personal Training Price</span>
                                <br></br>
                            </th>

                            <th scope="col">
                                <span>Trainer Activation</span>
                                <br></br>
                            </th>
                            <th scope="col">
                                <span>Block Status</span>
                                <br></br>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users && this.state.users.map((res) => (
                                <React.Fragment key={res.userid}>
                                    <tr>
                                        <th>{res.name}</th>
                                        <th>{res.email}</th>
                                        <th>{res.phoneNumber}</th>
                                        <th>{res.userid}</th>
                                        <th>{res.workOutWithMePrice}</th>
                                        <th>{res.personalTrainingPrice}</th>
                                        <th>
                                            {res.trainer_activation ? 'Active' : 'Inactive'}
                                        </th>

                                        <th>
                                            <div className="form-group">
                                                <select className="form-control" value={res.isBlocked} onChange={(event) => this.statusChange(event, res)} disabled={!this.state.editableFields}>
                                                    <option value='BLOCKED'>BLOCKED</option>
                                                    <option value="ACTIVE">ACTIVE</option>
                                                </select>
                                            </div>
                                        </th>
                                    </tr>
                                </React.Fragment>
                            ))
                        }

                    </tbody>
                </table>
                {
                    this.state.users.length >= 10 && <Pagination ref={this.paginationRef} items={this.props.users} onChangePage={this.onChangePage} />

                }
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => this.revertChanges()}>Cancel</button> &nbsp;
                    <button className="btn btn-primary" onClick={() => this.saveChanges()}>Save</button>

                </div>
            </div>
        )
    }
}

export default UsersList
