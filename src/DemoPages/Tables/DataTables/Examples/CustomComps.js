import React, {Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

import ReactTable from "react-table";
import PageTitle from '../../../../Layout/AppMain/PageTitle';

import avatar2 from '../../../../assets/utils/images/avatars/2.jpg';

import {makeData} from "./utils";

export default class DataTableCustomComps extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const {data} = this.state;

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="PaperWork"
                            // subheading="Choose between regular React Bootstrap tables or advanced dynamic ones."
                            icon="pe-7s-medal icon-gradient bg-tempting-azure"
                        />
                    </div>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <ReactTable
                                        data={data}
                                        columns={[{
                                            columns: [
                                                {
                                                    Header: 'Date',
                                                    accessor: 'age'
                                                },
                                                {
                                                    Header: 'Surname',
                                                    accessor: 'firstName',
                                                    Cell: row => (
                                                        <div>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">
                                                                            {row.value}
                                                                        </div>
                                                                        <div className="widget-subheading opacity-10">
                                                                            <span>
                                                                                <b className="text-success">56,24</b>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                </div>
                                                    )
                                                },
                                                {
                                                    Header: 'Initials',
                                                    accessor: 'initials'
                                                },
                                                {
                                                    Header: 'ID',
                                                    accessor: 'age'
                                                },
                                                {
                                                    Header: 'Attorney',
                                                    accessor: 'attorney'
                                                },{
                                                    Header: 'Attorney Ref',
                                                    accessor: 'attorney_ref'
                                                },
                                                {
                                                    Header: 'HR',
                                                    accessor: 'age'
                                                },
                                                {
                                                    Header: 'RAF1',
                                                    accessor: 'age'
                                                },
                                                {
                                                    Header: 'AoD',
                                                    accessor: 'lastName'
                                                },
                                                {
                                                    Header: 'Instruction Letter',
                                                    accessor: 'instruction_letter'
                                                },
                                                {
                                                    Header: 'RAF 4',
                                                    accessor: 'visits'
                                                },
                                            ]
                                        },
                                        {
                                            columns: [

                                                {
                                                    Header: 'Actions',
                                                    accessor: 'actions',
                                                    Cell: row => (
                                                        <div className="d-block w-100 text-center">
                                                            <UncontrolledButtonDropdown>
                                                                <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                                                                    <i className="lnr-menu-circle btn-icon-wrapper"/>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="rm-pointers dropdown-menu-hover-link">
                                                                    <DropdownItem header>Header</DropdownItem>
                                                                    <DropdownItem>
                                                                        <i className="dropdown-icon lnr-inbox"> </i>
                                                                        <span>Attach</span>
                                                                    </DropdownItem>
                                                                    <DropdownItem>
                                                                        <i className="dropdown-icon lnr-file-empty"> </i>
                                                                        <span>Request</span>
                                                                    </DropdownItem>
                                                                    {/*<DropdownItem>*/}
                                                                        {/*<i className="dropdown-icon lnr-book"> </i>*/}
                                                                        {/*<span>Actions</span>*/}
                                                                    {/*</DropdownItem>*/}
                                                                    <DropdownItem divider/>
                                                                    <DropdownItem>
                                                                        <div>Progress Bar</div>
                                                                    </DropdownItem>
                                                                    <DropdownItem>
                                                                        {/*<i className="dropdown-icon lnr-picture"> </i>*/}
                                                                        {/*<span>Dividers</span>*/}
                                                                        <div className="progress-bar-sm progress"
                                                                             style={{
                                                                                 width: '100%',
                                                                                 backgroundColor: '#dadada',
                                                                             }}
                                                                        >
                                                                            <div className="progress-bar"
                                                                                 style={{
                                                                                     width: `55%`,
                                                                                     backgroundColor: row.value > 66 ? '#3ac47d'
                                                                                         : row.value > 33 ? '#fd7e14'
                                                                                             : '#d92550',
                                                                                     borderRadius: '2px',
                                                                                     transition: 'all .2s ease-out'
                                                                                 }}
                                                                            />
                                                                        </div>
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledButtonDropdown>
                                                        </div>
                                                    )
                                                }
                                            ]
                                        }]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}