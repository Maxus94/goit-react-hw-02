import css from "./Description.module.css";
const Description = ({ title, information }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>{information}</p>
    </>
  );
};

export default Description;
