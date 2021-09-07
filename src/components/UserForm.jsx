import React,{useState} from 'react';


const UserForm = (props) => {
    const [alltabs, setAlltabs] = useState([{}]);
    const [label, setLabel] = useState('');
    const [checked,setChecked] = useState(false);
    // Handle Submit fuction declaration 

    const handleSubmit =(e) => {
        // the first step is to prevent the default behaviour of form submission
        e.preventDefault();
        // the secont step is call the function from the app .js through the props parameter
        setAlltabs(props.createTab({label:label, checked:checked}))
        setLabel("");
        setChecked(false);
        
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" 
                    onChange ={(e) => setLabel(e.target.value)}
                    value ={label}
                />
                <input type="submit" value = "Add"></input>
            </form>
        </div>
    )
}

export default UserForm
