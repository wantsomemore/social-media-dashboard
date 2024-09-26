export interface IAddUserFormPayload {
  username: string;
  followers: number | null;
  email: string;
  likes: number | null;
}

export interface IAddUserModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface IDeleteUserModalProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

export interface IFormikField {
  field: {
    name: string;
    value: string;
    onChange: () => void;
    onBlur: () => void;
  };
}
