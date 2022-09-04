import Hero from './Hero';
import Featured from './Featured'; 
import Grid from './Grid';
import Reviews from './Reviews';
import Rotate from 'react-reveal/Rotate';
import Netflix from './Netflix';
import Sellers from './Sellers';
import InteractiveMap from './InteractiveMap';

function Home(){

    return(
        <div>
            <Hero/>
            <Featured/>
            <Rotate topLeft>
                    <Netflix/>
            </Rotate>
        <Grid/>
        <Reviews/>
        <InteractiveMap/>
        <Sellers/>
       
      </div>
    );
}

export default Home;