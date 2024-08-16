import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
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
                    message: "Please Enter your First name",
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{3,}$/,
                    message: "Name must contain(A-Z,a-z) and minimum length(3)",
                  },
                })}
              />
              <span className="error">{errors.firstName?.message}</span>
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
                    message: "Please enter your Last name",
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{3,}$/,
                    message: "Name must contain(A-Z,a-z) and minimum length(3)",
                  },
                })}
              />
              <span className="error">{errors.lastName?.message}</span>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your Email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "Name must contain email name(A-Z,a-z,0-9,_%+-) and domain name @(A-Z,a-z,0-9,.-) and minimum length(3)",
                  },
                })}
              />
              <span className="error">{errors.email?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={passwordEye ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="z-0"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your Password",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Please enter a valid Password containing(a-z,A-Z,0-9,@$!%*?&) and minimum length(8)",
                    },
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
              <span className="error">{errors.password?.message}</span>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              {...register("address.address", {
                required: {
                  value: true,
                  message: "Please enter your Address",
                },
              })}
            />
            <span className="error">{errors.address?.message}</span>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                {...register("address.city", {
                  required: {
                    value: true,
                    message: "Please enter your City",
                  },
                })}
              />
              <span className="error">{errors.city?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>PinCod</Form.Label>
              <Form.Control
                name="pinCode"
                {...register("address.pinCode", {
                  required: {
                    value: true,
                    message: "Please Enter your PinCode",
                  },
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message:
                      "Pincode length must be more than(6) and containing only(0-9)",
                  },
                })}
              />
              <span className="error">{errors.pinCode?.message}</span>
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
