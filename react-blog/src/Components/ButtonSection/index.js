import React from 'react';

const ButtonSection = (props) => {
    return (
        <section className={"pt-60 pb-60" + props.classes}>
            <div className="text-center">
                <span>
                    {props.buttons.map(button => {
                        return (
                            <a 
                                style={{"margin": "12px 16px"}} 
                                href={button.link} 
                                className="primary-btn text-uppercase">
                                    {button.text}
                            </a>
                        )
                    })}
                </span>
            </div>
        </section>
    );
};

export default ButtonSection;