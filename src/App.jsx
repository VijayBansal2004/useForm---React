import "./App.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// React icons
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

function App() {
  const form = useForm();
  // const { register, control, handleSubmit } = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  // console.log(form);

  const formSubmit = (data) => {
    console.log(data);
  };

  const [passwordEye, setpasswordEye] = useState(false);
  const onhandleEyeClick = () => {
    setpasswordEye(!passwordEye);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">React useForm - Hook</h1>
        <Form onSubmit={handleSubmit(formSubmit)} noValidate>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
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

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
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

          <Row className="mb-3">
            <Form.Group as={Col} controlId="dob">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                name="dob"
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

            <Form.Group as={Col} controlId="mobileNumber">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type="number"
                name="mobileNumber"
                min={0}
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

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
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

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={passwordEye ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  className="z-0"
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

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter your address"
              name="address"
              {...register("address.address", {
                required: {
                  value: true,
                  message: "Please enter your Address!",
                },
              })}
            />
            <span className="error">{errors.address?.address?.message}</span>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
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

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>PinCode</Form.Label>
              <Form.Control
                name="pinCode"
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

          <Button variant="primary" type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
        <DevTool control={control} />
      </div>
    </>
  );
}

export default App;
