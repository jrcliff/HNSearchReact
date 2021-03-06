import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import * as actions from "../state/actions/search";
import axios from "axios";
import { TextField } from '@material-ui/core'

export default function Search() {
const dispatch = useDispatch()
const [input, setInput] = useState("");

const handleInput = event => {
    setInput(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${input}`)
      .then((res) => {
        dispatch(actions.addSearchHistory(input, res.data.hits));
      });
  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField onChange={event => handleInput(event)} />
                <TextField type='submit' />
            </form>
        </div>
    )
}
