import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import { useDeleteColorMutation } from "../../redux/services/colors";
import { IColorId } from "../../interfaces/interfaces";

const FormDeleteColor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<IColorId>();

  const [deleteColor, { isLoading: isLoadingDelete }] =
    useDeleteColorMutation();

  const handleDelete: SubmitHandler<IColorId> = async (data: IColorId) => {
    try {
      await deleteColor(data.id);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleDelete)} className={styles.form}>
      <legend>Delete a color!</legend>
      <div className={styles.form__item}>
        <label>Id</label>
        <input
          className={errors.id ? styles.error : ""}
          {...register("id", { required: true, minLength: 1 })}
          type="text"
          placeholder="Id..."
        />
      </div>
      <button disabled={isLoadingDelete} className={styles.form__btn}>
        {isLoadingDelete ? "Loading..." : "Delete"}
      </button>
      {isSubmitted && (
        <div className={styles.form__success}>A color was delete!</div>
      )}
    </form>
  );
};

export default FormDeleteColor;
