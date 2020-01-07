import React,{useState} from 'react'
import {
    Container,
    Row,
    Col,
    Modal,
    ListGroup,
    ListGroupItem,
    Card
} from "reactstrap";
import SelectCategory from './SelectCategory';
import GetDataForms from './GetDataForms';
import SelectCategoryItme from './SelectCategoryItme';

export default function NewAdvertising() {
    const [stepComponent, setstepComponent] = useState({
        step : 1
    });
    const [AllDataForm, setAllDataForm] = useState({});
    const getDataForm = (data)=>{
        setAllDataForm(prevState =>{
            return {
                ...prevState,
                ...data.form,
            }
        })
        if(data.step != ""){
            setstepComponent({
                step : data.step
            })
        }
    }
    const  ComponentRendering =()=>{
        switch (stepComponent.step) {
            case 1:
                return(
                    <SelectCategory getData={getDataForm} />
                )
            case 2 :
                return(
                    <SelectCategoryItme getData={getDataForm} />
                )
            case 3 :
                return(
                    <GetDataForms getData={getDataForm}/>
                )
        
            default:
                return "";
        }
    }
    return (
        <section className="new-advertising">
            {console.log("Alldata ---->>",AllDataForm)}
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="col-12 col-md-10">
                        <h1>ثبت آگهی جدید</h1>
                        <div className="advertising-container">
                            {ComponentRendering()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
