import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = (<ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Sushi', amount: '2', price: '12.99' }].map((item) => (
            <li>{item.name}</li>
        ))}
    </ul>);
    <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.82</span>
        </div>
        <div>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
}

export default Cart;