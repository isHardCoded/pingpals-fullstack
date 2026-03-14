import { useState } from 'react';
import { Modal } from '../../../components/ui/modal';
import { Input } from '../../../components/ui/input';
import s from './styles.module.css';

interface FormData {
  title: string;
  content: string;
}

interface FormErrors {
  title?: string;
  content?: string;
}

type CreatePostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
};

export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit(formData.title, formData.content);
    setFormData({ title: '', content: '' });
    setErrors({});
    onClose();
  };

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({ title: '', content: '' });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create New Post"
      onClose={handleClose}
      className={s.modal}
      description={
        <form onSubmit={handleSubmit} className={s.form}>
          <Input
            name="title"
            label="Title"
            placeholder="Enter post title"
            value={formData.title}
            onChange={handleInputChange('title')}
            error={errors.title}
          />

          <div className={s.textareaWrapper}>
            <label htmlFor="content" className={s.label}>
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className={s.textarea}
              value={formData.content}
              onChange={(e) => handleInputChange('content')(e.target.value)}
              placeholder="What's on your mind?"
              rows={5}
            />
            {errors.content && (
              <p className={s.errorMessage} role="alert">
                {errors.content}
              </p>
            )}
          </div>
        </form>
      }
      primaryAction={{
        label: 'Post',
        onClick: () => {
          handleSubmit(new Event('submit') as unknown as React.FormEvent);
        },
      }}
      secondaryAction={{
        label: 'Cancel',
        onClick: handleClose,
      }}
    />
  );
}
