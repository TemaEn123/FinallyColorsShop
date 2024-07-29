import { SubmitHandler, useForm } from "react-hook-form";

import { usePostColorMutation } from "../../redux/services/colors";

import { INewColor } from "../../interfaces/interfaces";

import styles from "./styles.module.scss";

const FormNewColor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<INewColor>();

  const [createColor, { isLoading: isLoadingCreate }] = usePostColorMutation();

  const handleCreate: SubmitHandler<INewColor> = async (
    newColor: INewColor
  ) => {
    try {
      await createColor(newColor);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
      <legend>Create a new color!</legend>
      <div className={styles.form__item}>
        <label>Title</label>
        <input
          className={errors.title ? styles.error : ""}
          {...register("title", { required: true, minLength: 3 })}
          type="text"
          placeholder="Title..."
        />
      </div>
      <div className={styles.form__item}>
        <label>Photo</label>
        <input
          className={errors.photo ? styles.error : ""}
          {...register("photo", { required: true, minLength: 5 })}
          type="text"
          placeholder="Photo..."
        />
      </div>
      <div className={styles.form__item}>
        <label>Price</label>
        <input
          className={errors.price ? styles.error : ""}
          {...register("price", { required: true, minLength: 2 })}
          type="text"
          placeholder="Price"
        />
      </div>
      <button disabled={isLoadingCreate} className={styles.form__btn}>
        {isLoadingCreate ? "Loading..." : "Create"}
      </button>
      {isSubmitted && (
        <div className={styles.form__success}>A new color was create!</div>
      )}
    </form>
  );
};

export default FormNewColor;
