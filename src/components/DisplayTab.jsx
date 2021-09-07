import React, {useState} from 'react';
import App from '../App';
const DisplayTab = (props) => {
    const {alltabs,setAlltabs} = props;
    const isSelected = (check,indi) =>{
        const copyTab = [...alltabs]
        copyTab[indi].checked = check;
        setAlltabs(copyTab);
    }
    console.log(alltabs);
    const deleteFunc = (delParam) => {
        const getDel = alltabs.filter(tab => tab!=delParam);
        setAlltabs(getDel);
        
    }
    return (
        <fieldset>
            <ul>
                {alltabs.map((getTab,idx) => {
                    return (
                        getTab.checked?
                        <li key={idx} style = {{textDecoration: 'line-through'}}>
                            <input type="checkbox"
                                checked
                                onChange ={
                                    e => {
                                        isSelected(e.target.checked,idx)
                                    }
                                }
                                    
                            />
                            {getTab.label}
                            <button onClick = {
                                        e => {
                                            deleteFunc(getTab)
                                        }
                            }
                            >
                                Delete
                            </button>
                        </li>
                        :<li key={idx} style = {{textDecoration: 'none'}}>
                            <input type="checkbox"
                                
                                
                                onChange ={
                                    e => {
                                        isSelected(e.target.checked,idx)
                                    }
                                }
                                
                        />
                            {getTab.label}
                            <button onClick = {
                                        e => {
                                            deleteFunc(getTab)
                                        }
                            }
                            >
                                Delete
                            </button>
                        </li>

                            
                            
                    )
                }
                )}
                
            </ul>
            
        </fieldset>
        
    )
}
export default DisplayTab






