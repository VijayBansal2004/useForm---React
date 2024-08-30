import "./App.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// React icons
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useEffect, useState } from "react";

function App() {
  const form = useForm();
  // const { register, control, handleSubmit } = useForm();
  const {
    register,
    control,
    handleSubmit, reset,
    formState: { errors, isSubmitSuccessful, isValid, isDirty },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  console.log(form);

  const formSubmit = (data) => {
    console.log(data);
  };

  const handleResetForm = () => {
    reset();
  }

  const [passwordEye, setpasswordEye] = useState(false);
  const onhandleEyeClick = () => {
    setpasswordEye(!passwordEye);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-4 mb-5 mb-sm-4">React useForm - Hook</h1>
        <div className="form-container">
          <Form className="bg-transparent" onSubmit={handleSubmit(formSubmit)} noValidate>
            <Row className="mb-3 bg-transparent">
              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridFirstName">
                <Form.Label className="bg-transparent">First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  className={`${errors.name?.firstName?.message ? "invalid-feild" : "valid-feild"}`}
                  placeholder="Enter first name"
                  {...register("name.firstName", {
                    required: {
                      value: true,
                      message: "Please Enter your First name!",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{3,}$/,
                      message: "Name must contain(A-Z,a-z) and minimum length(3)!",
                    },
                    // validate: (value) => {
                    //   return value === "admin" && `This ${value} is block, Please enter another name!`
                    // },
                  })}
                />
                <span className="error">{errors.name?.firstName?.message}</span>
              </Form.Group>

              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridLastName">
                <Form.Label className="bg-transparent">Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  className={`${errors.name?.lastName?.message ? "invalid-feild" : "valid-feild"}`}
                  // className={`invalid-feild ${isValid && "valid-feild"}`}
                  placeholder="Enter last name"
                  {...register("name.lastName", {
                    required: {
                      value: true,
                      message: "Please enter your Last name!",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{3,}$/,
                      message: "Name must contain(A-Z,a-z) and minimum length(3)!",
                    },

                    // validate: (value) => {
                    //   return value === "admin" && `This ${value} is blocked, Please enter another name!`
                    // },
                  })}
                />
                <span className="error">{errors.name?.lastName?.message}</span>
              </Form.Group>
            </Row>

            <Row className="mb-3 bg-transparent">
              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="dob">
                <Form.Label className="bg-transparent">DOB</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  className={`${errors.DOB?.message ? "invalid-feild" : "valid-feild"}`}
                  placeholder="Enter date of birth"
                  {...register("DOB", {
                    valueAsDate: true,
                    required: {
                      value: true,
                      message: "Please Enter your date of birth!",
                    },
                    pattern: {
                      value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                      message: "Please enter date in correct formet!",
                    },
                  })}
                />
                <span className="error">{errors.DOB?.message}</span>
              </Form.Group>

              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="mobileNumber">
                <Form.Label className="bg-transparent">Mobile number</Form.Label>
                <Form.Control
                  type="number"
                  name="mobileNumber"
                  min={0}
                  className={`${errors.mobileNumber?.message ? "invalid-feild" : "valid-feild"}`}
                  placeholder="Enter mobile number"
                  {...register("mobileNumber", {
                    // valueAsNumber: true,
                    required: {
                      value: true,
                      message: "Please Enter your mobile number!",
                    },
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Mobile number must have 10 digits!",
                    },
                  })}
                />
                <span className="error">{errors.mobileNumber?.message}</span>
              </Form.Group>
            </Row>

            <Row className="mb-3 bg-transparent">
              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridEmail">
                <Form.Label className="bg-transparent">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className={`${errors.email?.email?.message ? "invalid-feild" : "valid-feild"}`}

                  placeholder="Enter email"
                  {...register("email.email", {
                    required: {
                      value: true,
                      message: "Please enter your Email!",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message:
                        "Name must contain email name(A-Z,a-z,0-9,_%+-) and domain name @(A-Z,a-z,0-9,.-) and minimum length(3)!",
                    },
                    // validate: (value) => {
                    //   return value === "admin123@gmail.com" && `This ${value} is blocked, Please enter another email!`
                    // },
                  })}
                />
                <span className="error">{errors.email?.email?.message}</span>
              </Form.Group>

              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridPassword">
                <Form.Label className="bg-transparent">Password</Form.Label>
                <div className="d-flex bg-transparent">
                  <Form.Control
                    type={passwordEye ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className={`z-0 ${errors.email?.password?.message ? "invalid-feild" : "valid-feild"}`}
                    {...register("email.password", {
                      required: {
                        value: true,
                        message: "Please enter your Password!",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Please enter a valid Password containing(a-z,A-Z,0-9,@$!%*?&) and minimum length(8)!",
                      },
                      // validate: (value) => {
                      //   return value === "Admin@123" && `This ${value} is blocked, Please enter another password!`
                      // },
                    })}
                  />
                  {passwordEye ? (
                    <LuEye
                      onClick={onhandleEyeClick}
                      className="position-relative password-eye z-1"
                    />
                  ) : (
                    <LuEyeOff
                      onClick={onhandleEyeClick}
                      className="position-relative password-eye z-1"
                    />
                  )}
                </div>
                <span className="error">{errors.email?.password?.message}</span>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 bg-transparent" controlId="formGridAddress1">
              <Form.Label className="bg-transparent">Address</Form.Label>
              <Form.Control
                placeholder="Enter your address"
                name="address"
                className={`z-0 ${errors.address?.address?.message ? "invalid-feild" : "valid-feild"}`}

                {...register("address.address", {
                  required: {
                    value: true,
                    message: "Please enter your Address!",
                  },
                })}
              />
              <span className="error">{errors.address?.address?.message}</span>
            </Form.Group>

            <Row className="mb-3 bg-transparent">
              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridCity">
                <Form.Label className="bg-transparent">City</Form.Label>
                <Form.Control
                  name="city"
                  className={`z-0 ${errors.address?.city?.message ? "invalid-feild" : "valid-feild"}`}

                  placeholder="Enter your city"
                  {...register("address.city", {
                    required: {
                      value: true,
                      message: "Please enter your City!",
                    },
                  })}
                />
                <span className="error">{errors.address?.city?.message}</span>
              </Form.Group>

              <Form.Group className="bg-transparent col-12 col-sm-6 mb-2 mb-sm-0" as={Col} controlId="formGridZip">
                <Form.Label className="bg-transparent">PinCode</Form.Label>
                <Form.Control
                  name="pinCode"
                  className={`z-0 ${errors.address?.pinCode?.message ? "invalid-feild" : "valid-feild"}`}
                  placeholder="Enter your Pincode"
                  {...register("address.pinCode", {
                    required: {
                      value: true,
                      message: "Please Enter your PinCode!",
                    },
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message:
                        "Pincode length must be more than(6) and containing only(0-9)!",
                    },
                  })}
                />
                <span className="error">{errors.address?.pinCode?.message}</span>
              </Form.Group>
            </Row>
            <Row className="d-flex flex-column flex-sm-row align-items-center justify-content-center bg-transparent mt-5 gap-3 gap-sm-4">
              <Button variant="success" type="submit" className=" button-responsive"
              // disabled={!isValid}
              >
                Submit
              </Button>
              <Button variant="info" type="button" className=" button-responsive" onClick={handleResetForm}>
                Reset
              </Button>
            </Row>
          </Form>
        </div>
        <DevTool control={control} />
      </div>
    </>
  );
}

export default App;
