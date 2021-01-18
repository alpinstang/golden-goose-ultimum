import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (items) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => removeItem(item),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
