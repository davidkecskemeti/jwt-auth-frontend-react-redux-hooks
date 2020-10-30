import React, {useState, useEffect} from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
    const [content, setContent] = useState("")

    useEffect(() => {
        UserService.getUserBoard()
            .then((response) => {
                setContent(response.data)
            })
            .catch((error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content)
            })
    }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h2>{content}</h2>
            </header>
        </div>
    )
}

export default BoardUser;