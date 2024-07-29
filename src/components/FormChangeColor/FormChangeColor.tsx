import { SubmitHandler, useForm } from "react-hook-form";
import { useChangeColorMutation } from "../../redux/services/colors";

import styles from "./styles.module.scss";

import { IChangeColor } from "../../interfaces/interfaces";

const FormChangeColor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<IChangeColor>();

  const [changeColor, { isLoading: isLoadingChange }] =
    useChangeColorMutation();

  const handleChange: SubmitHandler<IChangeColor> = async (
    data: IChangeColor
  ) => {
    try {
      await changeColor(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleChange)} className={styles.form}>
      <legend>Change a color!</legend>
      <div className={styles.form__item}>
        <label>Id</label>
        <input
          className={errors.id ? styles.error : ""}
          {...register("id", { required: true, minLength: 1 })}
          type="text"
          placeholder="Id..."
        />
      </div>
      <div className={styles.form__item}>
        <label>Title</label>
        <input
          className={errors.id ? styles.error : ""}
          {...register("title", { required: true, minLength: 3 })}
          type="text"
          placeholder="Title..."
        />
      </div>
      <div className={styles.form__item}>
        <label>Price</label>
        <input
          className={errors.id ? styles.error : ""}
          {...register("price", { required: true, minLength: 2 })}
          type="text"
          placeholder="Price..."
        />
      </div>
      <button disabled={isLoadingChange} className={styles.form__btn}>
        {isLoadingChange ? "Loading..." : "Change"}
      </button>
      {isSubmitted && (
        <div className={styles.form__success}>A color was change!</div>
      )}
    </form>
  );
};

export default FormChangeColor;
