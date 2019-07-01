import React, { Component } from 'react'
import { searchFilterArrayOfJson } from '../../shared/services/custom-search/CustomSearch';
import Pagination from '../../shared/components/pagination/Pagination';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            users: JSON.parse(JSON.stringify(this.props.users)),
            pageOfItems: [],
            editableFields: false
        }
        this.onChangePage = this.onChangePage.bind(this);

    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({
            users: pageOfItems
        });
    }

    search = (event) => {
        this.setState({
            search: event.target.value
        }, () => {
            const headers = ['value'];
            const searchedArray = searchFilterArrayOfJson(this.props.users, this.state.search, headers);
            this.setState({
                users: searchedArray
            })
        })
    }
    statusChange(ev, item) {
        const index = this.state.users.findIndex(obj => obj.id === item.id);
        if (index !== -1) {
            this.state.users[index].status = ev.target.value;
            this.forceUpdate();
        }
    }

    saveChanges() {
        console.log(this.state.users);
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
            <div>
                <div className="d-flex justify-content-between">
                    <div className="input-group mb-3">
                        <input type="text" value={this.state.search} placeholder="Search by ..." className="form-control" onChange={(event) => this.search(event)} />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => this.changeIsEditable()}>Edit</button>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users && this.state.users.map((res) => (
                                <React.Fragment key={res.id}>
                                    <tr>
                                        <th>{res.id}</th>
                                        <th>{res.value}</th>
                                        <th>
                                            <div className="form-group">
                                                <select className="form-control" value={res.status} onChange={(event) => this.statusChange(event, res)} disabled={!this.state.editableFields}>
                                                    <option value='PENDING'>PENGING</option>
                                                    <option value="COMPLETED">COMPLETED</option>
                                                </select>
                                            </div>
                                        </th>
                                    </tr>
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination items={this.props.users} onChangePage={this.onChangePage} />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => this.revertChanges()}>Cancel</button> &nbsp;
                    <button className="btn btn-primary" onClick={() => this.saveChanges()}>Save</button>

                </div>
            </div>
        )
    }
}

export default UsersList
