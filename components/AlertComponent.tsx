import { useEffect } from 'react';
import { Alert } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import {changeAlertVisibility} from "@/store/slices/alertSlice";

/**
 * AlertComponent
 * @author Kenneth Sumang
 * @since  2023.06.01
 */
export default function AlertComponent() {
  const isVisible = useSelector((state: RootState) => state.alert.isVisible);
  const color = useSelector((state: RootState) => state.alert.color);
  const message = useSelector((state: RootState) => state.alert.message);
  const dispatch = useDispatch();

  /**
   * Automatically hide the alert after 3 seconds.
   */
  useEffect(() => {
    setTimeout( () => {
      handleCloseButtonClick()
    }, 3000);
  });

  /**
   * Closes/hides the alert
   */
  function handleCloseButtonClick() {
    dispatch(changeAlertVisibility(false));
  }
  
  return (
    <div className="fixed bottom-0 w-screen px-5 mb-5">
      <Alert
        variant="gradient"
        open={isVisible}
        color={color}
        onClose={handleCloseButtonClick}
      >
        {message}
      </Alert>
    </div>
  );
}