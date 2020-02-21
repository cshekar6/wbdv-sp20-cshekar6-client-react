import React,{Component} from 'react'
import HeadingWidget from "../CourseEditor/widgets/HeadingWidget"
import ParagraphWidget from "../CourseEditor/widgets/ParagraphWidget";
import "./widgetStyle.css"
import "./CourseEditor.css"
import {connect} from "react-redux";
import {
    findAllWidgets,
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic,
    findWidgetsForTopicUp
} from "../../services/WidgetService";

class WidgetLists extends Component {

    constructor(props){
        super(props);
        this.state = {
            widgets: [],
            updated:false,
            preview:false
        }
    }
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId).then()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.updated) {
            this.setState({
                              updated: false
                          })
        }
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId).then()
        }


    }
    updateHeadingWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-heading').value
        let newSize = document.getElementById(widget.id+'-size').value

        widget.text = newHeading
        widget.size = newSize
        console.log('Before Sending : '+JSON.stringify(widget))
        this.setState({
                          updated: true
                      })
        this.props.updateWidget(widget.id,widget).then()
    }
    updateParagraphWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-para').value
        widget.text = newHeading
        this.props.updateWidget(widget.id,widget).then()
    }
    updateType = (widget) =>
    {
        let type = document.getElementById(widget.id+'-selector').value
        widget.type = type
        this.props.updateWidget(widget.id,widget).then()
        this.componentDidMount()
        this.componentDidMount()
    }

    previewToggle = () =>
    {
        if(this.state.preview === false) {
            this.setState({
                preview:true
                          })
        } else {
            this.setState({
                              preview:false
                          })
        }
    }
    moveUp = (widget) =>
    {
        this.props.findWidgetsForTopicUp(this.props.topicId,widget.id,1).then()
        this.componentDidMount()
        this.componentDidMount()
    }
    moveDown = (widget) =>
    {
        this.props.findWidgetsForTopicUp(this.props.topicId,widget.id,2).then()
        this.componentDidMount()
        this.componentDidMount()
    }
    removeWidget = (id) =>
    {
        this.setState({
                          updated:true
                      })
        this.props.deleteWidget(id).then()

    }

    render(){
        return(

            <div >
                <div className="row mb-2 ">
                    <div className="offset-9">
                        <span className="h5 ml-3 mr-3">Preview</span>
                        <label className="switch">
                            <input type="checkbox" id='preview-btn' data-preview="Off" onClick={()=>this.previewToggle()}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button onClick={() => this.updatePage()} type="button" className="ml-2 pull-right btn btn-success">Save</button>
                </div>


                <div className="scroll">
                <ul className="list-group m-0" id="widget-list">
                    {

                        this.props.widgets.map((widget, index) =>
                                                   <li key={index} className="list-group-item widget-list-item">
                                                       { !this.state.preview &&
                                                       <div className="row mb-2">
                                                           <div className="col-7 h1">{widget.type} Widget</div>
                                                           <div className="col-5 list">
                                                               <button className="btn btn-up btn-warning"  href="#" onClick={()=>this.moveUp(widget)}>
                                                                   <i className="custom-arrow fa fa-arrow-up mr-2 p-2"></i>
                                                               </button>
                                                               <button className="btn btn-down btn-warning ml-2"  href="#" onClick={()=>this.moveDown(widget)}>
                                                                   <i className="custom-arrow fa fa-arrow-down mr-2 p-2"></i>
                                                               </button>

                                                               <select className="ml-2" id={widget.id+'-selector'} defaultValue="HEADING" value={widget.type} onChange={()=>this.updateType(widget)}>
                                                                   <option value="HEADING" >Heading</option>
                                                                   <option value="PARAGRAPH">Paragraph</option>
                                                               </select>
                                                               <button className="ml-2 col-1 p-1 btn btn-danger" onClick={() => this.removeWidget(widget.id,widget.type)}>
                                                                   <i className="fa fa-times-circle"></i>
                                                               </button>
                                                           </div>
                                                       </div>
                                                       }
                                                       <div>
                                                           {console.log(widget)}
                                                           {widget.type === "HEADING" && <HeadingWidget updateHeadingWidget={this.updateHeadingWidget}
                                                                                                              widget={widget}
                                                                                                            preview={this.state.preview}/>}
                                                           {widget.type === "PARAGRAPH" && <ParagraphWidget updateParagraphWidget={this.updateParagraphWidget}
                                                                                                                  widget={widget}
                                                                                                            preview={this.state.preview}/>}
                                                       </div>
                                                   </li>

                        )
                    }

                </ul>
                </div>
                <button className="btn btn-danger add-widget-button m-4" id="add-widget"  onClick={() => this.props.createWidget(this.props.topicId)
                }><i className="fa fa-plus"></i></button>
            </div>


        )
    }

    updatePage() {
        this.componentDidMount()
    }
}
const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                                            type: "WIDGET_FOR_TOPIC",
                                            widgets: widgets
                                        })),

    findWidgetsForTopicUp: (topicId,wid,dire) =>
        findWidgetsForTopicUp(topicId,wid,dire)
            .then(widgets => dispatcher({
                                            type: "WIDGET_FOR_TOPIC_UP",
                                            widgets: widgets
                                        })),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                                           type: "UPDATE",
                                           widget: newWidget
                                       })),
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                                           type: 'DELETE_WIDGET',
                                           widgetId: widgetId
                                       })),
    createWidget: (topicId) =>
        createWidget(topicId,{
                         title: "New Widget",
                         type: "HEADING",
                         topicId: topicId,
                         id: (new Date()).getTime() + ""
                     })
            .then(actualWidget => dispatcher({
                                                 type: "ADD_WIDGET",
                                                 widget: actualWidget
                                             })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                                                  type: "FIND_ALL_WIDGETS",
                                                  widgets: actualWidgets
                                              }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetLists)
