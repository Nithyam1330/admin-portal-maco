import React, { Component } from 'react'
import { searchFilterArrayOfJson } from '../../shared/services/custom-search/CustomSearch';
import Pagination from '../../shared/components/pagination/Pagination';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.state = {
            search: '',
            users: JSON.parse(JSON.stringify(this.props.users)),
            pageOfItems: []
        }
        // this.onChangePage = this.onChangePage.bind(this);

    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({
            pageOfItems: pageOfItems
        });
    }

    search = (event) => {
        this.setState({
            search: event.target.value
        }, () => {
            const headers = ['value'];
            const searchedArray = searchFilterArrayOfJson(this.props.users, this.state.search, headers);
            console.log(searchedArray);
            this.setState({
                users: searchedArray
            })
        })
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" value={this.state.search} placeholder="Search by ..." className="form-control" onChange={(event) => this.search(event)} />
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
                            this.state.users.map((res) => (
                                <React.Fragment key={res.id}>
                                    <tr>
                                        <th>{res.id}</th>
                                        <th>{res.value}</th>
                                        <th>
                                            <div className="form-group">
                                                <select className="form-control" value={res.status}>
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
                <Pagination items={this.props.users} onChangePage={() => this.onChangePage()} />

            </div>
        )
    }
}

export default UsersList
