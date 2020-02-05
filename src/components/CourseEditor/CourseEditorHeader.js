import React from 'react'

const CourseEditorHeader = () =>

    <nav className="navbar navbar-light bg-dark fixed-top custom-nav-vertical-height">
        <div className="container-fluid">
            <div className="row w-100">
                <div className="col-3">
                    <div className="row">
                        <span className="col-3 wbdv-course-editor wbdv-close">
                            <a href="../index.html">
                                <i className="fa fa-times fa-2x custom-cross-icon"></i>
                            </a>
                        </span>
                        <span className="navbar-brand text-white text-bold wbdv-course-title">
                            CS5610-Webdev
                    </span>
                    </div>
                </div>
                <div className="col-8">
                    <nav className="nav-lessontab wbdv-page-tab">
                        <div className="nav nav-tabs border-bottom-0" id="nav-top-bar-tab">
                            <a aria-controls="nav-lesson1" aria-selected="true"
                               className="nav-item nav-link active" data-toggle="tab"
                               href="#nav-lessontab1" id="nav-lesson1-tab">Build</a>
                            <a aria-controls="nav-lesson2" aria-selected="false"
                               className="nav-item nav-link" data-toggle="tab"
                               href="#nav-lessontab2" id="nav-lesson2-tab">Pages</a>
                            <a aria-controls="nav-lesson3" aria-selected="false"
                               className="nav-item nav-link" data-toggle="tab"
                               href="#nav-lessontab3" id="nav-lesson3-tab">Theme</a>
                            <a aria-controls="nav-lesson4" aria-selected="false"
                               className="nav-item nav-link" data-toggle="tab"
                               href="#nav-lessontab4" id="nav-lesson4-tab">Store</a>
                            <a aria-controls="nav-lesson5" aria-selected="false"
                               className="nav-item nav-link" data-toggle="tab"
                               href="#nav-lessontab5" id="nav-lesson5-tab">Apps</a>
                            <a aria-controls="nav-lesson6" aria-selected="false"
                               className="nav-item nav-link" data-toggle="tab"
                               href="#nav-lessontab6" id="nav-lesson6-tab">Settings</a>
                        </div>
                    </nav>
                </div>
                <div className="col-1 ">
                    <a className="wbdv-new-page-btn" href="#">
                        <i className="fa fa-plus fa-2x custom-cross-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

export default CourseEditorHeader