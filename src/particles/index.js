import React, { Component } from 'react';
import Particles from "react-tsparticles";

class Particle extends Component {
    render() {
        return (
            <div>
                <Particles
                   width="100vw"
                   height="80rem"
                    id="app"
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 1,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#F2B705", "#05AFF2", "#F266DB", "#0D0D0D"],
                            },
                            links: {
                                color: "#1DAFF2",
                                distance: 150,
                                enable: true,
                                opacity: 1,
                                width: 0.5,
                            },
                            collisions: {
                                enable: false,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 4,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 1,
                            },
                            shape: {
                                type: "polygon",
                            },
                            size: {
                                random: true,
                                value: 3,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        );
    }
}

export default Particle;