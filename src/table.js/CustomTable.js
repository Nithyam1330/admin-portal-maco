import React, { Component } from 'react'
import Pagination from '../pagination/Pagination';
import { FORM_TYPE } from './FormType';

class CustomTable extends Component {
    constructor(props) {
        super(props)
        this.backup = this.deepCone(this.props.data);
        this.items = this.props.data;
        this.items.forEach(element => {
            element['isEditable'] = false
        });
        this.backup.forEach(element => {
            element['isEditable'] = false
        });
        this.state = {
            exampleItems: this.items,
            pageOfItems: []
        };
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
        this.editClick = this.editClick.bind(this)
    }
    editClick(item) {
        const index = this.items.findIndex(x => x.id === item.id);
        if (index !== -1) {
            this.backup[index].isEditable = true;
            this.setState({
                exampleItems: this.backup
            })
        }
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    deepCone(input) {
        return JSON.parse(JSON.stringify(input));
    }
    saveHandler(item) {
        this.setState({
            exampleItems: this.backup
        }, () => {
            let index = this.backup.findIndex(obj => obj.id === item.id);
            if (index !== -1) {
                delete this.backup[index].isEditable;
                console.log(this.backup[index]);
                // save service call
            }
        })
    }

    cancelHandler(item) {
        const index = this.items.findIndex(x => x.id === item.id);
        if (index !== -1) {
            this.backup[index].isEditable = false;
            this.setState({
                exampleItems: this.backup
            })
        }
    }

    valueChange(event, item, col) {
        const index = this.items.findIndex(x => x.id === item.id);
        if (index !== -1) {
            this.backup[index][col.mappingId] = event.target.value;
        }
    }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover table-bordered">
                    <tbody>
                        <tr>
                            {
                                this.props.columnHeaders.map(header => (
                                    <th key={header.title} className="col text-center">{header.title}</th>
                                ))
                            }
                        </tr>
                        {
                            this.state.pageOfItems.map((item, index) => (
                                <tr key={item.id}>
                                    {
                                        item.isEditable ?
                                            <React.Fragment>
                                                {
                                                    this.props.columnHeaders.map(col => (
                                                        <React.Fragment key={col.mappingId}>
                                                                                                                            {col.isEditable}
{col.isEditable}
                                                            <React.Fragment>
                                                                {
                                                                    col.isEditable ?
                                                                        <React.Fragment>
                                                                            {
                                                                                col.type === FORM_TYPE.TEXT &&
                                                                                <td className="form-group">
                                                                                    {/* <label for="exampleFormControlInput1">Email address</label> */}
                                                                                    <input type="text" className="form-control" value={item.value} onChange={(event) => this.valueChange(event, item, col)} placeholder="name" />
                                                                                </td>
                                                                            }
                                                                            {
                                                                                col.type === FORM_TYPE.SELECT &&
                                                                                <td className="col">
                                                                                    <select className="form-control" id={item.id} selected={item.status} onChange={(event) => this.valueChange(event, item, col)}>
                                                                                        {
                                                                                            col.options.map((optionValue) => (
                                                                                                <option value={optionValue.key} key={optionValue.key}>{optionValue.value}</option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                </td>
                                                                            }
                                                                        </React.Fragment> :
                                                                        <React.Fragment>
                                                                            <td>{item[col.mappingId]}</td>
                                                                        </React.Fragment>
                                                                }
                                                            </React.Fragment>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </React.Fragment> :
                                            <React.Fragment>
                                                {
                                                    this.props.columnHeaders.map(columns => (
                                                        <td>{item[columns.mappingId]}</td>
                                                    ))
                                                }
                                            </React.Fragment>
                                    }
                                    <td>
                                        {item.isEditable ? <div>
                                            <button className="btn btn-primary" onClick={() => this.saveHandler(item)}>Save</button>
                                            &nbsp;<button className="btn btn-danger" onClick={() => this.cancelHandler(item)}>Cancel</button>
                                        </div> : <button onClick={() => this.editClick(item)} className="btn btn-primary">Edit</button>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />

            </div>
        )
    }
}

export default CustomTable;

