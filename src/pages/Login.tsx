// import { Paper } from "@sylvainromiguier/sylvain-components-library-package";
// import { Text16pxBold } from "@sylvainromiguier/sylvain-components-library-package";
// import { Button } from "@sylvainromiguier/sylvain-components-library-package";
import { useState } from "react";
import { Paper, TextInput, Title } from "sylvain-components-library";
import { Button } from "sylvain-components-library";
import { useMediaQuery } from "../services/useMediaQuery";
import styles from "./login.module.css";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mobile = useMediaQuery(700);
  return (
    <div className={`${styles.container} ${mobile ? styles.mobileContainer : styles.regularContainer}`}>
      <Paper>
        <div className={styles.content}>
          <Title>Login</Title>
          <TextInput label="username" value={username} onChange={(value) => setUsername(value)}/>
          <TextInput label="password" value={password} onChange={(value) => setPassword(value)} password/>
          <div className={mobile ? styles.buttonsMobileContainer : styles.buttonsRegularContainer}>
            <Button label="Cancel" type="disabled" />
            <Button label="Login" type="active" />
          </div>
        </div>
      </Paper>
    </div>
  );
};
