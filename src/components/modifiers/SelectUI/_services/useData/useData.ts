import { styleProperty } from '@modifiers/SelectUI/SelectUI.constants';
import { useAttribute } from '@modifiers/SelectUI/_services/useAttribute';

const useData = (device: string, data: Record<string, any>): Record<string, any> => {   
  let style: Record<string, string | boolean>= {},
      etc: Record<string, string | boolean> = {};
  const dataCurrent = Object.keys(data).filter(key => data[key] !== null);

      for (const key of dataCurrent ) {
        const attribute = useAttribute( device, data[key] );
    
        if ( data[key] && styleProperty[key as keyof typeof styleProperty] ) {
          if ( attribute ) style[styleProperty[key as keyof typeof styleProperty]] = attribute
        }
        else {
          if ( attribute ) etc[key] = attribute
        } 
      }
  return {  
            style: (Object.keys(style).length === 0 ) ? null : style, 
            etc: (Object.keys(etc).length === 0 ) ? null : etc 
          }
}

export { useData }