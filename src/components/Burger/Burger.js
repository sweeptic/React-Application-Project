import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import { withRouter } from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, index) => (
            <BurgerIngredient key={igKey + index} type={igKey} />
        ));
    });

    if (transformedIngredients.flat().length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

// export default withRouter(burger);
export default burger;
