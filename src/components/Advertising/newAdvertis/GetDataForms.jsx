import React,{useState} from 'react'
import {
    Container,
    Button,
    Form,
    Row,
    Col,
    Card,
} from "react-bootstrap";
 import Select from "react-select";

export default function GetDataForms() {
    const [InputFileImage, setInputFileImage] = useState([]);
    const [FileUplodeError, setFileUplodeError] = useState([]);
    const RenderImageFileInput=()=>{
        console.log("State =>",InputFileImage)
             return InputFileImage.map((img, index) => {
               return (
                 <div key={index} className="list-image-Advertis-wrapper__itme">
                   <div
                     className="img-tag"
                     style={{ backgroundImage: `url(${img.url})` }}
                     alt=""
                   />
                   <span className="list-image-Advertis-wrapper__itme-after">
                     <i
                       className="fa fa-trash-o"
                       data-id={`${img.id}`}
                       onClick={e => deleteImageFileInput(e)}
                     />
                   </span>
                 </div>
               );
             });
    }
    const RemderErrorFileUpload =()=>{
        if(FileUplodeError.length > 0){
            return (
            <Form.Text className="text-muted">
                <span className="error-form">
                {FileUplodeError}
                </span>
            </Form.Text>
            );
        }
    }
    const deleteImageFileInput =(e)=>{
        let imgElement =e.target;
        let newArray;
        console.log("eeeeeee", imgElement.getAttribute("data-id"));
        console.log("imgElement", imgElement);
        newArray = InputFileImage.filter(img => {
          return img.id != imgElement.getAttribute("data-id");
        });
        setInputFileImage(newArray)
    }
    const saveImageFileInput =(e)=>{
        let input = e.target;
        console.log("file type", input.files);

            if (input.files && input.files[0]) {
              var reader = new FileReader();

              reader.onload = function(e) {
                //   $("#blah").attr("src", e.target.result);
                if (input.files[0].type == "image/jpeg"){
                    setFileUplodeError("");
                    setInputFileImage(preveSatae => {
                    return [
                        ...preveSatae,
                        {
                        url: reader.result,
                        id: Math.floor(Math.random() * 1000) + 1
                        }
                    ];
                    });
                }else{
                    //set error
                    setFileUplodeError("فرمت عکس معتبر نیست");
                }
                  
              };

              reader.readAsDataURL(input.files[0]);
            }
    }
    return (
      <>
        <Card body>
          <Form>
            <Row>
              <Col lg="6">
                <Form.Group id="carName">
                  <Form.Label className="form-control-label"> شهر *</Form.Label>
                  <Select
                    name="vehicle"
                    placeholder={"انتخاب شهر"}
                    // placeholder={datainput.AllData.hasOwnProperty('vehicle') ? carTypeData.label : "نام خودرو" }
                    // options=""
                    isRtl={true}
                    // onChange={e => {
                    //     setcarTypeData(e);
                    //     setloader_type_disable({
                    //         state: false
                    //     })
                    //     setErrorSelect2(prevState => {
                    //         return {
                    //             ...prevState,
                    //             errors: ['Errorvehicle']
                    //         }
                    //     })
                    // }}
                  />
                  {/* <Form.Text className="text-muted">
                                    {

                                        errors.vehicle &&
                                        errors.vehicle.type === 'required' &&
                                        <span className="text-right error-form">لطفا نام خودرو را وارد کنید</span>
                                    }
                                </Form.Text>*/}
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group id="loader_type">
                  <Form.Label className="form-control-label">
                    محدودهٔ آگهی *
                  </Form.Label>
                  <Select
                    name="loader_type"
                    // placeholder={datainput.AllData.hasOwnProperty('loader_type') ? loader_type_state.label : "نوع بارگیر" }
                    placeholder={"انتخاب محله ..."}
                    // isDisabled={loader_type_disable.state}
                    // options={}
                    isRtl={true}
                    // onChange={e => {
                    //     setloader_type_state(e);
                    //     setErrorSelect2(prevState => {
                    //         return {
                    //             ...prevState,
                    //             errors: [...ErrorSelect2.errors, 'loader_type']
                    //         }
                    //     })
                    // }}
                  />
                  {/* <Form.Text className="text-muted">
                                    {

                                        errors.loader_type &&
                                        errors.loader_type.type === 'required' &&
                                        <span className="text-right error-form">لطفا مقادیر پلاک را درست وارد نمایید</span>
                                    }
                                </Form.Text> */}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group id="image-Advertis">
                  <Form.Label className="form-control-label">
                    {" "}
                    عکس آگهی{" "}
                  </Form.Label>
                  <br />
                  <span className="form-control-description" >
                    افزودنِ عکس بازدید آگهی شما را تا سه برابر افزایش می‌دهد.
                  </span>

                  <Form.Control
                    type="file"
                    placeholder="chose file"
                    accept=".jpg, .jpeg"
                    onChange={e => saveImageFileInput(e)}
                  />
                  <div className="list-image-Advertis-wrapper">
                    {RenderImageFileInput()}
                  </div>
                  {RemderErrorFileUpload()}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group id="image-Advertis">
                  <Form.Label className="form-control-label">
                    شمارهٔ موبایل
                  </Form.Label>
                  <br />
                  <span className="form-control-description" >
                   توجه: لطفاً پس از ثبت آگهی، از طریق هیچ پیامکی برای پرداخت وجه جهت انتشار آگهی اقدام نکنید.
                  </span>
                  <span className="form-control-description" >
                   کد تأیید به شمارهٔ موبایل شما ارسال خواهد شد. تماس و چت نیز با این شماره انجام می‌شود.
                  </span>
                  
                  <Form.Control type="text" name="mobile" id="mobile" placeholder="شماره موبایل شما (**** *** 0911)" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    custom
                    type="checkbox"
                    checked
                    id={`custom-chat`}
                    label="چت دیوار فعال شود"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <label className="form-control-label form-label">نوع آگهی</label>
                <div  className="mb-3">
                  <Form.Check
                    custom
                    inline
                    checked
                    label="فروشی"
                    type="radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    custom
                    inline
                    label="اجاره ای"
                    type="radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    custom
                    inline
                    label="درخواستی"
                    type="radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group id="image-Advertis">
                  <Form.Label className="form-control-label">
                   قیمت
                  </Form.Label>
                  <Form.Control type="number" name="price" id="price" placeholder="قیمت به تومان" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="my-4">
                <Form.Group controlId="taves">
                  <Form.Check
                    custom
                    type="checkbox"
                    id={`taves`}
                    label="مایلم معاوضه کنم"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group id="image-Advertis">
                  <Form.Label className="form-control-label mb-3">
                    عنوان آگهی
                  </Form.Label>
                  <br />
                  <span className="form-control-description" >
                  در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.
                  </span>

                  <Form.Control type="text" name="title" id="title" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group id="image-Advertis">
                  <Form.Label className="form-control-label mb-3">
                    توضیحات آگهی
                  </Form.Label>
                  <br />
                  <span className="form-control-description" >
                   جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .
                  </span>

                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card>
      </>
    );
}
