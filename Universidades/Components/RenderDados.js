import { FlatList} from 'react-native';
import { RenderItens } from './RenderItens';

export const RenderDados = (props) =>{

    console.log(props.resultado)
    return <FlatList
        data = {props.resultado}
        renderItem = {({item, index}) => <RenderItens
                                            uni={item.name}
                                            pais={item.country}
                                            indice={index}/>}
        keyExtractor = {idx => Math.random()}/>    
}