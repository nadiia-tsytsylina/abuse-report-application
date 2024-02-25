import { Alert, Snackbar } from '@mui/material';

export default function SnackBar({ isOpen, onClose, text, severity }) {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}
