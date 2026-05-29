import React, { ChangeEvent, FormEvent } from "react";

export interface MandirHeroProps {
  onActionClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DonorFormModalProps {
  isOpen: boolean;
  onClose: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}