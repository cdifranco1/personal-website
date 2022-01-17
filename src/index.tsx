import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import About from './components/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import dummyEssays from './utils/dummyData'
import { EssayLinks, Essays } from './components/Essays'

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="/"
                        element={<EssayLinks essays={dummyEssays} />}
                    />
                    <Route path="about" element={<About />} />
                    <Route path="/essays">
                        <Route
                            path="/essays:id"
                            element={<Essays essayData={dummyEssays} />}
                        />
                    </Route>
                </Route>
            </Routes>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
