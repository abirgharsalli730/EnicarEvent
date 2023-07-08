import React, { useState } from "react";
import Navbar from "../Component/Navbar";


import "./CardsStyles.css";


const Events=()=>{
    const [cards] = useState([
        {
            title:' Enicar PFE Awards',
            imageUrl:'https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/318335126_3418994891675402_2624470013790619183_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=ztgxnGXcgs4AX8qxCc9&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAagL-3Y3oVwaN_D4wgcX_i4KsnuptuezdRfGkIWCPvTQ&oe=643DFCD2',
            body:'This event was organized by Enicarthage to award its students'
        },
        {
            title:' Enicarthage Forum',
            imageUrl:'https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/310555387_460223746112906_3680220738533241910_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=c6021c&_nc_ohc=9hLOVKZ5Y30AX_hwJy3&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfC5i3iSjsbiNa8cD7I2oaM7d9-gkeKoLuYthxuH5S25Aw&oe=643DD5A0',
            body:' This forum presents a great opportunity for students to discover entreprises'
        }
        
        






    ])

    return(
        <>
         <Navbar />    
        

       
         <div>
            <h1>Here some of our events</h1>
            <section>
                <div className="Container">
                    <div className="cards">
                        {
                            cards.map((card,i) => (
                                <div key={i} className="card">
                                    <h3>
                                        {card.title}
                                    </h3>
                                    <p>
                                        {
                                           card.body 
                                        }
                                    </p>
                                    <img src={card.imageUrl} alt='' />
                                    </div>

                            ))}

                        

                        
                    </div>
                </div>
            </section>
         </div>
        
        </>
        

    )
}
export default Events;
