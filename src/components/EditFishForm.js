import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
    updateFish: PropTypes.func.isRequired,
    // deleteFish: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    let { name, value } = event.currentTarget;

    if (name === 'price') {
      value = parseFloat(value);
    }

    //update that fish
    const updatedFish = {
      ...this.props.fish,
      [name]: value,
    };
    this.props.updateFish(this.props.id, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.id)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
