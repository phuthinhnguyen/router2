import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const users = 
        {  
            email:"admin@gmail.com",
            password:"letmein",
        }

    return(
        <center>
            <h1>Login account</h1>
            <Formik
                initialValues={{ email: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                        } 
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                            if (users.email ==values.email && users.password==values.password){
                                navigate(`/employees`); 
                            }
                            setSubmitting(false);
                    }, 400);
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                <label style={{display:"block"}}>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <label style={{display:"block"}}>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}  style={{display:"block",marginTop:20}}>
                    Submit
                </button>
                </form>
            )}
            </Formik>
        </center>
    )
}
export default Login;