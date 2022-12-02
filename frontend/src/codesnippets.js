import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import SCPLOGO from './images/scplogo.jpg'
import Snippet from './component/snippet'
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

            {/*creating code snippet*/}
            <Snippet />



        </>
    );
}