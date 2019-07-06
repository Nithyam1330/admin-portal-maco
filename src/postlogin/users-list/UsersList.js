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
                </div>
                </div>

                <table className="table table-striped custom-table">
                    <thead>
                        <tr className="table-header">
                            <th className="search-data">
                                <input type="text" placeholder="Name" onKeyUp={(event) => this.search(event, 'name')}></input>
                            </th>

                            <th className="search-data">
                             
                                <input type="text" placeholder="Email" onKeyUp={(event) => this.search(event, 'email')}></input>
                            </th>

                            <th className="search-data">
                               
                                <input type="text" placeholder="Phone " onKeyUp={(event) => this.search(event, 'phoneNumber')}></input>
                            </th>

                            <th>
                                <span>User Id</span>
                               
                            </th>
                            <th>
                                <span>Work Out With Me Price</span>
                                
                            </th>

                            <th>
                                <span>Personal Training Price</span>
                               
                            </th>

                            <th>
                                <span>Trainer Activation</span>
                                
                            </th>
                            <th>
                                <span>Block Status</span>
                               
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users && this.state.users.map((res) => (
                                <React.Fragment key={res.userid}>
                                    <tr className="table-data">
                                        <td>{res.name}</td>
                                        <td>{res.email}</td>
                                        <td>{res.phoneNumber}</td>
                                        <td>{res.userid}</td>
                                        <td>{res.workOutWithMePrice}</td>
                                        <td>{res.personalTrainingPrice}</td>
                                        <td>
                                            {res.trainer_activation ? 'Active' : 'Inactive'}
                                        </td>

                                        <td>
                                            <div>
                                                <select className="form-control" value={res.isBlocked} onChange={(event) => this.statusChange(event, res)} disabled={!this.state.editableFields}>
                                                    <option value='BLOCKED'>BLOCKED</option>
                                                    <option value="ACTIVE">ACTIVE</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))
                        }

                    </tbody>
                </table>
                <div className="pagination-controls">
                {
                    this.state.users.length >= 10 && <Pagination ref={this.paginationRef} items={this.props.users} onChangePage={this.onChangePage} />

                }
                <div className="d-flex justify-content-end save-cancelbtn">
                    <span className="icon-cross cross-icon"onClick={() => this.revertChanges()}></span> &nbsp;
                    <span className="icon-tick" onClick={() => this.saveChanges()}></span>
                </div>
                </div>
               </div>
        )
    }
}

export default UsersList
