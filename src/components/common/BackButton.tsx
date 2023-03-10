import { View, TouchableOpacity } from 'react-native';
import Icon from './Icon';

interface Props {
    size: number,
}

const BackButton = ({size}: Props) => {
  return (
    <View>
        <Icon type={'material'} name='chevron-left' size={20}/>
    </View>
  )
}

export default BackButton
