import * as React from 'react'

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[],
  setPeople: React.Dispatch<React.SetStateAction<{
    name: string;
    age: number;
    url: string;
    note?: string | undefined;
  }[]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    note: "",
    url: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(!input.name || !input.age || !input.url) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        url: input.url,
        note: input.note
      }
    ])

    setInput({
      name: "",
      age: "",
      note: "",
      url: ""
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        name="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        name="url"
        className="AddToList-input"
        onChange={handleChange}
        value={input.url}
      />
      <textarea
        placeholder="name"
        name="note"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
      />
      <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>
  )
}

export default AddToList
