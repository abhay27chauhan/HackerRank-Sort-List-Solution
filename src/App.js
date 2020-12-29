import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const[state, setState] = useState([]);

    useEffect(() => {
        setState(articles);
    }, [articles])

    const sortByDate = () => {
        let data = [...articles];
        data.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);

            return dateB-dateA;
        })

        setState(data)
    }

    const sortByUpvotes = () => {
        let data = [...articles];
        data.sort((a, b) => b.upvotes-a.upvotes);
        setState(data)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={sortByUpvotes} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={sortByDate} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={state}/>
        </div>
    );

}

export default App;
