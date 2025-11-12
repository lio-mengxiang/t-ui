import React from 'react';
import './modal.css';
import { TButton } from '@/button/tailwind-button';

export interface AlertProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  type?: 'default' | 'success' | 'warning' | 'error';
  onClose?: () => void;
}

export const ModalAlert: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <div className="modal-alert">
      <div className="modal-alert-container">
        <div className="modal-alert-title">{title}</div>
        <div className="modal-alert-content">{message}</div>
      </div>
      <div className="modal-alert-footer">
        <TButton type="outline">取消</TButton>
        <TButton status="primary">确定</TButton>
      </div>
    </div>
  );
};
