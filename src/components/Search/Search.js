import { useContext, useEffect, useState } from "react";
import { setMovie } from "../../store/slices/movies";
import { getByTitle } from "../helpers/omdb";
import { useDispatch } from "react-redux/es/exports";

export const Search = () => {
  const [values, setValues] = useState(null);
  const [sent, setSent] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetching() {
      const response = await getByTitle(values?.title);
      console.log(response)
      
      dispatch(setMovie(response))
      setSent(false);
    }
    fetching();
  }, [sent]);

  useEffect(() => {
    console.log(values)
  
  }, [values])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">Buscar por título</label>
    <br/>
    <input type="text" name="title" onChange={handleChange} />
    <button type="submit">Buscar</button>
    </form>
  );
};
