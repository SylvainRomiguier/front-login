import { Paper } from "sylvain-components-library";
import { Text16pxBold } from "sylvain-components-library";
import { Button } from "sylvain-components-library";
import { useMediaQuery } from "../services/useMediaQuery";
import styles from "./login.module.css";

export const Login: React.FC = () => {
  const mobile = useMediaQuery(500);
  return (
    <div className={`${styles.container} ${mobile ? styles.mobileContainer : styles.regularContainer}`}>
      <Paper>
        <div className={styles.content}>
          <Text16pxBold>Login</Text16pxBold>
          <div className={mobile ? styles.buttonsMobileContainer : styles.buttonsRegularContainer}>
            <Button label="Cancel" type="disabled" />
            <Button label="Login" type="active" />
          </div>
        </div>
      </Paper>
    </div>
  );
};
