import React, { Component } from 'react'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((res) => (
                                <React.Fragment key={res.id}>
                                    <tr>
                                        <th>{res.id}</th>
                                        <th>{res.value}</th>
                                        <th>
                                            <div class="form-group">
                                                <select class="form-control" value={res.status}>
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
            </div>
        )
    }
}

export default UsersList
