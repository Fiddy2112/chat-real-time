import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth, db } from "../../firebase/config";
import {
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { addDocument } from "../../firebase/services";

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const Login = () => {
  const handleFacebookProvider = async () => {
    const dataFB = await signInWithPopup(auth, fbProvider);
    const { providerId, user } = dataFB;
    console.log({ providerId, user });
    console.log({ dataFB });
    if (user) {
      addDocument("users", {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        providerId: providerId,
      });
    }
  };

  const handleGoogleProvider = async () => {
    const dataGG = await signInWithRedirect(auth, ggProvider);
    console.log({ dataGG });
  };

  return (
    <div>
      <Row justify="center" style={{ height: "800px" }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }}>Chat App</Title>
          <Button
            onClick={handleGoogleProvider}
            style={{ width: "100%", marginBottom: 10 }}
          >
            Dang nhap bang Google
          </Button>
          <Button onClick={handleFacebookProvider} style={{ width: "100%" }}>
            Dang nhap bang Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
