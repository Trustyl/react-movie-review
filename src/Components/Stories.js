import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import "./Top.css"
import { render } from '@testing-library/react';


class Stories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TopStories: []
        };
    }




    componentWillMount() {
        const def = () => {

            axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=AQpfoTQb38rcRAXYzL3RioyAHN0PFWIl")

                .then(
                    (json_data) => {

                        Stories(json_data.data.results)
                    }
                )


                .catch(
                    (err) => {
                        console.log(err)
                    }
                )



        }

        return (
            <div>
                <h1 className="h1_nav">
                    <span>Trusty's API TESTS </span>
                    <span>
                        <Link to="/" className="go_to_link"> Go To Movies API </Link>

                    </span>
                </h1>
                <div className="title_div"> <h1> Stories API </h1> <h1></h1> </div>
                <h1>
                    {
                        Stories.map(
                            (each_topstory) => {
                                return (
                                    <div>

                                        <h3> Category: {each_topstory.section}</h3>
                                        <h3>{each_topstory.title} <span>{each_topstory.byline}</span> </h3>
                                        <div className="top_img-box"> <img src={each_topstory.multimedia?.url} className="img" alt="" /> </div>
                                        <h2 className="each_info">{each_topstory.multimedia?.caption}</h2>


                                        <h2 className="each_info">{each_topstory.abstract}  <span><a href={each_topstory.url}>See More</a> </span> </h2>

                                        <hr />
                                    </div>
                                )
                            }
                        )
                    }
                </h1>

            </div>
        );
    }
}
export default { Stories }
