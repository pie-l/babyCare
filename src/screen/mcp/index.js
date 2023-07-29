import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {BackIcon, McpCard} from '../../component';
import {style} from './style';
import {images} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';

const DATA = [
  {
    id: '1',
    image: images.babyBreastFeeding,
    text: 'Feeding Advice',
    list: strings.babyFeedingAdvices,
  },
  {id: '2', image: images.babyBath, text: 'Bath', list: strings.babyBath},
  {
    id: '3',
    image: images.babyDanger,
    text: 'Danger Signals',
    list: strings.babyDangerSignals,
  },
  {
    id: '4',
    image: images.babyWaning,
    text: 'Weaning',
    list: strings.babyWeaning,
  },
  {
    id: '5',
    image: images.babyBehaviour,
    text: 'Normal Behaviour of Infants',
    list: strings.babyBehaviours,
  },
  {
    id: '6',
    image: images.babyDevelopment,
    text: 'Development Milestones',
    list: strings.babyDevelopmentMileStones,
  },
  {
    id: '7',
    image: images.babyParent,
    text: 'Being Good Parent',
    list: strings.beingParent,
  },
  {
    id: '8',
    image: images.babyStimulation,
    text: 'Early Stimulation at Home',
    list: strings.babyStimulation,
  },
];

const MCP = () => {
  const renderItem = ({item}) => {
    return <McpCard item={item} />;
  };

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Care of Infants at Home</Text>

      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={style.listContainerStyle}
      />
    </View>
  );
};

export default MCP;
