import NavIngredients from "../NavIngredients";
import ItemIngredient from "../ItemIngredient";
import {getIngredientsMap} from './constants';
import styles from './burgerIngredients.module.css'
import {Ingredient} from "../types";
import {FC, useEffect, useMemo, useRef, useState} from "react";

interface BurgerIngredientsProps {
    countTimeSelected: { [key: string]: number }
    ingredients: Ingredient[]
}

const BurgerIngredients: FC<BurgerIngredientsProps> = ({countTimeSelected, ingredients}) => {
    const ingredientsMap = useMemo(() => getIngredientsMap(ingredients), [ingredients])
    const [activeSection, setActiveSection] = useState<string>('Булки')
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const sectionTitles = ingredientsMap.map(el => document.getElementById(el.title));
        const containerTop = container.getBoundingClientRect().top;

        let active = activeSection;

        sectionTitles.forEach(section => {
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop - containerTop <= 0) {
                    console.log(section.id)
                    active = section.id;
                }
            }
        });

        setActiveSection(active);
    };

    const scrollToSection = (sectionId: string) => {
        const container = containerRef.current;
        const section = document.getElementById(sectionId);

        if (container && section) {
            const containerTop = container.getBoundingClientRect().top;
            const sectionTop = section.getBoundingClientRect().top;


            container.scrollTo({
                top: container.scrollTop + (sectionTop - containerTop),
                behavior: 'smooth'
            });

            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [ingredientsMap]);

    return (
        <div className={styles.ingredients}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <NavIngredients activeSection={activeSection} onTabClick={scrollToSection}/>
            <div className={styles.container} ref={containerRef}>
                {ingredientsMap.map(el => (
                    <div key={el.title} id={el.title}>
                        <h2 className="text text_type_main-medium">
                            {el.title}
                        </h2>
                        <div
                            className={styles.ingredientsContainer}
                        >
                            {el.data.map(it =>
                                <ItemIngredient key={it._id} ingredient={it}
                                                countTimeSelected={countTimeSelected}/>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BurgerIngredients
