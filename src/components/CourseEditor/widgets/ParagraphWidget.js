import React from "react";

const ParagraphWidget = ({updateParagraphWidget,widget,preview}) =>

    <div className="widget-heading">
        { !preview &&
            <div className="element-container">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Paragraph Text</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" placeholder="Paragraph Text"
                                  id={widget.id + '-para'} required="" value={widget.text}
                                  onChange={() => updateParagraphWidget(widget)}/>
                    </div>
                </div>
                <h2>PREVIEW</h2>
            </div>
        }
        <div className="preview-container">
            <p className="text-info">{widget.text}</p>
        </div>
    </div>

export default ParagraphWidget