import React from "react";


const ListWidget = ({updateListWidget,widget,preview}) =>{

    return(
        <div className="widget-heading">
            {!preview &&
                <div className="element-container">

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">List Text</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" placeholder="List Items"
                                      id={widget.id + '-items'} required="" value={widget.text}
                                      onChange={() => updateListWidget(widget)}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">List Type</label>
                        <div className="col-sm-10">
                            <select className="form-control" required="" id={widget.id + '-listtyp'}
                                    defaultValue="ul" onChange={() => updateListWidget(widget)}>
                                <option value="ul">UnOrdered</option>
                                <option value="ol">Ordered</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Widget Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" placeholder="Widget Name"
                                   id={widget.id + '-name'} required="" value={widget.name}
                                   onChange={() => updateListWidget(widget)}/>
                        </div>
                    </div>

                    <h2 className="pt-5">PREVIEW</h2>
                </div>
            }

        <div className="preview-container">
            <widget.style className="text-info">
                {
                    widget.text.split('\n').map((item, index) =>
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                    )
                }
            </widget.style>
        </div>
    </div>)
}

export default ListWidget