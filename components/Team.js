import React from "react";
import styled from "styled-components";
import teamContent from "../content/LandingPage";
import a from "next/link"

const Teams = styled.div`
    .teamSection{
        width: 100%;
        padding: 3vw 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: black;
    }
    .contentPart {
        width: 50%;
        font-family: 'Source Sans Pro', sans-serif;
        .contentSubpart {
            color: white;
            p{
                width: 80%;
                font-size: 1.4vw;
                margin-bottom: 8vw;
            }
            .heading{
                margin-top: 2vw;
                font-size: 2.5vw;
            }
            h2{
                font-size: 3vw;
                margin-top: 8vw;
            }
        }
    }
    .imagePart{
        padding: 5vw 0;
        width: 25%;
        .grid-container {
            display: grid;
            width: 100%;
            justify-content: space-between;
            grid-template-coulmns: 49% 1% 49%;
            grid-template-areas:
            ". . img1"
            "img2 . img1"
            "img2 . img3"
            "img4 . img3"
            "img4 . img5"
            ". . img5";
            .image1 {
                grid-area: img1;
            }
            .image2 {
                grid-area: img2;
            }
            .image3 {
                grid-area: img3;
            }
            .image4 {
                grid-area: img4;
            }
            .image5 {
                grid-area: img5;
            }
            .image {
                width: 15vw;
                margin: 0.5vw auto;
                img {
                    width: 90%;
                }
                .details {
                    visibility: hidden;
                    width: 13.5vw;
                    transform: translateY(10vw);
                    height: 3.5vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    position: absolute;
                    background: rgba(255,255,255,0.7);
                    .left {
                        h1 {
                            font-size: 0.8vw;
                            line-height: 110%;
                            font-weight: 500;
                            margin: 0.3vw 0;
                            color: #555;
                        }
                        h3 {
                            font-size: 0.65vw;
                            line-height: 110%;
                            font-weight: 500;
                            margin: 0.3vw 0;
                            color: #333;
                        }
                    }
                    a {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        align-items: center;
                        img {
                            padding: 0.5vw;
                            width: 1.8vw;
                            background: rgba(0,0,0,0.7);
                            border-radius: 0.5vw;
                        }
                    }
                }
                &:hover {
                    cursor: pointer;
                    .details {
                        visibility: visible;
                    }
                }
            }
        }
    }
`

function TeamPage(){
    return (
        <Teams name="team" id="team">
            <div className="teamSection">
                <div className="contentPart">
                    <div className="contentSubpart">
                        <h1 className="heading">MEET THE TEAM</h1>
                        <h2>{teamContent.team.heading}</h2>
                        {teamContent.team.content.map(item => {
                                return <p key={item}>{item}</p>
                        })}
                    </div>
                </div>
                <div className="imagePart">
                    <div className="grid-container">
                        <div className="image image1">
                            <div className="details">
                                <div className="left">
                                    <h1>Rohan Hadvani</h1>
                                    <h3>Founder, CEO</h3>
                                </div>
                                <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153"><img src={teamContent.team.linkedin} /></a>
                            </div>
                            <img src={teamContent.team.images.team1} />
                        </div>
                        <div className="image image2">
                            <div className="details">
                                <div className="left">
                                    <h1>Janmejay Shastri</h1>
                                    <h3>Full Stack Developer</h3>
                                </div>
                                <a href="https://www.linkedin.com/in/janmejay-shastri-7658a7193/"><img src={teamContent.team.linkedin} /></a>
                            </div>
                            <img src={teamContent.team.images.team2} />
                        </div>
                        <div className="image image3">
                            <div className="details">
                                <div className="left">
                                    <h1>Aditya Sahoo</h1>
                                    <h3>UI/UX Designer</h3>
                                </div>
                                <a href="https://www.linkedin.com/in/aditya-sahoo12"><img src={teamContent.team.linkedin} /></a>
                            </div>
                            <img src={teamContent.team.images.team3} />
                        </div>
                        <div className="image image4">
                            <div className="details">
                                <div className="left">
                                    <h1>Devanshi Patel</h1>
                                    <h3>Full Stack Developer</h3>
                                </div>
                                <a href="https://www.linkedin.com/in/devanshi-patel-93a6641ba/"><img src={teamContent.team.linkedin} /></a>
                            </div>
                            <img src={teamContent.team.images.team4} />
                        </div>
                        <div className="image image5">
                            <div className="details">
                                <div className="left">
                                    <h1>Parshva Shah</h1>
                                    <h3>Marketing Head</h3>
                                </div>
                                <a href="https://www.linkedin.com/in/parshva-shah-402940177"><img src={teamContent.team.linkedin} /></a>
                            </div>
                            <img src={teamContent.team.images.team5} />
                        </div>
                    </div>
                </div>
            </div>
        </Teams>
    )
}


export default TeamPage;