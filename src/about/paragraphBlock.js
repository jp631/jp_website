import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ParagraphBlock = (props) => {
    return (
        <div className="parapgrah">

            <h1>{(props.title) ?
                props.title
                : ""
            }
                <span> <FontAwesomeIcon icon={(props.icon) ? props.icon : " "} /></span>
            </h1>

            {(props.text && !Array.isArray(props.text)) ?
                <p>   {props.text} </p>
                : (props.text && Array.isArray(props.text)) ?
                    <ul>
                        {props.text.map(element => {
                            return (
                                <li key={element}>{element}</li>
                            )
                        })}
                    </ul>
                    : null
            }

            <div className="brands">
                {
                    (props.brands) ?
                        props.brands.map(element => {
                            return (
                                <div className={element.iconName} key={element.iconName}>
                                    <FontAwesomeIcon icon={element} />
                                </div>
                            )
                        })
                        : ""
                }
            </div>
        </div>
    );
}

export default ParagraphBlock;