import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddCartFoodCard from './AddCartFoodCard';
import AddCartCategory from './AddCartCategory';
import useHooks from '../../Hooks/useHooks';
import { useState } from 'react';


const AddCartFood = ({ items }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menuFoods] = useHooks()
    console.log(menuFoods);
    const desserts = menuFoods?.filter(dessert => dessert.category === 'dessert')
    const pizzas = menuFoods?.filter(pizza => pizza.category === 'pizza')
    const salads = menuFoods?.filter(salad => salad.category === 'salad')
    const soups = menuFoods?.filter(soup => soup.category === 'soup')
    return (
        <div className=' my-10'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className=' flex justify-center my-5'>
                    <TabList>
                        <Tab><p className=' hover:text-yellow-300'>Dessert</p></Tab>
                        <Tab><p className=' hover:text-yellow-300'>Pizza</p></Tab>
                        <Tab><p className=' hover:text-yellow-300'>Salad</p></Tab>
                        <Tab><p className=' hover:text-yellow-300'>Soup</p></Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <AddCartCategory items={desserts}></AddCartCategory>
                </TabPanel>
                <TabPanel>
                    <AddCartCategory items={pizzas}></AddCartCategory>
                </TabPanel>
                <TabPanel>
                    <AddCartCategory items={salads}></AddCartCategory>
                </TabPanel>
                <TabPanel>
                    <AddCartCategory items={soups}></AddCartCategory>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AddCartFood;