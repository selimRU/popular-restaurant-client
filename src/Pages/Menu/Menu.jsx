import ban from '../../Assets/menu/banner3.jpg'
import deserts from '../../Assets/menu/dessert-bg.jpeg'
import pizza from '../../Assets/menu/pizza-bg.jpg'
import salad from '../../Assets/menu/salad-bg.jpg'
import soup from '../../Assets/menu/soup-bg.jpg'
// import drink from '../../Assets/menu/drink-bg.jpg'
import SecTitle from '../../Components/SecTitle/SecTitle';
import useHooks from '../../Hooks/useHooks';
import MenuCategory from './MenuCategory';
import MenuCover from './MenuCover';


const Menu = () => {
    const menuFoods = useHooks()
    const desserts = menuFoods.filter(dessert => dessert.category === 'dessert')
    const pizzas = menuFoods.filter(pizza => pizza.category === 'pizza')
    const salads = menuFoods.filter(salad => salad.category === 'salad')
    const soups = menuFoods.filter(soup => soup.category === 'soup')
    return (
        <div>
            <MenuCover title={'OUR MENU'} details={'Would you like to try a dish?'} img={ban}></MenuCover>
            <SecTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SecTitle>
            {/* dessert part */}
            <MenuCover title={'DESSERTS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={deserts} ></MenuCover>
            <MenuCategory items={desserts}></MenuCategory>
            {/* pizza part */}
            <MenuCover title={'PIZZA'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={pizza} ></MenuCover>
            <MenuCategory items={pizzas}></MenuCategory>
            {/* salad part */}
            <MenuCover title={'SALAD'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={salad} ></MenuCover>
            <MenuCategory items={salads}></MenuCategory>
            {/* soup part */}
            <MenuCover title={'SOUP'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={soup} ></MenuCover>
            <MenuCategory items={soups}></MenuCategory>
        </div>
    );
};

export default Menu;