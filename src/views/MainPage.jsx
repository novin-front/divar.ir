import React,{useState,useEffect} from 'react'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import { Container, Row,Col } from "reactstrap";
import MainSidebar from 'components/sidebar/MainSidebar';
import Content from 'components/Container/Content';
import NewAdvertisLink from 'components/Advertising/newAdvertis/NewAdvertisLink';

export default function MainPage(props) {
    const [breakPoint, setbreakPoint] = useState()
    useEffect(() => {
        if (window.innerWidth > 922) {
            setbreakPoint("col-md-9")
        }
        // props.router.push('/foo')
    }, []);
    const deviceClass =()=>{
        if (window.innerWidth > 922) {
            setbreakPoint("col-md-9")
        }
        setbreakPoint("col-md-12")
    }
    return (
        <>
            {deviceClass}
            <Container fluid={true} id="mainpage">
                <Row className="d-flex justify-content-center">
                    <Col md={3} className="p-0 d-none-sm-m">
                        <MainSidebar />
                    </Col>
                    <Col className="col-md-9 col-12">
                        <Content/>
                        <NewAdvertisLink/>
                    </Col>
                </Row>
            </Container>
        </>
       
    )
}
