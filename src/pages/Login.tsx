// import { Paper } from "@sylvainromiguier/sylvain-components-library-package";
// import { Text16pxBold } from "@sylvainromiguier/sylvain-components-library-package";
// import { Button } from "@sylvainromiguier/sylvain-components-library-package";
import { useState } from "react";
import { Paper, Text12pxBold, TextInput, Title } from "sylvain-components-library";
import { Button } from "sylvain-components-library";
import { APIResponse, useAuthenticationService } from "../services/authenticationService/useAuthenticationService";
import { useMediaQuery } from "../services/useMediaQuery";
import styles from "./login.module.css";

export interface LoginProps {
  submit: (username: string, password: string) => Promise<APIResponse>;
}

export const Login: React.FC<LoginProps> = ({ submit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const mobile = useMediaQuery(700);
  const onSubmit = async () => {
    setError("");
    try {
    await submit(username, password);
    } catch(e) {
      setError("Email and/or password are incorrect.");
    }
  };
  return (
    <div
      className={`${styles.container} ${
        mobile ? styles.mobileContainer : styles.regularContainer
      }`}
    >
      <Paper>
        <div className={styles.content}>
          <Title>Login</Title>
          <TextInput
            label="email"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <TextInput
            label="password"
            value={password}
            onChange={(value) => setPassword(value)}
            password
          />
            <Text12pxBold>{error}</Text12pxBold>
          <div
            className={
              mobile
                ? styles.buttonsMobileContainer
                : styles.buttonsRegularContainer
            }
          >
            <Button label="Login" type="active" onClick={onSubmit} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export const LoginHandler: React.FC = () => {
  const { sendCredentials } = useAuthenticationService();
  return <Login submit={sendCredentials} />;
};
