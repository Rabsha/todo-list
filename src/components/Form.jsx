import React,{useState} from "react";

const Form = () => {

    // Step1
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    //Step2
    const HandleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    //Step3
    const HangeClick = () => {
        if(input.trim() != '')
        {
            setResult([...result, input]);
            setInput('');
        }
        else{
            alert("Value is Empty");
        }
    }

    const DeleteData = (index) => {
        const newResult = [...result];
        newResult.splice(index, 1);
        setResult(newResult);
    }

    const handleItemClick = (index) => {
        if(selectedItem.includes(index))
        {
            setSelectedItem(selectedItem.filter((item) => item !== index));
        }
        else{
            setSelectedItem([...selectedItem, index]);
        }
    };
    
    return (
        <>
            <div className="form-work">
                <div className="container">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="Mydivform">
                            <div className="heading-work">
                                <h1>To-do List Here</h1>
                            </div>
                            {/* Step 4 */}
                            <div className="mybox">
                                <input type="text" className="form-control" value={input} onChange={HandleChange} />
                                <button type="button" onClick={HangeClick}>Add</button>
                            </div>
                            {/* Step 5 */}
                            <div className="answaretodo">
                                <ul>
                                    {result.map((results, index) => (
                                        <li key={index} className="MyCheck">
                                            <a href="#" className={selectedItem.includes(index) ? "MyClass" : ""} onClick={() => handleItemClick(index)}>{results}</a>
                                            <button type="button" onClick={() => DeleteData(index)} className="btnwork">X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form