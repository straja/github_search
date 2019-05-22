import React from 'react';
import './Search.css';
import { get } from '../utils';

class Search extends React.Component {
    state = {
        users: [],
        error: ''
    }

    getUserList(query) {
        get(
            'https://api.github.com/search/users', 
            `q=${query}&sort=stars&order=desc`
        ).then((res) => {
            this.setState({users: res.items});
        }).catch((err) => {
            this.setState({error: err.message});
        })
    }

    goToUserLink(link) {
        window.location.href = link;
    }

    render() {
        return (
            <div className="serach">
                <i className="fab fa-github"></i>
                <input 
                    className="field" 
                    placeholder="search" 
                    onChange={(e) => this.getUserList(e.target.value)}
                />
                <p className="error">{this.state.error}</p>
                <div className="users">
                    {this.state.users.slice(0, 10).map((user) => {
                        return (
                            <div 
                                className="user"
                                onClick={() => this.goToUserLink(user.html_url)}
                            >
                                <img src={user.avatar_url} alt="avatar" />
                                <div className="user-content">
                                    <h2>{user.login}</h2>
                                    <h5>Full name missing</h5>
                                    <p>Biography missing</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Search;