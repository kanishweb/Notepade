import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    const { firstName: defaultFname, lastName: defaultLname } = data;

    this.state = {
      firstName: defaultFname,
      lastName: defaultLname,
      showData: false,
      showButton: false,
      showButtonName: "SAVE"
    };

    this.handleOnchage = this.handleOnchage.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleOnchage(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });

    /** Hiding if user changes the form data */
    const { showData } = this.state;
    if (showData) {
      this.setState(prevState => ({
        showData: !prevState.showData,
        showButton: !prevState.showButton
      }));
    }
  }



  checkSaveButtton() {
    const { firstName: defaultFname, lastName: defaultLname } = this.props.data;
    const { firstName, lastName } = this.state;
    const changed = firstName !== defaultFname || lastName !== defaultLname;
    return changed ? false : true;
  }

  handleSave(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showButton: !prevState.showButton,
      showButtonName: "SAVING..."
    }));

    /** Mocking we updating the API and using the response to update the state */
    setTimeout(() => {
      this.setState(prevState => ({
        showData: !prevState.showData,
        showButtonName: "SAVE"
      }));
    }, 3000);
  }

  render() {
    const {
      firstName,
      lastName,
      showData,
      showButton,
      showButtonName
    } = this.state;
    const findButtonStatus = showButton || this.checkSaveButtton();

    const renderButton = (
      <button
        type="submit"
        onClick={this.handleSave}
        disabled={findButtonStatus}
      >
        {showButtonName}
      </button>
    );

    const fullName = (
      <p className="showData">
        {firstName} {lastName}
      </p>
    );

    const displayFullName = showData ? fullName : null;
    return (
      <div>
        <form>
          <label> First Name : </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleOnchage}
          />
          <label> Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleOnchage}
          />
          <br />
          {renderButton}
        </form>
        {displayFullName}
      </div>
    );
  }
}

export default Form;
