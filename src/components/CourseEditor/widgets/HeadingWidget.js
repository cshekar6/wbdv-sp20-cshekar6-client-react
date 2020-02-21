import React from "react";

const HeadingWidget = ({updateHeadingWidget,widget,preview}) =>
    <div className="heading-widget">
        {!preview &&
            <div className="element-container">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Widget Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Heading text"
                               id={widget.id + '-title'} required="" value={widget.title}
                               onChange={() => updateHeadingWidget(widget)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Heading Text</label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Heading text"
                               id={widget.id + '-heading'} required="" value={widget.text}
                               onChange={() => updateHeadingWidget(widget)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Heading Size</label>
                    <div className="col-sm-10">
                        <select className="form-control" required="" id={widget.id + '-size'}
                                value={widget.size} onChange={() => updateHeadingWidget(widget)}>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
                        </select>
                    </div>
                </div>

                <h2 className="pt-5">PREVIEW</h2>
            </div>
        }
        <div className="preview-container text-info">

            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
        </div>
    </div>

export default HeadingWidget