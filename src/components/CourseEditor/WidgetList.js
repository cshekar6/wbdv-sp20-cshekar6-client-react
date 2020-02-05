import React from 'react'
import "./CourseEditor.css"

const WidgetList = () =>
    <div className="container-fluid">

        <div className="row mb-3">
            <div className="offset-9">
                <button className="btn btn-success mr-2">Save</button>
                <span className="mr-2">Preview</span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>


        <div className="container-fluid custom-widgets">
            <div className="row">
                <div className="col-7">
                    <h1>Heading widget</h1>
                </div>

                <div className="col-5 d-none d-md-block">
                    <button className="btn btn-warning">
                        <i className="custom-arrow fa fa-arrow-up"></i>
                    </button>
                    <button className="ml-2 btn btn-warning ">
                        <i className="custom-arrow fa fa-arrow-down"></i>
                    </button>
                    <select className="ml-2 custom-select w-50">
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                        <option></option>
                    </select>
                    <button className="ml-1 btn btn-danger ">
                        <i className="fa fa-times-circle"></i>
                    </button>
                </div>

                <div className="container-fluid">
                    <input className="form-control mb-2" placeholder="Heading Text"
                           type="text"/>
                    <select className="custom-select mb-2">
                        <option selected>Heading1</option>
                        <option>Heading Other</option>
                        <option>Heading Others</option>
                    </select>
                    <input className="form-control" placeholder="Widget name"
                           type="text"/>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row mb-2">
                    <span className="text-black preview-d">Preview</span>
                </div>
                <div className="row mb-2">
                    <h2>Heading Text</h2>
                </div>
            </div>

        </div>

        <div className="add-widget-button">
            <button className="btn btn-danger">
                <i className="fa fa-plus-circle"></i>
            </button>
        </div>

    </div>

export default WidgetList