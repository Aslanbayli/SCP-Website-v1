import React, { useState } from 'react';
import Axios from 'axios';


import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";

export default function Snippet() {

    const server = Axios.create({
        baseURL: "http://localhost:5000"
      });

    const [snippet, setSnippet] = useState("");

    const addSnippet = async (e) => {
        e.preventDefault();
        try {
            const response = await server.post('/add-snippet', {
                content: snippet,
                user_id: 10
            });
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="9" xl="7">
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">Code Snippets</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBInput
                                            label="Enter your snippet"
                                            id="form1"
                                            type="text"
                                            value={snippet}
                                            onChange={e => {
                                                setSnippet(e.target.value);
                                            }}
                                        />
                                    </MDBCol>
                                    <MDBCol size="12">
                                        <MDBBtn type="submit" onClick={addSnippet}>Save</MDBBtn>
                                    </MDBCol>

                                </MDBRow>
                                <MDBTable className="mb-4">
                                    <MDBTableHead>
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Snippet</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Code goes here</td>
                                            <td>In progress</td>
                                            <td>
                                                <MDBBtn type="submit" color="danger">
                                                    Delete
                                                </MDBBtn>

                                                <MDBBtn type="submit" color="success" className="ms-1">
                                                    Finished
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Code goes here</td>
                                            <td>In progress</td>
                                            <td>
                                                <MDBBtn type="submit" color="danger">
                                                    Delete
                                                </MDBBtn>

                                                <MDBBtn type="submit" color="success" className="ms-1">
                                                    Finished
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Code goes here</td>
                                            <td>In progress</td>
                                            <td>
                                                <MDBBtn type="submit" color="danger">
                                                    Delete
                                                </MDBBtn>

                                                <MDBBtn type="submit" color="success" className="ms-1">
                                                    Finished
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}