import React from 'react'
import {
    Container,
    Button,
    Form,
    Row,
    Col,
    Card,
} from "react-bootstrap";
import Select from "react-select";
import { useForm } from "react-hook-form";

export default function ReportProblem() {
    const Probblem = [
        { value: 'area-1', label: 'کلاهبرداری / درخواست بیعانه' },
        { value: 'area-2', label: 'اطلاعات دروغ' },
        { value: 'area-3', label: 'کالای دزدی' },
        { value: 'area-3', label: 'قیمت بیشتر از ارزش کال' },
        { value: 'area-3', label: 'محتوای نامناسب' },
        { value: 'area-3', label: 'آگهی تکراری' },
        { value: 'area-3', label: 'آگهی فروخته‌شده / ناموجود '},
        { value: 'area-3', label: 'دسته‌بندی اشتباه' },
        { value: 'area-3', label: 'سایر دلایل' },

    ]
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <Form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group id="loader_type">
                    <Form.Label className="form-control-label d-block text-right">
                        دلیل‌های پیش‌فرض:
                  </Form.Label>
                    <Select
                        name="loader_type"
                        placeholder={"گزارش آگهی ..."}
                        options={Probblem}
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
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="d-block text-right">دلیل شما:</Form.Label>
                    <Form.Control placeholder="دلیل خود را اینجا وارد نمایید" as="textarea" rows="6" />
                </Form.Group>
                <button className="btn-divar-cancel mx-2" type="submit">
                    بی خیال
                </button>
                <button className="btn-divar" type="submit">
                    ارسال گزارش
                </button>
           </Form>
        </>
    )
}
