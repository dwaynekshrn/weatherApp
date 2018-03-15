import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const average = (data) => _.round(_.sum(data)/data.length);

export default ({data, color, units}) => {
    return(
        <div>
           <Sparklines height={120} width={180} data={data}>
             <SparklinesLine color={color}  /> 
             <SparklinesReferenceLine type="avg" />
           </Sparklines>
           <div><i>{average(data)} {units}</i></div>
        </div>
    );
}
