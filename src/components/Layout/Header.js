import React from "react";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealImage} alt="A table full of delicious food!" />
        </div>
    </React.Fragment>
}

export default Header;