import * as React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {

}

export const FormikElement: React.FunctionComponent<IProps> = () => {

    const initialValueOfForm = {
        firstName: "",
        email: "",
        phone: ""
    }
    const SubmitForm = async (v: any) => {
        console.log(v);
    }
    const validationForm = Yup.object({
        firstName: Yup.string().required("اجباری"),
        phone: Yup.string(),
        email: Yup.string().email('Invalid email address').required('Required'),
    })

    return (
        <>
            <Formik
                initialValues={initialValueOfForm}
                onSubmit={(v) => SubmitForm(v)}
                validationSchema={validationForm}
            >
                {({ handleSubmit, handleReset, isValid, dirty, handleChange, handleBlur, errors }) => (
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id=""
                        />
                        <div>
                            <ErrorMessage name={"firstName"} />
                        </div>
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id=""
                        />
                        <Field name={"phone"} />
                        <div>
                            {/* {errors.firstName && touched.firstName && errors.firstName} */}
                        </div>
                        <button
                            // onClick={()=>handleSubmit}
                            type={"submit"}
                        >
                            ارسال
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
};