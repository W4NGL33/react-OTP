import React, { Component } from 'react'

export default class DailyPaymentResult extends Component {
    render() {
        return (
            <div>
                <Col md={8}> 
                <Table striped bordered hover size="sm">
                    <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Payment No</th>
                                        <th>MDA Code</th>
                                        <th>MDA Name</th>
                                        <th>Beneficiary</th>
                                        <th>Amount (N)</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        {/* <th>organizationId</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.paymentreports.map((item, i) => (
                                        <tr key={item.id}>
                                            <td>{i + 1}</td>
                                            <td>{item.paymentBatchNumber}-{item.lineNo}</td>
                                            <td>{item.code}</td>
                                            <td>{item.organization}</td>
                                            <td>{item.beneficiaryName}</td>
                                            <td>{item.paymentAmount}</td>
                                            <td>{item.description}</td>
                                            <td>{item.updatedDate}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                            </Col>
            </div>
        )
    }
}
