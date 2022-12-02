import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBAccordion,
    MDBAccordionItem,
    MDBRow,
    MDBCol,
    MDBFooter,
} from 'mdb-react-ui-kit';
import SCPLOGO from './images/scplogo.jpg'



export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <>
            {/* components for the navbar*/}
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img src={SCPLOGO} height='40'></img>

                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='/practice'>Practice</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='https://bullsconnect.usf.edu/login_only?redirect=https%3a%2f%2fbullsconnect.usf.edu%2ffeeds%3ftype%3dclub%26type_id%3d58513%26tab%'>
                                    BullsConnect</MDBNavbarLink>
                            </MDBNavbarItem>


                            <MDBNavbarItem>
                                <MDBNavbarLink href='/codesnippets'>
                                    Code Snippets</MDBNavbarLink>
                            </MDBNavbarItem>


                        </MDBNavbarNav>
                        <MDBNavbarLink href='/sign-in'>Login</MDBNavbarLink>

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


            {/* components for the accordion*/}
            <MDBAccordion initialActive={0}>
                <MDBAccordionItem collapseId={1} headerTitle='Weekly Challenges'>
                    <MDBRow>
                        <MDBCol md='3'>
                            <strong>Status</strong>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>

                        </MDBCol>
                        <MDBCol md='6'>
                            <strong>Problem</strong>
                            <div class="col-4"><a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank">Top K Frequent Elements</a></div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                        </MDBCol>
                        <MDBCol md='3'>
                            <strong>Difficulty</strong>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>

                        </MDBCol>
                    </MDBRow>
                </MDBAccordionItem><MDBAccordionItem collapseId={2} headerTitle='Arrays And Hashing'>
                    <MDBRow>
                        <MDBCol md='3'>
                            <strong>Status</strong>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>

                        </MDBCol>
                        <MDBCol md='6'>
                            <strong>Problem</strong>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                        </MDBCol>
                        <MDBCol md='3'>
                            <strong>Difficulty</strong>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>

                        </MDBCol>
                    </MDBRow>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Linked List'>
                    <MDBRow>
                        <MDBCol md='3'>
                            <strong>Status</strong>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>

                        </MDBCol>
                        <MDBCol md='6'>
                            <strong>Problem</strong>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                        </MDBCol>
                        <MDBCol md='3'>
                            <strong>Difficulty</strong>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>

                        </MDBCol>
                    </MDBRow>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle='Sorting'>
                    <MDBRow>
                        <MDBCol md='3'>
                            <strong>Status</strong>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>

                        </MDBCol>
                        <MDBCol md='6'>
                            <strong>Problem</strong>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                        </MDBCol>
                        <MDBCol md='3'>
                            <strong>Difficulty</strong>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>

                        </MDBCol>
                    </MDBRow>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={5} headerTitle='Stack'>
                    <MDBRow>
                        <MDBCol md='3'>
                            <strong>Status</strong>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>

                        </MDBCol>
                        <MDBCol md='6'>
                            <strong>Problem</strong>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                            <div class="col-4">link</div>
                        </MDBCol>
                        <MDBCol md='3'>
                            <strong>Difficulty</strong>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>
                            <div class="col-4">Tag</div>

                        </MDBCol>
                    </MDBRow>
                </MDBAccordionItem>
            </MDBAccordion>



            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>

                        <a href='https://www.usf.edu/engineering/cse/undergraduate/student-organizations.aspx' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='https://www.instagram.com/usf_scp/' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='https://www.linkedin.com/company/society-of-competitive-programmers/' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>

                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Society of Competitive Programmers
                                </h6>
                                <p>
                                    The Society of Competitive Programmers is dedicated to encouraging students to participate in programming competitions and hackathons.
                                    We facilitate the formation and mentoring of teams by providing technical workshops and hands-on programming sessions.
                                </p>
                            </MDBCol>



                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='https://stackoverflow.com/' className='text-reset'>
                                        Stack Overflow
                                    </a>
                                </p>
                                <p>
                                    <a href='https://leetcode.com/problemset/all/' className='text-reset'>
                                        Leetcode
                                    </a>
                                </p>
                                <p>
                                    <a href='https://www.usf.edu/engineering/cse/index.aspx' className='text-reset'>
                                        USF College of Engineering
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    4202 E Fowler Ave, Tampa, FL 33620
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    http://usfscp.com/home
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 813-974-3087
                                </p>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        USF Society of Competitive Programmers
                    </a>
                </div>
            </MDBFooter>

        </>
    );
}

