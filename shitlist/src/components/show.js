import React, {Component } from 'react'
import { MdEdit, MdBackspace, MdSave } from "react-icons/md"
import { Col,Form } from 'react-bootstrap';

class show extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false 
        }
        this.edit = this.edit.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.delete = this.delete.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderUI = this.renderUI.bind(this)
    }
    handleOptionChange(changeEvent) {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    }
    renderForm(props) {
        return (
          <div>
            <Form>
            <Col sm={10} >
        <Form.Check
        inline
          type="radio"
          label="1"
          value="1"
          checked={true}
          checked={this.state.selectedOption === '1'}
          name="formHorizontalRadios"
          onChange={this.handleOptionChange}
          id="formHorizontalRadios1"
        />
        <Form.Check
        inline
          type="radio"
          label="2"
          value="2"
          checked={this.state.selectedOption === '2'}
          name="formHorizontalRadios"
          onChange={this.handleOptionChange}
          id="formHorizontalRadios2"
        />
        <Form.Check
        inline
          type="radio"
          label="3"
          value="3"
          checked={this.state.selectedOption === '3'}
          name="formHorizontalRadios"
          onChange={this.handleOptionChange}
          id="formHorizontalRadios3"
        />
        <Form.Check
        inline
          type="radio"
          value="4"
          label="4"
          checked={this.state.selectedOption === '4'}
          name="formHorizontalRadios"
          onChange={this.handleOptionChange}
          id="formHorizontalRadios4"
        />
        <Form.Check
        inline
          type="radio"
          label="5"
          value="5"
          checked={this.state.selectedOption === '5'}
          name="formHorizontalRadios"
          onChange={this.handleOptionChange}
          id="formHorizontalRadios5"
        />
      </Col>
              <textarea placeholder="comment here" ref={input => this.newIdea = input} cols="20" rows="5" />
              <span>
                <button className="btn btn-primary" onClick={this.save}> Save Rate <MdSave /></button>
                <button className="btn btn-primary" onClick={this.cancel}> back <MdBackspace /></button>
              </span>
            </Form>
          </div>
        )
      }
      edit() {
        this.setState({ editing: true }) 
      }
    
      delete() {
        this.props.onDelete(this.props.index)
      }
    
      save(event) {
        event.preventDefault() // to prevent the default behaviour/ functionality
        var x;
        var opts={
          userId:123456789,//static user
          rate_score:this.state.selectedOption,
          rate_text:this.newIdea.value,
          show_id:33337
        }
        fetch('https://shit-list-zahor-omri.herokuapp.com/user/createRating', {
          method: 'post',
          body: JSON.stringify(opts)
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log('Created Gist:', data.html_url);
        });
        console.log(this.newIdea.value,this.state.selectedOption)
//         for (var i = 0, length = this.newIdea.formHorizontalRadios.length; i < length; i++)
// {
//  if (this.newIdeaformHorizontalRadios[i].checked)
//  {
//   // do whatever you want with the checked radio
//   alert(this.newIdeaformHorizontalRadios[i].value);

//   // only one radio can be logically checked, don't check the rest
//   break;
//  }
// }
        
        console.log(this.newIdea.value)
        this.props.onChange(this.newIdea.value, this.props.index)
        // var opts={
        //     "userId":324420933,
        //     "rate_score":
        // }
        // fetch('https://shit-list-zahor-omri.herokuapp.com/user/createRating', {
        //     method: 'post',
        //     body: JSON.stringify(opts)
        // }).then(function(response) {
        //     return response.json();
        // }).then(function(data) {
        //     ChromeSamples.log('Created Gist:', data.html_url);
        // });
        this.setState({ editing: false }) 
      }
    
      renderUI(props) {
        return (
                <div className= 'show'>
                    <div> {this.props.children} </div>
                    <span>
          <button 
            onClick={this.edit} 
            className="btn btn-primary" 
            style={{marginRight: '7px'}}
          > 
            Rate show <MdEdit />
          </button>
        </span>
                </div>
        )
      }
    
      render() {
        return this.state.editing ? this.renderForm() : this.renderUI()
      }
    
}

export default show